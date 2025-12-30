import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { capturePayPalOrder } from '@/lib/paypal';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const eventType = body.event_type;

    console.log('PayPal webhook event:', eventType);

    switch (eventType) {
      case 'CHECKOUT.ORDER.APPROVED':
        const orderId = body.resource.id;
        const purchaseUnits = body.resource.purchase_units;
        const referenceId = purchaseUnits[0]?.reference_id;

        if (referenceId) {
          // Capture the payment
          await capturePayPalOrder(orderId);

          // Update order in database
          await supabase
            .from('orders')
            .update({
              payment_status: 'paid',
              status: 'processing',
              paid_at: new Date().toISOString(),
            })
            .eq('id', referenceId);

          console.log('✅ PayPal payment captured for order:', referenceId);
        }
        break;

      case 'PAYMENT.CAPTURE.COMPLETED':
        console.log('Payment capture completed');
        break;

      default:
        console.log(`Unhandled PayPal event: ${eventType}`);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('PayPal webhook error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
