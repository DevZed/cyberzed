import Link from "next/link";
import { Check, ArrowRight, Zap, Shield, Clock, Users } from "lucide-react";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/30 mb-6">
            <span className="text-blue-400 font-semibold text-sm">
              🚀 Bulk Digital Accounts at Wholesale Prices
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Premium Digital Accounts
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
              For Teams & Resellers
            </span>
          </h1>

          <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
            Get bulk access to Canva Pro, ChatGPT 5.2, and Spotify Premium.
            Designed for agencies, teams, and digital resellers who need reliable
            accounts at competitive wholesale prices.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/pricing"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:opacity-90 transition flex items-center gap-2 text-lg"
            >
              View Pricing
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/faq"
              className="px-8 py-4 bg-white/5 border border-gray-700 text-white font-semibold rounded-lg hover:bg-white/10 transition text-lg"
            >
              Learn More
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-emerald-400" />
              <span>Instant Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>Secure Payment</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-cyan-400" />
              <span>500+ Happy Customers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Products</h2>
            <p className="text-gray-400 text-lg">
              Premium accounts for all your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Canva Pro Card */}
            <ProductCard
              icon="🎨"
              title="Canva Pro"
              description="610K+ templates, Brand Kit, Magic Resize, and premium design tools"
              price="$2.00"
              duration="per account / year"
              minOrder="Min. 5 accounts"
              href="/canva"
              gradient="from-purple-500 to-pink-500"
              features={[
                "Premium templates",
                "Brand Kit",
                "Background remover",
                "100GB storage",
              ]}
            />

            {/* ChatGPT Card */}
            <ProductCard
              icon="🤖"
              title="ChatGPT 5.2"
              description="Advanced AI for content creation, coding, research, and automation"
              price="$2.00"
              duration="per account / year"
              minOrder="Min. 5 accounts"
              href="/chatgpt"
              gradient="from-emerald-500 to-cyan-500"
              features={[
                "GPT-5.2 model",
                "Code interpreter",
                "Web browsing",
                "Priority access",
              ]}
              popular
            />

            {/* Spotify Card */}
            <ProductCard
              icon="🎵"
              title="Spotify Premium"
              description="Ad-free music, offline downloads, and unlimited skips for your needs"
              price="$1.50"
              duration="per account / month"
              minOrder="Min. 10 accounts"
              href="/spotify"
              gradient="from-green-500 to-emerald-500"
              features={[
                "Ad-free listening",
                "Offline downloads",
                "High-quality audio",
                "Multiple plans",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Choose CyberZed?</h2>
            <p className="text-gray-400 text-lg">
              Built for professionals who need reliable bulk accounts
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              icon={<Zap className="w-8 h-8 text-emerald-400" />}
              title="Instant Delivery"
              description="Get your accounts immediately after payment. No waiting, no delays."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8 text-blue-400" />}
              title="Secure & Private"
              description="All transactions are encrypted and your data is never shared."
            />
            <FeatureCard
              icon={<Users className="w-8 h-8 text-purple-400" />}
              title="Bulk Discounts"
              description="Save more with larger orders. Perfect for teams and resellers."
            />
            <FeatureCard
              icon={<Clock className="w-8 h-8 text-cyan-400" />}
              title="24/7 Support"
              description="Our team is always here to help with any questions or issues."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-zinc-900/50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400 text-lg">
              Get started in 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <StepCard
              number="1"
              title="Choose Your Product"
              description="Select from Canva Pro, ChatGPT 5.2, or Spotify Premium. Pick the quantity you need."
            />
            <StepCard
              number="2"
              title="Complete Payment"
              description="Pay securely with PayPal or your preferred payment method. All transactions are protected."
            />
            <StepCard
              number="3"
              title="Get Your Accounts"
              description="Receive login credentials instantly in your dashboard and via email. Start using right away."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-3xl p-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust CyberZed for their
              digital account needs. Bulk pricing, instant delivery, 24/7 support.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:opacity-90 transition flex items-center gap-2 text-lg"
              >
                Create Free Account
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 bg-white/5 border border-gray-700 text-white font-semibold rounded-lg hover:bg-white/10 transition text-lg"
              >
                View All Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 px-4 border-t border-gray-800">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Professionals</h2>
            <p className="text-gray-400">
              See what our customers are saying
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <TestimonialCard
              quote="CyberZed made it easy to get bulk ChatGPT accounts for our agency. Instant delivery and great prices!"
              author="Sarah M."
              role="Marketing Agency Owner"
            />
            <TestimonialCard
              quote="Perfect for reselling. The Spotify accounts are reliable and the support team is always helpful."
              author="James K."
              role="Digital Reseller"
            />
            <TestimonialCard
              quote="We use CyberZed for all our Canva Pro needs. The bulk pricing saves us thousands every year."
              author="Lisa R."
              role="Design Team Lead"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Component: Product Card
function ProductCard({
  icon,
  title,
  description,
  price,
  duration,
  minOrder,
  href,
  gradient,
  features,
  popular,
}: {
  icon: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  minOrder: string;
  href: string;
  gradient: string;
  features: string[];
  popular?: boolean;
}) {
  return (
    <div className="relative bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition group">
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            Most Popular
          </span>
        </div>
      )}

      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>

      <div className="mb-4">
        <div className="flex items-baseline gap-1 mb-1">
          <span className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {price}
          </span>
          <span className="text-gray-500 text-sm">{duration}</span>
        </div>
        <p className="text-xs text-gray-500">{minOrder}</p>
      </div>

      <ul className="space-y-2 mb-6">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
            <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={href}
        className={`block w-full py-3 bg-gradient-to-r ${gradient} text-white font-semibold rounded-lg hover:opacity-90 transition text-center`}
      >
        View Details
      </Link>
    </div>
  );
}

// Component: Feature Card
function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition">
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

// Component: Step Card
function StepCard({
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
      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {number}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

// Component: Testimonial Card
function TestimonialCard({
  quote,
  author,
  role,
}: {
  quote: string;
  author: string;
  role: string;
}) {
    return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-xl p-6">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-300 mb-4 italic">"{quote}"</p>
      <div>
        <p className="font-semibold text-white">{author}</p>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
  );
}