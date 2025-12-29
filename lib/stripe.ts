import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

export async function createStripeCheckoutSession(
  orderId: string,
  customerEmail: string,
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>,
  totalAmount: number
) {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      customer_email: customerEmail,
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
            description: `${item.quantity} digital accounts`,
          },
          unit_amount: Math.round(item.price * 100), // Convert to cents
        },
        quantity: 1,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success?session_id={CHECKOUT_SESSION_ID}&order_id=${orderId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout?canceled=true`,
      metadata: {
        order_id: orderId,
      },
    });

    return { sessionId: session.id, url: session.url };
  } catch (error: any) {
    console.error('Stripe session creation error:', error);
    throw new Error(`Failed to create Stripe session: ${error.message}`);
  }
}
