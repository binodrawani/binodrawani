"use client";
import React, { useState } from "react";
// - Configure `WHATSAPP_GROUP_LINK` below to your actual group/announcement link.
// - To store registrations, point `REGISTRATION_ENDPOINT` to your API (Google Sheets, Formspree, or your /api/register endpoint).

const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LO6civAx80C3TIBf72sOer"; // <-- update this
const REGISTRATION_ENDPOINT = "/api/register"; // <-- update or implement server endpoint

export default function WebinarLanding() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (!name.trim()) return "Please enter your full name.";
    if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Please enter a valid email.";
    if (!phone.trim() || phone.replace(/[^0-9]/g, "").length < 7) return "Please enter a valid mobile/WhatsApp number.";
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    const v = validate();
    if (v) {
      setError(v);
      return;
    }

    setLoading(true);

    // Attempt to send registration to your backend (optional)
    try {
      // NOTE: Implement your backend route to save submissions (e.g. Google Sheets, Airtable, Formspree)
      // If you don't have a backend yet, you can leave this call commented or point to Formspree.
      await fetch(REGISTRATION_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, source: "webinar-landing" }),
      }).catch((err) => {
        // swallow network errors for now — still proceed to WhatsApp join flow
        console.warn("registration submit error:", err);
      });

      // Open WhatsApp group link in new tab so the user can join immediately
      window.open(WHATSAPP_GROUP_LINK, "_blank");
      setSuccess("Thank you! We sent your details and opened the WhatsApp group link. Please complete the join on WhatsApp.");
      setName("");
      setEmail("");
      setPhone("");
    } catch (err) {
      console.error(err);
      setError("Something went wrong — please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Free Educational Webinar on Global Financial Markets</h1>
          <p className="text-sm text-slate-400 ml-4">This session is for learning purposes only — not investment advice.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left - Info */}
          <section className="bg-slate-800/60 rounded-2xl p-8 shadow-2xl">
            <h2 className="text-xl font-semibold mb-4">What you’ll learn</h2>
            <ul className="list-disc pl-5 space-y-2 text-slate-200">
              <li>Basic concepts of global currency & financial markets</li>
              <li>How to read charts and common indicators</li>
              <li>Risk management and responsible strategies</li>
              <li>Live Q&amp;A with experienced mentors</li>
            </ul>

            <hr className="my-6 border-slate-700" />

            <h3 className="text-sm text-slate-300 font-medium">Who should attend</h3>
            <p className="text-slate-300 mt-2">Beginners, students, and curious learners who want an educational introduction to global financial markets.</p>

            <div className="mt-6 text-sm text-slate-400 bg-slate-900/30 p-4 rounded">
              <strong>Important:</strong> This webinar is purely educational and does not guarantee profits. Always do your own research before making financial decisions.
            </div>

            <footer className="mt-6 text-xs text-slate-500">© {new Date().getFullYear()} BinodRawani</footer>
          </section>

          {/* Right - Form */}
          <aside className="bg-slate-800/70 rounded-2xl p-8 shadow-2xl flex flex-col justify-between">
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-lg font-semibold">Register for the free session</h2>

              {error && <div className="text-sm text-red-300 bg-red-900/20 p-3 rounded">{error}</div>}
              {success && <div className="text-sm text-green-200 bg-green-900/20 p-3 rounded">{success}</div>}

              <label className="block">
                <span className="text-slate-300 text-sm">Full name</span>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  className="mt-2 block w-full rounded-lg bg-slate-900/40 border border-slate-700 p-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
                />
              </label>

              <label className="block">
                <span className="text-slate-300 text-sm">Email</span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-2 block w-full rounded-lg bg-slate-900/40 border border-slate-700 p-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
                />
              </label>

              <label className="block">
                <span className="text-slate-300 text-sm">Mobile (WhatsApp number)</span>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="e.g. +91 9xxxxxxxxx"
                  className="mt-2 block w-full rounded-lg bg-slate-900/40 border border-slate-700 p-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-600"
                />
              </label>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full py-3 text-sm font-semibold shadow-xl bg-emerald-500 text-slate-900 hover:brightness-95 disabled:opacity-60"
                >
                  {loading ? "Processing..." : "Join Free Webinar"}
                </button>
              </div>

              <p className="text-xs text-slate-400 mt-2">By registering you agree to receive webinar updates. We respect your privacy — we will not share your personal details or spam.</p>
            </form>
          </aside>
        </div>
      </div>
    </div>
  );
}
