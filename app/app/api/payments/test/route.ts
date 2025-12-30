import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { order_id, payment_method } = body;

    if (!order_id) {
      return NextResponse.json(
        { success: false, message: 'Missing order_id' },
        { status: 400 }
      );
    }

    // Simulate payment processing
    console.log(`🧪 TEST MODE: Processing payment for order ${order_id}`);
    
    // Update order status to simulate successful payment
    await supabase
      .from('orders')
      .update({
        payment_method: payment_method || 'test',
        payment_status: 'paid',
        status: 'processing',
        paid_at: new Date().toISOString(),
      })
      .eq('id', order_id);

    // In test mode, redirect to success page immediately
    const successUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success?order_id=${order_id}`;

    return NextResponse.json({
      success: true,
      payment_url: successUrl,
      message: 'Test payment processed successfully',
    });
  } catch (error: any) {
    console.error('❌ Test Payment Error:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to process test payment',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
