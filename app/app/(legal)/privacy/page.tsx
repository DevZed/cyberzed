export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white">
      <header className="border-b border-purple-900/20 bg-[#0f1020]">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            CyberZed
          </h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Privacy Policy
        </h1>
        <p className="text-gray-400 mb-8">Last Updated: December 29, 2025</p>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">1. Information We Collect</h2>
            <p className="leading-relaxed mb-3">When you use CyberZed, we collect the following information:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Contact Information:</strong> Email address and Telegram username</li>
              <li><strong>Payment Information:</strong> Processed securely through third-party payment processors</li>
              <li><strong>Order Information:</strong> Products purchased, quantities, and order history</li>
              <li><strong>Technical Data:</strong> IP address, browser type, and device information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">2. How We Use Your Information</h2>
            <p className="leading-relaxed mb-3">We use your information to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Process and deliver your orders</li>
              <li>Communicate with you about your purchases</li>
              <li>Provide customer support</li>
              <li>Send account credentials via email or Telegram</li>
              <li>Prevent fraud and ensure security</li>
              <li>Improve our services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">3. Data Storage and Security</h2>
            <p className="leading-relaxed">
              Your data is stored securely using Supabase with industry-standard encryption. 
              We implement appropriate security measures to protect your information from unauthorized access.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">4. Third-Party Services</h2>
            <p className="leading-relaxed mb-3">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Stripe:</strong> Payment processing for credit/debit cards</li>
              <li><strong>PayPal:</strong> Payment processing</li>
              <li><strong>Shoppy.gg:</strong> Cryptocurrency payment processing</li>
              <li><strong>Supabase:</strong> Database and authentication</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">5. Your Rights</h2>
            <p className="leading-relaxed mb-3">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to processing of your data</li>
              <li>Export your data</li>
            </ul>
            <p className="leading-relaxed mt-3">
              To exercise these rights, contact us via Telegram: @CyberZedSupport
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">6. Contact Us</h2>
            <p className="leading-relaxed">
              For privacy-related questions, contact us via Telegram: @CyberZedSupport
            </p>
          </section>
        </div>

        <div className="mt-12">
          <a href="/" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
            ← Back to Home
          </a>
        </div>
      </main>

      <footer className="border-t border-purple-900/20 bg-[#0f1020] mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2025 CyberZed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
