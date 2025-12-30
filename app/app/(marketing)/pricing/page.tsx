import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function PricingPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/30 mb-6">
            <span className="text-blue-400 font-semibold text-sm">
              💰 Transparent Bulk Pricing
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No hidden fees. No subscriptions. Pay once and get your accounts
            instantly. All prices are for bulk orders only.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Canva Pro */}
          <PricingCard
            icon="🎨"
            title="Canva Pro"
            price="$2.00"
            period="per account / year"
            minOrder="Minimum 5 accounts"
            description="Perfect for design teams and content creators"
            features={[
              "610K+ premium templates",
              "Brand Kit with custom fonts",
              "Magic Resize for all platforms",
              "Background remover tool",
              "100GB cloud storage",
              "Premium stock library",
              "Team collaboration",
              "Priority support",
            ]}
            href="/canva"
            gradient="from-purple-500 to-pink-500"
          />

          {/* ChatGPT 5.2 */}
          <PricingCard
            icon="🤖"
            title="ChatGPT 5.2"
            price="$2.00"
            period="per account / year"
            minOrder="Minimum 5 accounts"
            description="AI-powered productivity for your team"
            features={[
              "Latest GPT-5.2 model",
              "Advanced reasoning",
              "Code interpreter",
              "Web browsing capability",
              "Data analysis tools",
              "File uploads (PDFs, images)",
              "Priority access",
              "Longer conversations",
            ]}
            href="/chatgpt"
            gradient="from-emerald-500 to-cyan-500"
            popular
          />

          {/* Spotify Premium */}
          <PricingCard
            icon="🎵"
            title="Spotify Premium"
            price="$1.50+"
            period="per account"
            minOrder="Minimum 10 accounts"
            description="Multiple subscription options available"
            features={[
              "Ad-free listening",
              "Unlimited skips",
              "Offline downloads",
              "High-quality audio (320kbps)",
              "Works on all devices",
              "1 Month: $1.50/account",
              "3 Months: $2.00/account",
              "1 Year: $6.00/account",
            ]}
            href="/spotify"
            gradient="from-green-500 to-emerald-500"
          />
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Detailed Comparison
          </h2>
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-800">
                    <th className="text-left p-6 font-semibold text-gray-300">
                      Feature
                    </th>
                    <th className="text-center p-6 font-semibold">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-2">🎨</span>
                        <span>Canva Pro</span>
                      </div>
                    </th>
                    <th className="text-center p-6 font-semibold bg-emerald-500/5">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-2">🤖</span>
                        <span>ChatGPT 5.2</span>
                        <span className="text-xs text-emerald-400 mt-1">
                          Popular
                        </span>
                      </div>
                    </th>
                    <th className="text-center p-6 font-semibold">
                      <div className="flex flex-col items-center">
                        <span className="text-2xl mb-2">🎵</span>
                        <span>Spotify Premium</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <ComparisonRow
                    feature="Price per account"
                    canva="$2.00 / year"
                    chatgpt="$2.00 / year"
                    spotify="$1.50 - $6.00"
                    highlight="chatgpt"
                  />
                  <ComparisonRow
                    feature="Minimum order"
                    canva="5 accounts"
                    chatgpt="5 accounts"
                    spotify="10 accounts"
                    highlight="chatgpt"
                  />
                  <ComparisonRow
                    feature="Account duration"
                    canva="12 months"
                    chatgpt="12 months"
                    spotify="1-12 months"
                    highlight="chatgpt"
                  />
                  <ComparisonRow
                    feature="Instant delivery"
                    canva={<Check className="w-5 h-5 text-emerald-400" />}
                    chatgpt={<Check className="w-5 h-5 text-emerald-400" />}
                    spotify={<Check className="w-5 h-5 text-emerald-400" />}
                    highlight="chatgpt"
                  />
                  <ComparisonRow
                    feature="Email support"
                    canva={<Check className="w-5 h-5 text-emerald-400" />}
                    chatgpt={<Check className="w-5 h-5 text-emerald-400" />}
                    spotify={<Check className="w-5 h-5 text-emerald-400" />}
                    highlight="chatgpt"
                  />
                  <ComparisonRow
                    feature="Replacement policy"
                    canva="7 days"
                    chatgpt="7 days"
                    spotify="7 days"
                    highlight="chatgpt"
                  />
                  <ComparisonRow
                    feature="Best for"
                    canva="Designers"
                    chatgpt="Everyone"
                    spotify="Resellers"
                    highlight="chatgpt"
                  />
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Volume Discounts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Need Larger Quantities?
          </h2>
          <div className="bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-8 text-center">
            <p className="text-xl text-gray-300 mb-6">
              For orders of <strong className="text-white">100+ accounts</strong>,
              we offer custom pricing and dedicated account management.
            </p>
            <a
              href="mailto:support@cyberzed.me?subject=Bulk Order Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Contact Us for Custom Pricing
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">
            Pricing FAQs
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <FAQItem
              question="Why do you only sell in bulk?"
              answer="CyberZed specializes in bulk sales for teams, agencies, and resellers. This allows us to offer better pricing and maintain high-quality service."
            />
            <FAQItem
              question="Can I mix different products in one order?"
              answer="Each product requires a separate order to meet its minimum quantity requirement. However, you can place multiple orders at the same time."
            />
            <FAQItem
              question="What payment methods do you accept?"
              answer="We accept PayPal and major credit cards through our secure payment gateway. All transactions are encrypted and protected."
            />
            <FAQItem
              question="Do you offer refunds?"
              answer="We offer a 7-day replacement policy for non-working accounts. Please review our Refund Policy for full details."
            />
            <FAQItem
              question="How quickly will I receive my accounts?"
              answer="All accounts are delivered instantly after payment confirmation. You'll receive credentials in your dashboard and via email within minutes."
            />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-8">
            Choose your product and start saving today
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/canva"
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Buy Canva Pro
            </Link>
            <Link
              href="/chatgpt"
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Buy ChatGPT 5.2
            </Link>
            <Link
              href="/spotify"
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Buy Spotify Premium
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component: Pricing Card
function PricingCard({
  icon,
  title,
  price,
  period,
  minOrder,
  description,
  features,
  href,
  gradient,
  popular,
}: {
  icon: string;
  title: string;
  price: string;
  period: string;
  minOrder: string;
  description: string;
  features: string[];
  href: string;
  gradient: string;
  popular?: boolean;
}) {
  return (
    <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition">
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-center mb-6">
        <div className="text-5xl mb-4">{icon}</div>
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-4">{description}</p>

        <div className="mb-2">
          <span className={`text-5xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {price}
          </span>
        </div>
        <p className="text-sm text-gray-500 mb-1">{period}</p>
        <p className="text-xs text-gray-600">{minOrder}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
            <Check className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`block w-full py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-lg hover:opacity-90 transition text-center`}
      >
        Get Started
      </Link>
    </div>
  );
}

// Component: Comparison Row
function ComparisonRow({
  feature,
  canva,
  chatgpt,
  spotify,
  highlight,
}: {
  feature: string;
  canva: React.ReactNode;
  chatgpt: React.ReactNode;
  spotify: React.ReactNode;
  highlight?: string;
}) {
  return (
    <tr className="border-b border-gray-800 last:border-0">
      <td className="p-6 text-gray-300">{feature}</td>
      <td className={`p-6 text-center ${highlight === "canva" ? "bg-purple-500/5" : ""}`}>
        {canva}
      </td>
      <td className={`p-6 text-center ${highlight === "chatgpt" ? "bg-emerald-500/5" : ""}`}>
        {chatgpt}
      </td>
      <td className={`p-6 text-center ${highlight === "spotify" ? "bg-green-500/5" : ""}`}>
        {spotify}
      </td>
    </tr>
  );
}

// Component: FAQ Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-xl p-6">
      <h3 className="font-semibold text-lg mb-2">{question}</h3>
      <p className="text-gray-400 text-sm">{answer}</p>
        </div>
  );
}
