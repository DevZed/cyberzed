"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-blue-600/20 rounded-full border border-blue-600/30 mb-6">
            <span className="text-blue-400 font-semibold text-sm">
              ❓ Frequently Asked Questions
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            How Can We Help?
          </h1>
          <p className="text-xl text-gray-400">
            Find answers to common questions about our products and services
          </p>
        </div>

        {/* General FAQs */}
        <FAQSection
          title="General Questions"
          icon="💡"
          faqs={[
            {
              question: "Why do you only sell accounts in bulk?",
              answer:
                "CyberZed specializes in bulk sales for teams, agencies, and resellers. This business model allows us to offer competitive wholesale pricing and maintain high-quality service. Our minimum order quantities ensure we can provide the best value to our professional customers.",
            },
            {
              question: "How does the ordering process work?",
              answer:
                "Simply select your product, choose the quantity you need (meeting the minimum requirement), complete payment through our secure checkout, and receive your account credentials instantly in your dashboard and via email. The entire process takes just a few minutes.",
            },
            {
              question: "What payment methods do you accept?",
              answer:
                "We accept PayPal and all major credit cards (Visa, Mastercard, American Express, Discover) through our secure payment gateway. All transactions are encrypted and PCI-compliant for your security.",
            },
            {
              question: "How quickly will I receive my accounts after payment?",
              answer:
                "All accounts are delivered instantly after payment confirmation. You'll receive login credentials in your CyberZed dashboard and via email within 2-5 minutes. If you don't receive them within 10 minutes, please check your spam folder or contact support.",
            },
            {
              question: "Can I get a refund if I'm not satisfied?",
              answer:
                "We offer a 7-day replacement policy for accounts that don't work as expected. Due to the digital nature of our products, we cannot offer refunds, but we will replace any non-functioning accounts. Please see our Refund Policy page for full details.",
            },
            {
              question: "Do you offer discounts for larger orders?",
              answer:
                "Yes! For orders of 100+ accounts, we offer custom pricing and dedicated account management. Contact us at support@cyberzed.me with your requirements, and we'll create a custom quote for you.",
            },
          ]}
        />

        {/* Canva Pro FAQs */}
        <FAQSection
          title="Canva Pro Questions"
          icon="🎨"
          faqs={[
            {
              question: "What's included with Canva Pro accounts?",
              answer:
                "Each Canva Pro account includes access to 610K+ premium templates, Brand Kit with custom fonts and colors, Magic Resize for all platforms, background remover tool, 100GB cloud storage, premium stock photos and videos, team collaboration features, and priority customer support.",
            },
            {
              question: "How long do Canva Pro accounts last?",
              answer:
                "All Canva Pro accounts come with 12 months (1 year) of full access from the date of activation. You'll receive a notification before expiration if you want to renew.",
            },
            {
              question: "What's the minimum order for Canva Pro?",
              answer:
                "The minimum order is 5 Canva Pro accounts. This bulk requirement allows us to offer wholesale pricing at $2.00 per account instead of the retail price of $12.99/month.",
            },
            {
              question: "Can I use Canva Pro accounts for commercial projects?",
              answer:
                "Yes, Canva Pro accounts include commercial use rights. You can create designs for clients, sell your designs, and use them in commercial projects without any additional licensing fees.",
            },
            {
              question: "What if a Canva Pro account stops working?",
              answer:
                "We offer a 7-day replacement guarantee. If an account stops working within the first 7 days, contact our support team with your order details, and we'll provide a replacement account immediately.",
            },
          ]}
        />

        {/* ChatGPT FAQs */}
        <FAQSection
          title="ChatGPT 5.2 Questions"
          icon="🤖"
          faqs={[
            {
              question: "What is ChatGPT 5.2?",
              answer:
                "ChatGPT 5.2 is the latest AI model from OpenAI, offering advanced natural language understanding, coding assistance, web browsing capabilities, data analysis, and much more. It's significantly more powerful than the free ChatGPT version.",
            },
            {
              question: "What features are included with ChatGPT 5.2 accounts?",
              answer:
                "ChatGPT 5.2 accounts include access to the GPT-5.2 model, code interpreter, web browsing capability, data analysis tools, file uploads (PDFs, images, documents), priority access during high-demand periods, longer conversation memory, and faster response times.",
            },
            {
              question: "Can I use ChatGPT for my business?",
              answer:
                "Yes! ChatGPT 5.2 accounts are perfect for businesses. Use them for content creation, customer support automation, coding assistance, research, data analysis, and more. Many agencies and teams use our accounts for client work.",
            },
            {
              question: "What's the minimum order quantity?",
              answer:
                "The minimum order is 5 ChatGPT 5.2 accounts at $2.00 per account for 12 months of access. This is significantly cheaper than the retail price of $20/month per account.",
            },
            {
              question: "Will ChatGPT accounts work in my country?",
              answer:
                "ChatGPT accounts work globally in most countries. However, please note that some countries have restrictions on AI services. Check OpenAI's availability in your region before ordering.",
            },
          ]}
        />

        {/* Spotify FAQs */}
        <FAQSection
          title="Spotify Premium Questions"
          icon="🎵"
          faqs={[
            {
              question: "What subscription durations are available for Spotify?",
              answer:
                "We offer multiple options: 1 Month ($1.50/account), 3 Months ($2.00/account), 6 Months ($3.50/account), and 1 Year ($6.00/account). All require a minimum order of 10 accounts.",
            },
            {
              question: "What's included with Spotify Premium?",
              answer:
                "All Spotify Premium accounts include ad-free listening, unlimited skips, offline downloads, high-quality audio (320kbps), and work on all devices including mobile, desktop, tablets, and smart TVs.",
            },
            {
              question: "Are these individual or family accounts?",
              answer:
                "These are individual Spotify Premium accounts. Each account is separate and can be used by one person at a time on multiple devices.",
            },
            {
              question: "What regions do Spotify accounts work in?",
              answer:
                "Our Spotify Premium accounts work in most regions worldwide. However, account availability may vary by country. Contact support if you need accounts for a specific region.",
            },
            {
              question: "Can I resell Spotify Premium accounts?",
              answer:
                "Yes! Many of our customers are resellers who purchase accounts in bulk and resell them to their customers. That's why we offer wholesale pricing with a minimum order of 10 accounts.",
            },
            {
              question: "What if a Spotify account stops working?",
              answer:
                "We provide a 7-day replacement guarantee. If an account becomes inactive within 7 days of purchase, we'll replace it free of charge. Simply contact support with your order number.",
            },
          ]}
        />

        {/* Account & Support FAQs */}
        <FAQSection
          title="Account & Support"
          icon="🔐"
          faqs={[
            {
              question: "Do I need to create an account to purchase?",
              answer:
                "Yes, creating a free CyberZed account allows you to track orders, view purchase history, access your account credentials anytime, and receive important updates. Sign up takes less than 1 minute.",
            },
            {
              question: "How do I access my purchased accounts?",
              answer:
                "After purchase, log into your CyberZed dashboard at cyberzed.me/account. All your purchased account credentials are stored securely there. You'll also receive them via email.",
            },
            {
              question: "What if I lose my account credentials?",
              answer:
                "No problem! Simply log into your CyberZed dashboard anytime to view all your purchased accounts. You can also contact support with your order number, and we'll resend the credentials to your email.",
            },
            {
              question: "How can I contact customer support?",
              answer:
                "Email us at support@cyberzed.me for any questions or issues. Our support team typically responds within 2-4 hours during business hours (9 AM - 9 PM CET). For urgent issues, please mark your email as 'URGENT'.",
            },
            {
              question: "Is my payment information secure?",
              answer:
                "Yes! We use industry-standard SSL encryption and never store your credit card information. All payments are processed through secure, PCI-compliant payment gateways (PayPal and Stripe).",
            },
          ]}
        />

        {/* Still Need Help CTA */}
        <div className="mt-16 text-center bg-gradient-to-br from-blue-600/10 to-cyan-600/10 border border-blue-500/30 rounded-2xl p-12">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-gray-400 mb-6">
            Our support team is here to help
          </p>
          <a
            href="mailto:support@cyberzed.me"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:opacity-90 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

// Component: FAQ Section
function FAQSection({
  title,
  icon,
  faqs,
}: {
  title: string;
  icon: string;
  faqs: { question: string; answer: string }[];
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <span className="text-3xl">{icon}</span>
        <h2 className="text-2xl font-bold">{title}</h2>
      </div>
      <div className="space-y-3">
        {faqs.map((faq, idx) => (
          <FAQItem key={idx} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </div>
  );
}

// Component: FAQ Item (Accordion)
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-xl overflow-hidden hover:border-gray-700 transition">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4"
      >
        <span className="font-semibold text-lg">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
