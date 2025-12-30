'use client';

import { useCart } from '@/lib/CartContext';

export default function TestCheckoutPage() {
  const { addItem } = useCart();

  const handleAddToCart = () => {
    addItem({
      id: 'test-product',
      name: 'Test Product',
      quantity: 1,
      price_per_unit: 1,
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="space-y-4 text-center">
        <h1 className="text-2xl font-bold">Test Checkout Page</h1>
        <button
          onClick={handleAddToCart}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg"
        >
          Add test item to cart
        </button>
      </div>
    </div>
  );
}
