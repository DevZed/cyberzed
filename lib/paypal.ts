import paypal from '@paypal/checkout-server-sdk';

function environment() {
  const clientId = process.env.PAYPAL_CLIENT_ID!;
  const clientSecret = process.env.PAYPAL_CLIENT_SECRET!;

  if (process.env.PAYPAL_MODE === 'production') {
    return new paypal.core.LiveEnvironment(clientId, clientSecret);
  }
  return new paypal.core.SandboxEnvironment(clientId, clientSecret);
}

export function paypalClient() {
  return new paypal.core.PayPalHttpClient(environment());
}

export async function createPayPalOrder(
  orderId: string,
  items: Array<{
    name: string;
    quantity: number;
    price: number;
  }>,
  totalAmount: number
) {
  const request = new paypal.orders.OrdersCreateRequest();
  request.prefer('return=representation');
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        reference_id: orderId,
        description: 'CyberZed Digital Accounts',
        amount: {
          currency_code: 'USD',
          value: totalAmount.toFixed(2),
          breakdown: {
            item_total: {
              currency_code: 'USD',
              value: totalAmount.toFixed(2),
            },
          },
        },
        items: items.map((item) => ({
          name: item.name,
          quantity: '1',
          unit_amount: {
            currency_code: 'USD',
            value: (item.price * item.quantity).toFixed(2),
          },
        })),
      },
    ],
    application_context: {
      brand_name: 'CyberZed',
      landing_page: 'NO_PREFERENCE',
      user_action: 'PAY_NOW',
      return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success?order_id=${orderId}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/checkout?canceled=true`,
    },
  });

  try {
    const response = await paypalClient().execute(request);
    return {
      orderId: response.result.id,
      links: response.result.links,
    };
  } catch (error: any) {
    console.error('PayPal order creation error:', error);
    throw new Error(`Failed to create PayPal order: ${error.message}`);
  }
}

export async function capturePayPalOrder(paypalOrderId: string) {
  const request = new paypal.orders.OrdersCaptureRequest(paypalOrderId);
  request.requestBody({});

  try {
    const response = await paypalClient().execute(request);
    return response.result;
  } catch (error: any) {
    console.error('PayPal capture error:', error);
    throw new Error(`Failed to capture PayPal payment: ${error.message}`);
  }
}
