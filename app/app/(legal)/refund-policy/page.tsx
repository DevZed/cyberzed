export default function RefundPolicy() {
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
          Refund Policy
        </h1>
        <p className="text-gray-400 mb-8">Last Updated: December 29, 2025</p>

        <div className="space-y-6 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">1. Overview</h2>
            <p className="leading-relaxed">
              At CyberZed, we are committed to providing high-quality digital account services. 
              This Refund Policy outlines the terms and conditions for refunds and replacements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">2. 7-Day Warranty</h2>
            <p className="leading-relaxed mb-3">
              All accounts come with a 7-day warranty from the date of delivery. During this period:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>If an account stops working, we will provide a free replacement</li>
              <li>Replacements are provided within 24 hours of notification</li>
              <li>You must report issues within the 7-day warranty period</li>
              <li>Proof of the issue may be required (screenshot or error message)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">3. Refund Eligibility</h2>
            <p className="leading-relaxed mb-3">
              Refunds are available under the following circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Non-Delivery:</strong> If accounts are not delivered within 24 hours</li>
              <li><strong>Wrong Product:</strong> If you received the wrong product</li>
              <li><strong>Duplicate Payment:</strong> If you were charged twice for the same order</li>
              <li><strong>Service Unavailable:</strong> If the service is no longer available</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">4. Non-Refundable Situations</h2>
            <p className="leading-relaxed mb-3">
              Refunds will NOT be provided in the following cases:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Account was working at delivery but you didn't use it immediately</li>
              <li>You changed your mind after receiving the accounts</li>
              <li>Account was shared publicly or with unauthorized users</li>
              <li>Account password was changed by you</li>
              <li>Issues reported after the 7-day warranty period</li>
              <li>Account banned due to misuse or violation of service provider's terms</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">5. Replacement Process</h2>
            <p className="leading-relaxed mb-3">
              To request a replacement:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Contact us via Telegram: @CyberZedSupport</li>
              <li>Provide your order ID and account details</li>
              <li>Describe the issue with evidence (screenshot if possible)</li>
              <li>We will verify the issue and provide a replacement within 24 hours</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">6. Refund Process</h2>
            <p className="leading-relaxed mb-3">
              For eligible refunds:
            </p>
            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Contact us via Telegram: @CyberZedSupport</li>
              <li>Provide your order ID and reason for refund</li>
              <li>We will review your request within 24 hours</li>
              <li>Approved refunds are processed within 5-10 business days</li>
              <li>Refunds are issued to the original payment method</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">7. Partial Refunds</h2>
            <p className="leading-relaxed">
              For bulk orders, if only some accounts are not working, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
              <li>Replace the non-working accounts, OR</li>
              <li>Provide a partial refund for the affected accounts only</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">8. Dispute Resolution</h2>
            <p className="leading-relaxed">
              If you disagree with our decision on a refund request, you may escalate the issue 
              through your payment provider's dispute resolution process (Stripe, PayPal, etc.).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">9. Processing Time</h2>
            <p className="leading-relaxed mb-3">
              Refund processing times vary by payment method:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li><strong>Credit/Debit Card:</strong> 5-10 business days</li>
              <li><strong>PayPal:</strong> 3-5 business days</li>
              <li><strong>Cryptocurrency:</strong> Not refundable (replacement only)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">10. Changes to Refund Policy</h2>
            <p className="leading-relaxed">
              We reserve the right to modify this Refund Policy at any time. 
              Changes will be effective immediately upon posting on our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-purple-400 mb-3">11. Contact Us</h2>
            <p className="leading-relaxed">
              For refund or replacement requests, contact us via Telegram: @CyberZedSupport
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
