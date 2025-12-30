export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0a0b14] text-white">
      {/* Header */}
      <header className="border-b border-purple-900/20 bg-[#0f1020]">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            CyberZed
          </h1>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Terms of Service
        </h1>
        <p className="text-gray-400 mb-8">Last Updated: December 29, 2025</p>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing and using CyberZed's services, you agree to be bound by these Terms of Service. 
              If you do not agree with any part of these terms, you may not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">2. Service Description</h2>
            <p className="leading-relaxed mb-3">
              CyberZed provides bulk digital account subscriptions for various platforms including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Spotify Premium subscriptions</li>
              <li>ChatGPT premium accounts</li>
              <li>Canva Pro subscriptions</li>
              <li>Other digital service accounts</li>
            </ul>
            <p className="leading-relaxed mt-3">
              All accounts are delivered digitally via email and/or Telegram within 24 hours of confirmed payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">3. Account Requirements</h2>
            <p className="leading-relaxed mb-3">
              To purchase from CyberZed, you must:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Be at least 18 years old or have parental consent</li>
              <li>Provide accurate contact information (email and Telegram)</li>
              <li>Have a valid payment method</li>
              <li>Agree to receive account credentials via provided contact methods</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">4. Minimum Order Requirements</h2>
            <p className="leading-relaxed">
              Most products have a minimum order quantity (typically 5-10 accounts) as specified on the product page. 
              Bulk pricing applies to larger quantities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">5. Payment Terms</h2>
            <p className="leading-relaxed mb-3">
              We accept the following payment methods:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Credit/Debit Cards (via Stripe)</li>
              <li>PayPal</li>
              <li>Cryptocurrency (via Shoppy.gg)</li>
            </ul>
            <p className="leading-relaxed mt-3">
              All payments are processed securely through third-party payment processors. 
              Orders are confirmed once payment is successfully processed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">6. Delivery</h2>
            <p className="leading-relaxed">
              Account credentials will be delivered within 24 hours to the email and/or Telegram username 
              provided during checkout. Please ensure your contact information is accurate.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">7. Account Warranty</h2>
            <p className="leading-relaxed">
              We guarantee that all accounts are working at the time of delivery. If an account 
              stops working within 7 days of delivery, we will provide a replacement at no additional cost.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">8. Prohibited Activities</h2>
            <p className="leading-relaxed mb-3">You may not:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Resell accounts without authorization</li>
              <li>Share account credentials publicly</li>
              <li>Use accounts for illegal activities</li>
              <li>Attempt to breach our systems or security</li>
              <li>Abuse the refund or replacement policy</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">9. Limitation of Liability</h2>
            <p className="leading-relaxed">
              CyberZed is not liable for any indirect, incidental, or consequential damages arising 
              from the use of our services. Our liability is limited to the amount paid for the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">10. Termination</h2>
            <p className="leading-relaxed">
              We reserve the right to terminate or suspend access to our services at any time, 
              without prior notice, for conduct that violates these Terms or is harmful to other users.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">11. Changes to Terms</h2>
            <p className="leading-relaxed">
              We reserve the right to modify these Terms at any time. Continued use of our services 
              after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">12. Contact Information</h2>
            <p className="leading-relaxed">
              For questions about these Terms, please contact us via Telegram: @CyberZedSupport
            </p>
          </section>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            ← Back to Home
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-purple-900/20 bg-[#0f1020] mt-20">
        <div className="container mx-auto px-4 py-8 text-center text-gray-400">
          <p>© 2025 CyberZed. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
