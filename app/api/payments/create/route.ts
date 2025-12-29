import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { createStripeCheckoutSession } from '@/lib/stripe';
import { createPayPalOrder } from '@/lib/paypal';
import { createShoppyOrder } from '@/lib/shoppy';
import { PAYMENT_METHODS } from '@/lib/payment-config';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { order_id, payment_method } = body;

    if (!order_id || !payment_method) {
      return NextResponse.json(
        { success: false, message: 'Missing order_id or payment_method' },
        { status: 400 }
      );
    }

    // Fetch order details
    const { data: order, error: orderError } = await supabase
      .from('orders')
      .select(`
        *,
        order_items (
          *,
          products (*)
        )
      `)
      .eq('id', order_id)
      .single();

    if (orderError || !order) {
      return NextResponse.json(
        { success: false, message: 'Order not found' },
        { status: 404 }
      );
    }

    // Prepare items for payment
    const items = order.order_items.map((item: any) => ({
      name: item.products.name,
      quantity: item.quantity,
      price: item.price_per_unit,
    }));

    let paymentData: any = {};

    // Create payment based on method
    switch (payment_method) {
      case PAYMENT_METHODS.STRIPE:
        const stripeSession = await createStripeCheckoutSession(
          order_id,
          order.customer_email,
          items,
          order.total_amount
        );
        paymentData = {
          payment_url: stripeSession.url,
          session_id: stripeSession.sessionId,
        };
        break;

      case PAYMENT_METHODS.PAYPAL:
        const paypalOrder = await createPayPalOrder(
          order_id,
          items,
          order.total_amount
        );
        paymentData = {
          payment_url: paypalOrder.approveUrl,
          paypal_order_id: paypalOrder.orderId,
        };
        break;

      case PAYMENT_METHODS.SHOPPY:
        const shoppyOrder = await createShoppyOrder(
          order_id,
          order.customer_email,
          items,
          order.total_amount
        );
        paymentData = {
          payment_url: shoppyOrder.paymentUrl,
          shoppy_order_id: shoppyOrder.shoppyOrderId,
        };
        break;

      default:
        return NextResponse.json(
          { success: false, message: 'Invalid payment method' },
          { status: 400 }
        );
    }

    // Update order with payment method
    await supabase
      .from('orders')
      .update({ payment_method })
      .eq('id', order_id);

    return NextResponse.json({
      success: true,
      ...paymentData,
    });
  } catch (error: any) {
    console.error('❌ Payment Creation Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create payment',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
