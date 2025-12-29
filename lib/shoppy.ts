export async function createShoppyOrder(
  orderId: string,
  customerEmail: string,
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>,
  totalAmount: number
) {
  const apiKey = process.env.SHOPPYGG_API_KEY;

  if (!apiKey) {
    throw new Error('Shoppy.gg API key not configured');
  }

  try {
    const response = await fetch('https://shoppy.gg/api/v1/pay', {
      method: 'POST',
      headers: {
        'Authorization': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'CyberZed Digital Accounts Order',
        currency: 'USD',
        price: totalAmount,
        email: customerEmail,
        webhook_url: `${process.env.NEXT_PUBLIC_SITE_URL}/api/webhooks/shoppy`,
        custom_fields: {
          order_id: orderId,
        },
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success?order_id=${orderId}`,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create Shoppy.gg order');
    }

    const data = await response.json();
    return {
      paymentUrl: data.url,
      shoppyOrderId: data.id,
    };
  } catch (error: any) {
    console.error('Shoppy.gg order creation error:', error);
    throw new Error(`Failed to create Shoppy.gg order: ${error.message}`);
  }
}
