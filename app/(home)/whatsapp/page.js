"use client";

import { useState } from "react";

export default function Page() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-gray-100">
      <header className="max-w-5xl mx-auto p-6">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-md bg-white/10 flex items-center justify-center">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12h18" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6h10" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18h6" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold">Free Educational Webinar on FOREX</h1>
            <p className="text-sm text-gray-300 mt-1">This session is for learning purposes only — not investment advice.</p>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8">
        <section className="bg-white/5 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold">What you'll learn</h2>
              <ul className="mt-4 space-y-2 text-gray-200">
                <li>• Basic concepts of Forex markets and currencies</li>
                <li>• How to read charts and common indicators</li>
                <li>• Risk management and responsible trading practices</li>
                <li>• Live Q&amp;A with experienced mentors</li>
              </ul>

              <div className="mt-6 text-sm text-gray-300">
                <strong>Who should attend:</strong> Beginners, students, and curious learners who want an educational introduction to Forex.
              </div>

              <div className="mt-6 text-xs text-gray-400 bg-gray-900/40 p-3 rounded">
                <strong>Important:</strong> This webinar is educational and does not guarantee any profits. Please do your own research before making any financial decisions.
              </div>
            </div>

            <div>
              {!submitted ? (
                <form onSubmit={handleSubmit} className="bg-gradient-to-b from-black/40 to-black/20 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-2">Register for the free session</h3>

                  <label className="block text-sm mt-3">
                    <span className="text-gray-300">Full name</span>
                    <input name="name" className="mt-1 block w-full rounded-md border-0 p-3 bg-white/5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="Your full name" />
                  </label>

                  <label className="block text-sm mt-3">
                    <span className="text-gray-300">Email</span>
                    <input name="email" type="email" className="mt-1 block w-full rounded-md border-0 p-3 bg-white/5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="you@example.com" />
                  </label>

                  <label className="block text-sm mt-3">
                    <span className="text-gray-300">Mobile (WhatsApp number)</span>
                    <input name="phone" className="mt-1 block w-full rounded-md border-0 p-3 bg-white/5 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400" placeholder="e.g. +91 9xxxxxxxxx" />
                  </label>

                  <div className="mt-4">
                    <button type="submit" className="w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 bg-green-500 text-black font-semibold hover:brightness-95">
                      Register Now (Free)
                    </button>
                  </div>

                  <div className="mt-4 text-xs text-gray-400">
                    By registering you agree to receive webinar updates. We respect your privacy — we will not share your personal details or spam.
                  </div>
                </form>
              ) : (
                <div className="p-6 bg-black/30 rounded-lg text-center">
                  <h3 className="text-2xl font-bold">Thank you — you're registered!</h3>
                  <p className="mt-3 text-gray-300">We've saved your registration. You can now join our WhatsApp announcement group for updates.</p>

                  <div className="mt-6 flex flex-col gap-3 items-center justify-center">
                    <a
                      href="https://chat.whatsapp.com/LO6civAx80C3TIBf72sOer" // <-- apna WhatsApp group link daalna
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-6 py-3 bg-white text-black font-semibold"
                    >
                      👉 Join WhatsApp Group (Optional)
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="mt-8 text-sm text-gray-400">
          <div className="bg-white/3 rounded p-4">
            <h4 className="font-semibold">Disclaimer</h4>
            <p className="mt-2 text-xs">
              This webinar is strictly for educational purposes only. We do not provide investment or financial advice. Trading in Forex involves significant risk of loss and is not suitable for everyone. Always do your own research before making any financial decisions.
            </p>
          </div>
        </section>

        <footer className="mt-6 text-xs text-gray-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} BinodRawani.com</div>
          <div>Privacy • Terms</div>
        </footer>
      </main>
    </div>
  );
}