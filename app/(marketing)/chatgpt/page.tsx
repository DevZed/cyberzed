import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function ChatGPTPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"
          >
            CyberZed
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition">
              Home
            </Link>
            <Link
              href="/pricing"
              className="text-gray-300 hover:text-white transition"
            >
              Pricing
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-emerald-600/20 rounded-full border border-emerald-600/30 mb-6">
            <span className="text-emerald-400 font-semibold">🤖 AI Platform</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            ChatGPT 5.2 Accounts
          </h1>
          <p className="text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
            Get ready‑to‑use ChatGPT 5.2 accounts for content, coding, research,
            automation and more. Designed for agencies, teams and resellers
            who need reliable AI access at scale.
          </p>
          <p className="text-lg text-emerald-400 font-semibold mb-8">
            ⚡ Bulk pricing only • Minimum 5 accounts per order
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-emerald-600/30 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">💎 ChatGPT 5.2 – 1 Year Access</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-emerald-400">$2.00</span>
                <span className="text-xl text-gray-400">per account</span>
              </div>
              <p className="text-sm text-gray-500">
                One‑time payment • Valid for 12 months
              </p>
            </div>

            {/* Quantity Selector (simple like Canva) */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select Quantity (minimum 5 accounts)
              </label>
              <select
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50"
                defaultValue="5"
              >
                <option value="5">5 accounts - $10.00</option>
                <option value="10">10 accounts - $20.00</option>
                <option value="20">20 accounts - $40.00</option>
                <option value="30">30 accounts - $60.00</option>
                <option value="50">50 accounts - $100.00</option>
              </select>
              <p className="text-xs text-gray-500 mt-2">
                💡 Need more? Contact us for custom bulk orders (100+ accounts).
              </p>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-black font-semibold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
              Add to Cart
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              🔒 Secure payment • ✉️ Instant delivery • 🔄 24/7 support
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            What You Can Do With ChatGPT 5.2
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureItem text="Generate high‑quality content in any language" />
            <FeatureItem text="Get coding help, debugging and refactoring" />
            <FeatureItem text="Research ideas, markets and competitors" />
            <FeatureItem text="Summarize long articles, PDFs and reports" />
            <FeatureItem text="Create ad copy, scripts and email sequences" />
            <FeatureItem text="Integrate AI into your daily team workflow" />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Step
              number="1"
              title="Choose quantity"
              description="Select how many ChatGPT 5.2 accounts you need (minimum 5)."
            />
            <Step
              number="2"
              title="Secure payment"
              description="Pay safely via PayPal or your preferred payment method."
            />
            <Step
              number="3"
              title="Instant delivery"
              description="Receive account credentials in your dashboard and email."
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <FAQItem
              question="Why bulk only?"
              answer="CyberZed focuses on teams, agencies and resellers. Bulk orders let us offer better pricing and faster support."
            />
            <FAQItem
              question="Are these full ChatGPT 5.2 accounts?"
              answer="Yes, you get full access to ChatGPT 5.2 features suitable for professional and business use."
            />
            <FAQItem
              question="What if an account stops working?"
              answer="We provide replacement for accounts that fail within the first 7 days according to our policy."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-black/50 rounded-lg border border-gray-800 hover:border-emerald-500/50 transition">
      <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
      <span className="text-gray-300">{text}</span>
    </div>
  );
}

function Step({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  return (
    <div className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-emerald-500/30 transition">
      <h3 className="text-lg font-semibold mb-2 text-white">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  );
}
