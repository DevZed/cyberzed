"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Mail } from "lucide-react";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    // TODO: Add Supabase password reset here later
    console.log("Password reset request for:", email);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1000);
  };

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-md text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="h-16 w-16 rounded-full bg-emerald-500/10 border border-emerald-500/50 flex items-center justify-center">
              <Mail className="w-8 h-8 text-emerald-400" />
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-3">Check your email</h1>
          <p className="text-gray-400 mb-2">
            We've sent a password reset link to:
          </p>
          <p className="text-white font-medium mb-6">{email}</p>
          <p className="text-sm text-gray-500 mb-8">
            Click the link in the email to reset your password. If you don't see
            it, check your spam folder.
          </p>

          <div className="space-y-3">
            <Link
              href="/login"
              className="block w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:opacity-90 transition"
            >
              Back to login
            </Link>
            <button
              onClick={() => setSuccess(false)}
              className="block w-full py-3 bg-white/5 border border-gray-700 text-white font-medium rounded-lg hover:bg-white/10 transition"
            >
              Resend email
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back button */}
        <Link
          href="/login"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="text-sm">Back to login</span>
        </Link>

        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-6">
            <div className="flex items-center justify-center gap-2">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <span className="text-sm font-bold text-white">CZ</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                CyberZed
              </span>
            </div>
          </Link>
          <h1 className="text-3xl font-bold mb-2">Forgot your password?</h1>
          <p className="text-gray-400 text-sm">
            No worries, we'll send you reset instructions
          </p>
        </div>

        {/* Reset Form */}
        <div className="bg-gradient-to-br from-zinc-900 to-zinc-950 border border-gray-800 rounded-2xl p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-500/10 border border-red-500/50 text-red-400 px-4 py-3 rounded-lg text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition"
                placeholder="you@example.com"
              />
              <p className="text-xs text-gray-500 mt-2">
                Enter the email associated with your account
              </p>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold rounded-lg hover:opacity-90 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Sending..." : "Send reset link"}
            </button>
          </form>
        </div>

        {/* Help text */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Need help?{" "}
          <a
            href="mailto:support@cyberzed.me"
            className="text-blue-400 hover:text-blue-300 transition"
          >
            Contact support
          </a>
        </p>
      </div>
    </div>
  );
}
