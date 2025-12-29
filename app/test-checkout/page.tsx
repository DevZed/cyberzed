'use client';

import { useCart } from '@/lib/CartContext';
import Link from 'next/link';

export default function TestCheckoutPage() {
  const { addItem, cart, itemCount } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: 'chatgpt-52-1year',
      name: 'ChatGPT 5.2 - 1 Year',
      price: 8.99,
      quantity: 10
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0E27] text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Test Checkout Flow</h1>
        
        <div className="bg-[#1A1F3A] p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-bold mb-4">Test Product</h2>
          <p className="text-gray-300 mb-4">ChatGPT 5.2 - 1 Year Subscription</p>
          <p className="text-xl font-bold mb-4">$8.99 per account (10 accounts minimum)</p>
          
          <button
            onClick={handleAddToCart}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg"
          >
            Add 10 Accounts to Cart
          </button>
        </div>

        {itemCount > 0 && (
          <div className="bg-[#1A1F3A] p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Cart: {itemCount} items</h3>
            <Link
              href="/checkout"
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg"
            >
              Go to Checkout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
