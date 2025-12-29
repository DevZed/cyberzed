import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    console.log('Shoppy.gg webhook received:', body);

    const orderId = body.custom_fields?.order_id;
    const status = body.status;

    if (!orderId) {
      return NextResponse.json({ error: 'No order ID' }, { status: 400 });
    }

    // Update order based on Shoppy status
    if (status === 'completed' || status === 'paid') {
      await supabase
        .from('orders')
        .update({
          payment_status: 'paid',
          status: 'processing',
          paid_at: new Date().toISOString(),
        })
        .eq('id', orderId);

      console.log('✅ Shoppy payment completed for order:', orderId);
    } else if (status === 'cancelled' || status === 'refunded') {
      await supabase
        .from('orders')
        .update({
          payment_status: status,
          status: 'cancelled',
        })
        .eq('id', orderId);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('Shoppy webhook error:', error);
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}
