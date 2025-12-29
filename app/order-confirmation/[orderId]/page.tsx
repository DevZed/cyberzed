'use client';

import { useEffect, useState } from 'react';
import { use } from 'react';
import Link from 'next/link';

interface Order {
  id: string;
  customer_email: string;
  customer_name: string;
  total_amount: number;
  status: string;
  payment_status: string;
  created_at: string;
  order_items: Array<{
    quantity: number;
    price_per_unit: number;
    subtotal: number;
    products: {
      name: string;
      category: string;
    };
  }>;
}

export default function OrderConfirmationPage({
  params,
}: {
  params: Promise<{ orderId: string }>;
}) {
  const resolvedParams = use(params);
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchOrder();
  }, [resolvedParams.orderId]);

  const fetchOrder = async () => {
    try {
      const response = await fetch(`/api/orders?id=${resolvedParams.orderId}`);
      const data = await response.json();
      if (data.success) {
        setOrder(data.order);
      }
    } catch (error) {
      console.error('Error fetching order:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400">Loading order details...</p>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
        <nav className="border-b border-gray-800 px-6 py-4">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            CyberZed
          </Link>
        </nav>
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Order not found</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <nav className="border-b border-gray-800 px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          CyberZed
        </Link>
      </nav>

      <div className="container mx-auto px-6 py-12 max-w-3xl">
        {/* Success Message */}
        <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-8 mb-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold mb-2">Order Received!</h1>
          <p className="text-gray-300 mb-4">
            Thank you for your purchase, {order.customer_name}
          </p>
          <p className="text-sm text-gray-400">
            Order ID: <span className="font-mono text-blue-400">{order.id}</span>
          </p>
        </div>

        {/* Order Status */}
        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Order Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-400">Payment Status</span>
              <span className="font-semibold capitalize px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                {order.payment_status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Order Status</span>
              <span className="font-semibold capitalize px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                {order.status}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Email</span>
              <span className="font-semibold">{order.customer_email}</span>
            </div>
          </div>
        </div>

        {/* Order Items */}
        <div className="bg-gray-800 rounded-xl p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6">Order Details</h2>
          <div className="space-y-4">
            {order.order_items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-start pb-4 border-b border-gray-700 last:border-0"
              >
                <div className="flex-1">
                  <h3 className="font-semibold">{item.products.name}</h3>
                  <p className="text-sm text-gray-400">
                    Quantity: {item.quantity} accounts
                  </p>
                  <p className="text-sm text-gray-400">
                    ${item.price_per_unit.toFixed(2)} per account
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">${item.subtotal.toFixed(2)}</p>
                </div>
              </div>
            ))}

            <div className="flex justify-between text-2xl font-bold pt-4 border-t border-gray-700">
              <span>Total</span>
              <span>${order.total_amount.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
          <ol className="space-y-3 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span>Complete the payment using the payment link sent to your email</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span>Once payment is confirmed, accounts will be delivered instantly</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span>Check your email for account credentials and instructions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span>Contact support on Telegram if you have any questions</span>
            </li>
          </ol>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/"
            className="inline-block bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
