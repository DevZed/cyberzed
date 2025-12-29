import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export default function CanvaPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation - Simple for now */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            CyberZed
          </Link>
          <div className="flex gap-6 text-sm">
            <Link href="/" className="text-gray-300 hover:text-white transition">Home</Link>
            <Link href="/pricing" className="text-gray-300 hover:text-white transition">Pricing</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/30 mb-6">
            <span className="text-blue-400 font-semibold">🎨 Design Platform</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Canva Pro Accounts
          </h1>
          <p className="text-xl text-gray-400 mb-4 max-w-3xl mx-auto">
            Unlock premium design tools for your team. Create stunning graphics, presentations, and social media content with unlimited access to premium templates and features.
          </p>
          <p className="text-lg text-cyan-400 font-semibold mb-8">
            ⚡ Bulk pricing available • Minimum 5 accounts per order
          </p>
        </div>
      </section>

      {/* Pricing Card */}
      <section className="py-12 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-blue-600/30 rounded-2xl p-8 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">💎 Canva Pro - 1 Year Access</h3>
              <div className="flex items-baseline justify-center gap-2 mb-2">
                <span className="text-5xl font-bold text-blue-500">$2.00</span>
                <span className="text-xl text-gray-400">per account</span>
              </div>
              <p className="text-sm text-gray-500">Billed once • Valid for 1 year</p>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8">
              <label className="block text-sm font-medium text-gray-300 mb-3">
                Select Quantity (Minimum 5 accounts)
              </label>
              <select 
                className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg text-white focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                defaultValue="5"
              >
                <option value="5">5 accounts - $10.00</option>
                <option value="10">10 accounts - $20.00</option>
                <option value="15">15 accounts - $30.00</option>
                <option value="20">20 accounts - $40.00</option>
                <option value="25">25 accounts - $50.00</option>
                <option value="30">30 accounts - $60.00</option>
                <option value="40">40 accounts - $80.00</option>
                <option value="50">50 accounts - $100.00</option>
              </select>
              <p className="text-xs text-gray-500 mt-2">
                💡 Need more? Contact us for custom bulk orders (100+ accounts)
              </p>
            </div>

            <button className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
              Add to Cart
              <ArrowRight className="w-5 h-5" />
            </button>

            <p className="text-center text-xs text-gray-500 mt-4">
              🔒 Secure payment • ✉️ Instant email delivery • 🔄 24/7 support
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What's Included in Canva Pro</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureItem text="Unlimited premium templates" />
            <FeatureItem text="Brand Kit with custom fonts & colors" />
            <FeatureItem text="Magic Resize for all platforms" />
            <FeatureItem text="Background remover tool" />
            <FeatureItem text="100GB cloud storage" />
            <FeatureItem text="Premium stock photos & videos" />
            <FeatureItem text="Team collaboration tools" />
            <FeatureItem text="Content planner & scheduler" />
            <FeatureItem text="Priority customer support" />
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
              title="Choose Quantity"
              description="Select how many Canva Pro accounts you need (minimum 5 accounts)"
            />
            <Step 
              number="2"
              title="Secure Payment"
              description="Pay safely via PayPal or Shoppy.gg with instant confirmation"
            />
            <Step 
              number="3"
              title="Instant Delivery"
              description="Get login credentials immediately in your dashboard and email"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <FAQItem 
              question="Why minimum 5 accounts?"
              answer="CyberZed specializes in bulk sales for teams, resellers, and agencies. This allows us to offer competitive pricing and maintain quality service."
            />
            <FAQItem 
              question="How long do accounts last?"
              answer="Each Canva Pro account comes with 1 full year of access from the date of activation."
            />
            <FAQItem 
              question="Are these official Canva Pro accounts?"
              answer="Yes, all accounts provide full access to Canva Pro features including premium templates, Brand Kit, and all design tools."
            />
            <FAQItem 
              question="What if an account stops working?"
              answer="We offer account replacement within 7 days of purchase if you experience any issues. Contact support@CyberZed.me for assistance."
            />
            <FAQItem 
              question="Can I upgrade later?"
              answer="Yes! You can purchase additional accounts anytime. Contact us for renewal options before expiration."
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-black/50 rounded-lg border border-gray-800 hover:border-blue-600/50 transition">
      <Check className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
      <span className="text-gray-300">{text}</span>
    </div>
  )
}

function Step({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-black/50 border border-gray-800 rounded-lg p-6 hover:border-blue-600/30 transition">
      <h3 className="text-lg font-semibold mb-2 text-white">{question}</h3>
      <p className="text-gray-400">{answer}</p>
    </div>
  )
}