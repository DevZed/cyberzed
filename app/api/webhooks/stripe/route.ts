import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  const body = await request.text();
  const signature = (await headers()).get('stripe-signature');

  if (!signature) {
    return NextResponse.json(
      { error: 'No signature' },
      { status: 400 }
    );
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!
    );
  } catch (err: any) {
    console.error('Webhook signature verification failed:', err.message);
    return NextResponse.json(
      { error: 'Webhook signature verification failed' },
      { status: 400 }
    );
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      const orderId = session.metadata?.order_id;

      if (orderId) {
        // Update order status
        await supabase
          .from('orders')
          .update({
            payment_status: 'paid',
            status: 'processing',
            paid_at: new Date().toISOString(),
          })
          .eq('id', orderId);

        console.log('✅ Payment completed for order:', orderId);
        
        // TODO: Trigger account delivery
        // TODO: Send confirmation email
      }
      break;

    case 'checkout.session.expired':
      const expiredSession = event.data.object;
      const expiredOrderId = expiredSession.metadata?.order_id;

      if (expiredOrderId) {
        await supabase
          .from('orders')
          .update({
            payment_status: 'expired',
            status: 'cancelled',
          })
          .eq('id', expiredOrderId);
      }
      break;

    default:
      console.log(`Unhandled event type: ${event.type}`);
  }

  return NextResponse.json({ received: true });
}
