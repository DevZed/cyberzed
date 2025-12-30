'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function PaymentSuccessPage() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get('order_id');
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    // Give webhook time to process
    const timer = setTimeout(() => {
      setChecking(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <nav className="border-b border-gray-800 px-6 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-400">
          CyberZed
        </Link>
      </nav>

      <div className="container mx-auto px-6 py-20 max-w-2xl">
        <div className="bg-gray-800 rounded-xl p-12 text-center">
          {checking ? (
            <>
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-6"></div>
              <h1 className="text-3xl font-bold mb-4">Processing Your Payment...</h1>
              <p className="text-gray-400">
                Please wait while we confirm your payment
              </p>
            </>
          ) : (
            <>
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h1 className="text-4xl font-bold mb-4">Payment Successful!</h1>
              <p className="text-gray-300 mb-8">
                Your payment has been processed successfully
              </p>
              
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-6 mb-8">
                <p className="text-lg mb-2">📧 Check your email</p>
                <p className="text-gray-400 text-sm">
                  Your accounts and order details have been sent to your email address
                </p>
              </div>

              <div className="space-y-3">
                {orderId && (
                  <Link
                    href={`/order-confirmation/${orderId}`}
                    className="block w-full bg-blue-500 hover:bg-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                  >
                    View Order Details
                  </Link>
                )}
                <Link
                  href="/"
                  className="block w-full bg-gray-700 hover:bg-gray-600 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Back to Home
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
