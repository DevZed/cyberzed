'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Plan {
  id: string;
  duration: string;
  price: number;
  label: string;
  badge?: string;
}

const plans: Plan[] = [
  { id: '1-month', duration: '1 Month', price: 1.50, label: 'Short Term' },
  { id: '3-months', duration: '3 Months', price: 2.00, label: 'Popular', badge: 'Popular' },
  { id: '6-months', duration: '6 Months', price: 3.50, label: 'Best Value', badge: 'Best Value' },
  { id: '1-year', duration: '1 Year', price: 6.00, label: 'Long Term' },
];

export default function SpotifyPage() {
  const router = useRouter();
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [quantity, setQuantity] = useState(10);
  const [showModal, setShowModal] = useState(false);

  const handleSelectPlan = (plan: Plan) => {
    setSelectedPlan(plan);
    setQuantity(10);
    setShowModal(true);
  };

  const handleAddToCart = () => {
    if (!selectedPlan) return;
    const existingCart = localStorage.getItem('cart');
    const cart = existingCart ? JSON.parse(existingCart) : [];
    const cartItem = {
      id: `spotify-${selectedPlan.id}-${Date.now()}`,
      productId: 'spotify',
      name: `Spotify Premium - ${selectedPlan.duration}`,
      price: selectedPlan.price,
      quantity: quantity,
      duration: selectedPlan.duration
    };
    cart.push(cartItem);
    localStorage.setItem('cart', JSON.stringify(cart));
    setShowModal(false);
    alert(`Added ${quantity} Spotify Premium ${selectedPlan.duration} accounts to cart!`);
  };

  const handleBuyNow = () => {
    if (!selectedPlan) return;
    const params = new URLSearchParams({
      product: 'spotify',
      duration: selectedPlan.duration,
      price: selectedPlan.price.toString(),
      quantity: quantity.toString()
    });
    router.push(`/checkout?${params.toString()}`);
  };

  const calculateTotal = () => {
    if (!selectedPlan) return 0;
    return selectedPlan.price * quantity;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <nav className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-emerald-500 cursor-pointer" onClick={() => router.push('/')}>CyberZed</h1>
          <div className="flex gap-6">
            <button onClick={() => router.push('/')} className="hover:text-emerald-400 transition-colors">Home</button>
            <button onClick={() => router.push('/pricing')} className="hover:text-emerald-400 transition-colors">Pricing</button>
          </div>
        </div>
      </nav>
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <div className="inline-block bg-emerald-500/10 border border-emerald-500/30 rounded-full px-4 py-2 mb-6">🎵 Music Platform</div>
        <h1 className="text-5xl font-bold mb-4">Spotify Premium Accounts</h1>
        <p className="text-xl text-gray-400 mb-6 max-w-3xl mx-auto">Resell ready-made Spotify Premium accounts for your clients with ad-free listening, unlimited skips, and offline downloads</p>
        <p className="text-emerald-400 font-semibold">⚡ Wholesale pricing • Minimum 10 accounts per order</p>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-4">Choose Your Plan Duration</h2>
        <p className="text-center text-gray-400 mb-12">All plans include the same premium features • Select based on your resale needs</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
            <div key={plan.id} className={`bg-gray-800/50 rounded-lg p-6 border ${plan.badge === 'Popular' ? 'border-emerald-500' : 'border-gray-700'} hover:border-emerald-500 transition-all relative`}>
              {plan.badge && (<div className="absolute -top-3 left-1/2 transform -translate-x-1/2"><span className="bg-emerald-500 text-black text-xs font-bold px-3 py-1 rounded-full">{plan.badge}</span></div>)}
              <div className="text-center mb-6">
                <p className="text-sm text-gray-400 mb-2">{plan.label}</p>
                <h3 className="text-2xl font-bold mb-4">{plan.duration}</h3>
                <div className="mb-2"><span className="text-4xl font-bold text-emerald-400">${plan.price}</span><span className="text-gray-400 ml-2">per account</span></div>
                <p className="text-sm text-gray-400">Min. 10 accounts</p>
              </div>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-sm"><span className="text-emerald-400">✓</span> Ad-free listening</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-emerald-400">✓</span> Unlimited skips</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-emerald-400">✓</span> High-quality audio</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-emerald-400">✓</span> Offline downloads</li>
                <li className="flex items-center gap-2 text-sm"><span className="text-emerald-400">✓</span> All devices supported</li>
              </ul>
              <button onClick={() => handleSelectPlan(plan)} className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-lg transition-colors flex items-center justify-center gap-2">Select Plan <span>→</span></button>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What You Get With Spotify Premium</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"><div className="text-2xl mb-3">✓</div><h3 className="font-semibold mb-2">Ad-free music listening</h3></div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"><div className="text-2xl mb-3">✓</div><h3 className="font-semibold mb-2">Unlimited skips on all tracks</h3></div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"><div className="text-2xl mb-3">✓</div><h3 className="font-semibold mb-2">Download music for offline listening</h3></div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"><div className="text-2xl mb-3">✓</div><h3 className="font-semibold mb-2">High-quality audio streaming (320kbps)</h3></div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"><div className="text-2xl mb-3">✓</div><h3 className="font-semibold mb-2">Works on mobile, desktop and TV</h3></div>
          <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-6"><div className="text-2xl mb-3">✓</div><h3 className="font-semibold mb-2">Perfect for bundles and digital shops</h3></div>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center"><div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">1</div><h3 className="font-semibold mb-2">Choose quantity & duration</h3><p className="text-gray-400 text-sm">Select how many Spotify Premium accounts you need and the subscription length (minimum 10).</p></div>
          <div className="text-center"><div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">2</div><h3 className="font-semibold mb-2">Secure payment</h3><p className="text-gray-400 text-sm">Pay safely via PayPal or supported gateways with instant confirmation.</p></div>
          <div className="text-center"><div className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">3</div><h3 className="font-semibold mb-2">Fast delivery</h3><p className="text-gray-400 text-sm">Receive account credentials immediately in your dashboard and by email.</p></div>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <details className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"><summary className="font-semibold cursor-pointer">Do these accounts work on all devices?</summary><p className="text-gray-400 mt-4">Yes, the accounts work on mobile, desktop, tablet and supported TVs.</p></details>
          <details className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"><summary className="font-semibold cursor-pointer">What's the difference between the subscription lengths?</summary><p className="text-gray-400 mt-4">All plans include the same premium features. The only difference is how long each account remains active.</p></details>
          <details className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"><summary className="font-semibold cursor-pointer">Can I mix different subscription lengths in one order?</summary><p className="text-gray-400 mt-4">Yes! You can place separate orders for different subscription lengths. Each order requires a minimum of 10 accounts.</p></details>
          <details className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"><summary className="font-semibold cursor-pointer">Can I resell these accounts?</summary><p className="text-gray-400 mt-4">This offer is designed for resellers, digital stores and bundle creators.</p></details>
          <details className="bg-gray-800/50 border border-gray-700 rounded-lg p-6"><summary className="font-semibold cursor-pointer">Is there any warranty?</summary><p className="text-gray-400 mt-4">We provide replacement for non-working accounts within the first 7 days according to our replacement policy.</p></details>
        </div>
      </section>
      {showModal && selectedPlan && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4" onClick={() => setShowModal(false)}>
          <div className="bg-gray-800 rounded-lg max-w-md w-full p-6 border border-gray-700" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-start mb-4">
              <div><h3 className="text-2xl font-bold">Select Quantity</h3><p className="text-gray-400 mt-2">{selectedPlan.duration} - ${selectedPlan.price} per account</p></div>
              <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-white text-2xl">×</button>
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Number of accounts (minimum 10)</label>
              <input type="number" min="10" value={quantity} onChange={(e) => setQuantity(Math.max(10, parseInt(e.target.value) || 10))} className="w-full px-4 py-2 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-emerald-500" />
            </div>
            <div className="bg-gray-900 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2"><span className="text-gray-400">Price per account:</span><span className="font-semibold">${selectedPlan.price}</span></div>
              <div className="flex justify-between items-center mb-2"><span className="text-gray-400">Quantity:</span><span className="font-semibold">{quantity}</span></div>
              <div className="border-t border-gray-700 my-2"></div>
              <div className="flex justify-between items-center"><span className="font-bold">Total:</span><span className="text-2xl font-bold text-emerald-400">${calculateTotal().toFixed(2)}</span></div>
            </div>
            <div className="flex gap-3">
              <button onClick={handleAddToCart} className="flex-1 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors">Add to Cart</button>
              <button onClick={handleBuyNow} className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-black font-semibold py-3 rounded-lg transition-colors">Buy Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
