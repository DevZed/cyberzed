import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { customerEmail, customerName, telegramUsername, items, paymentMethod } = body;

    if (!customerEmail || !customerName || !telegramUsername || !items || items.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Fetch products to convert slugs to UUIDs
    const productSlugs = items.map((item: any) => item.id);
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('id, slug, price')
      .in('slug', productSlugs);

    if (productsError || !products) {
      return NextResponse.json(
        { error: 'Failed to fetch products' },
        { status: 500 }
      );
    }

    const productMap = new Map();
    products.forEach(product => {
      productMap.set(product.slug, product);
    });

    // Calculate total and prepare items
    let totalPrice = 0;
    const orderItemsData = [];
    
    for (const item of items) {
      const product = productMap.get(item.id);
      if (!product) {
        return NextResponse.json(
          { error: `Product not found: ${item.id}` },
          { status: 400 }
        );
      }
      totalPrice += item.price * item.quantity;
      orderItemsData.push({
        product_uuid: product.id,
        product_name: product.name,
        quantity: item.quantity,
        unit_price: item.price
      });
    }

    // Create order
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .insert({
        customer_email: customerEmail,
        customer_name: customerName,
        telegram_username: telegramUsername,
        total_price: totalPrice,
        currency: 'USD',
        status: 'pending',
        payment_status: 'pending',
        payment_method: paymentMethod || null
      })
      .select()
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { error: 'Failed to create order' },
        { status: 500 }
      );
    }

    // Create order items
    const orderItems = orderItemsData.map((item: any) => ({
      order_id: order.id,
      product_id: item.product_uuid,
      quantity: item.quantity,
      unit_price: item.unit_price
    }));

    const { error: itemsError } = await supabase
      .from('order_items')
      .insert(orderItems);

    if (itemsError) {
      await supabase.from('orders').delete().eq('id', order.id);
      return NextResponse.json(
        { error: 'Failed to create order items' },
        { status: 500 }
      );
    }

    // Handle payment method
    let paymentData: any = {};

    if (paymentMethod) {
      switch (paymentMethod) {
        case 'stripe':
          // Create Stripe checkout session
          const stripeResponse = await fetch('https://api.stripe.com/v1/checkout/sessions', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${process.env.STRIPE_SECRET_KEY}`,
              'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams({
              'payment_method_types[]': 'card',
              'customer_email': customerEmail,
              'mode': 'payment',
              'success_url': `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}&order_id=${order.id}`,
              'cancel_url': `${process.env.NEXT_PUBLIC_SITE_URL}/checkout?canceled=true`,
              ...orderItemsData.reduce((acc: any, item: any, index: number) => ({
                ...acc,
                [`line_items[${index}][price_data][currency]`]: 'usd',
                [`line_items[${index}][price_data][product_data][name]`]: item.product_name,
                [`line_items[${index}][price_data][unit_amount]`]: Math.round(item.unit_price * 100),
                [`line_items[${index}][quantity]`]: item.quantity,
              }), {}),
              'metadata[order_id]': order.id,
            }).toString()
          });

          if (stripeResponse.ok) {
            const stripeSession = await stripeResponse.json();
            paymentData = {
              paymentUrl: stripeSession.url,
              sessionId: stripeSession.id
            };
          }
          break;

        case 'paypal':
          // Create PayPal order
          const paypalAuth = Buffer.from(
            `${process.env.PAYPAL_CLIENT_ID}:${process.env.PAYPAL_CLIENT_SECRET}`
          ).toString('base64');

          const paypalResponse = await fetch(
            process.env.PAYPAL_MODE === 'production' 
              ? 'https://api-m.paypal.com/v2/checkout/orders'
              : 'https://api-m.sandbox.paypal.com/v2/checkout/orders',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${paypalAuth}`,
              },
              body: JSON.stringify({
                intent: 'CAPTURE',
                purchase_units: [{
                  reference_id: order.id,
                  description: 'CyberZed Digital Accounts',
                  amount: {
                    currency_code: 'USD',
                    value: totalPrice.toFixed(2),
                    breakdown: {
                      item_total: {
                        currency_code: 'USD',
                        value: totalPrice.toFixed(2)
                      }
                    }
                  },
                  items: orderItemsData.map((item: any) => ({
                    name: item.product_name,
                    quantity: '1',
                    unit_amount: {
                      currency_code: 'USD',
                      value: (item.unit_price * item.quantity).toFixed(2)
                    }
                  }))
                }],
                application_context: {
                  brand_name: 'CyberZed',
                  return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success?order_id=${order.id}`,
                  cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout?canceled=true`
                }
              })
            }
          );

          if (paypalResponse.ok) {
            const paypalOrder = await paypalResponse.json();
            const approveLink = paypalOrder.links.find((link: any) => link.rel === 'approve');
            paymentData = {
              paymentUrl: approveLink?.href,
              paypalOrderId: paypalOrder.id
            };
          }
          break;

        case 'shoppy':
          // Create Shoppy.gg order
          const shoppyResponse = await fetch(`${process.env.NEXT_PUBLIC_SHOPPY_SHOP_URL}/api/v1/orders`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': process.env.SHOPPY_GG_API_KEY!,
            },
            body: JSON.stringify({
              email: customerEmail,
              gateway: 'paypal',
              currency: 'USD',
              custom_fields: {
                telegram: telegramUsername,
                order_id: order.id
              },
              cart: orderItemsData.map((item: any) => ({
                title: item.product_name,
                price: item.unit_price * item.quantity,
                quantity: 1
              })),
              return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success?order_id=${order.id}`
            })
          });

          if (shoppyResponse.ok) {
            const shoppyOrder = await shoppyResponse.json();
            paymentData = {
              paymentUrl: shoppyOrder.invoice_url,
              shoppyOrderId: shoppyOrder.id
            };
          }
          break;
      }
    }

    return NextResponse.json({
      success: true,
      orderId: order.id,
      message: 'Order created successfully',
      ...paymentData
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
