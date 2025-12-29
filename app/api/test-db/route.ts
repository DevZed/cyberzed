import { supabase } from '@/lib/supabase';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Test 1: Fetch products
    const { data: products, error: productsError } = await supabase
      .from('products')
      .select('*')
      .eq('is_active', true);

    if (productsError) throw productsError;

    // Test 2: Count accounts
    const { count: accountsCount, error: accountsError } = await supabase
      .from('accounts_pool')
      .select('*', { count: 'exact', head: true });

    if (accountsError) throw accountsError;

    return NextResponse.json({
      success: true,
      message: 'Database connection successful! ✅',
      data: {
        products_count: products?.length || 0,
        products: products,
        accounts_in_pool: accountsCount || 0,
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: 'Database connection failed',
        error: error.message,
      },
      { status: 500 }
    );
  }
}
