import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800 bg-black/50 mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-sm font-bold text-white">CZ</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                CyberZed
              </span>
            </div>
            <p className="text-sm text-gray-400">
              Bulk digital accounts for Canva Pro, ChatGPT 5.2, and Spotify Premium.
              Designed for resellers, teams, and agencies.
            </p>
          </div>

          {/* Products Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Products</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/canva" className="hover:text-white transition-colors">
                  Canva Pro
                </Link>
              </li>
              <li>
                <Link href="/chatgpt" className="hover:text-white transition-colors">
                  ChatGPT 5.2
                </Link>
              </li>
              <li>
                <Link href="/spotify" className="hover:text-white transition-colors">
                  Spotify Premium
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/refund-policy" className="hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a
                  href="mailto:support@CyberZed.me"
                  className="hover:text-white transition-colors"
                >
                  support@CyberZed.me
                </a>
              </li>
              <li>
                <Link href="/account" className="hover:text-white transition-colors">
                  My Account
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {currentYear} CyberZed. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Built for resellers, teams & agencies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
