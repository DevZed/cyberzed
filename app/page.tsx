
import Link from 'next/link'
import { Zap, Shield, DollarSign } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 blur-3xl" />
        
        <div className="relative max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            CyberZed
          </h1>
          <p className="text-2xl md:text-4xl font-semibold mb-4">
            Premium Digital Accounts in Bulk
          </p>
          <p className="text-xl text-gray-400 mb-8">
            Canva Pro • ChatGPT 5.2 • Spotify Premium
          </p>
          <p className="text-lg text-gray-500 mb-12">
            Perfect for teams, resellers, and agencies. Minimum 5 accounts per order.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/canva"
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg font-semibold hover:opacity-90 transition"
            >
              View Canva Pro
            </Link>
            <Link 
              href="/chatgpt"
              className="px-8 py-4 bg-zinc-900 border border-blue-600 text-white rounded-lg font-semibold hover:bg-zinc-800 transition"
            >
              View ChatGPT 5.2
            </Link>
            <Link 
              href="/spotify"
              className="px-8 py-4 bg-zinc-900 border border-blue-600 text-white rounded-lg font-semibold hover:bg-zinc-800 transition"
            >
              View Spotify Premium
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-zinc-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Zap className="w-8 h-8" />}
              title="Instant Delivery"
              description="Get your accounts immediately after payment in your dashboard and email"
            />
            <FeatureCard 
              icon={<Shield className="w-8 h-8" />}
              title="Quality Guaranteed"
              description="All accounts are tested and verified before delivery"
            />
            <FeatureCard 
              icon={<DollarSign className="w-8 h-8" />}
              title="Bulk Pricing"
              description="Save more with our competitive bulk pricing. Minimum 5 accounts"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 bg-zinc-900 rounded-lg border border-blue-600/20 hover:border-blue-600/50 transition">
      <div className="text-blue-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}