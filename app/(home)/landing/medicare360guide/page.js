"use client";

import { motion } from "framer-motion";
import { ShieldCheckIcon, UserGroupIcon, PhoneIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-gradient-to-br from-[#0B132B] via-[#1C2541] to-[#3A506B] text-gray-100 overflow-hidden">
      {/* Header */}
      <header className="fixed w-full bg-[#0B132B]/70 backdrop-blur-md border-b border-[#gold]/20 z-50">
        <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">
          <h1 className="text-xl font-bold text-[#FFD700] tracking-tight">
            Medicare360Guide
          </h1>
          <a
            href="tel:1-800-123-4567"
            className="bg-[#FFD700] hover:bg-yellow-400 text-[#0B132B] px-4 py-2 rounded-lg text-sm font-semibold transition"
          >
            Call Now: 1-800-123-4567
          </a>
        </div>
      </header>

      {/* Hero Section */}
{/* Hero Section (Healthcare Theme) */}
<section className="relative flex flex-col items-center justify-center text-center pt-28 pb-24 overflow-hidden bg-gradient-to-br from-[#E0F7FA] via-[#F1F8E9] to-[#FFFDE7]">
  {/* Animated background shapes */}
  <motion.div
    className="absolute top-10 left-10 w-40 h-40 bg-[#80DEEA]/40 rounded-full blur-3xl"
    animate={{ y: [0, -25, 0] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
  />
  <motion.div
    className="absolute bottom-10 right-10 w-52 h-52 bg-[#AED581]/30 rounded-full blur-3xl"
    animate={{ y: [0, 25, 0] }}
    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
  />
  <motion.div
    className="absolute top-1/3 right-1/4 w-24 h-24 bg-[#FFF59D]/50 rounded-full blur-2xl"
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
  />

  {/* Hero content */}
  <div className="relative z-10 px-5 max-w-2xl">
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-extrabold text-[#004D40] leading-tight mb-4"
    >
      Medicare Made Simple,  
      <span className="text-[#00897B]">Trusted, and Clear</span>
    </motion.h1>
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.8 }}
      className="text-gray-700 text-lg mb-8"
    >
      Get expert Medicare guidance to help you choose the best plan — with clarity and confidence.
    </motion.p>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-[#00897B] text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-md hover:bg-[#00796B] transition"
    >
      Get Free Medicare Consultation
    </motion.button>
  </div>

  {/* Decorative medical icon */}
  <motion.div
    className="absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-10"
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-72 md:w-96 text-[#00897B]"
      fill="currentColor"
    >
      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 482C132.5 482 30 379.5 30 256S132.5 30 256 30s226 102.5 226 226-102.5 226-226 226z"/>
      <path d="M368 240h-96V144h-32v96h-96v32h96v96h32v-96h96z"/>
    </svg>
  </motion.div>
</section>



      {/* Features Section */}
      <section className="py-16 bg-[#1C2541]/70 backdrop-blur-lg border-t border-[#FFD700]/10">
        <div className="max-w-6xl mx-auto px-5 grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: ShieldCheckIcon,
              title: "Trusted Coverage",
              desc: "Compare top-rated Medicare plans side-by-side and find your best fit.",
            },
            {
              icon: UserGroupIcon,
              title: "Expert Advisors",
              desc: "Licensed professionals guide you through every step — with no pressure.",
            },
            {
              icon: PhoneIcon,
              title: "Free Consultation",
              desc: "100% free call — no hidden fees, no obligation, just clear guidance.",
            },
          ].map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5, scale: 1.03 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-[#0B132B]/60 border border-[#FFD700]/10 rounded-2xl p-8 shadow-lg hover:shadow-[#FFD700]/20 transition-all"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="bg-[#FFD700]/20 text-[#FFD700] p-4 rounded-full shadow-md border border-[#FFD700]/30">
                  <Icon className="w-8 h-8" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                {title}
              </h3>
              <p className="text-gray-300 text-sm">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Form Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-r from-[#0B132B] to-[#1C2541]">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/polished-metal.png')]"></div>
        <div className="relative z-10 max-w-md mx-auto px-5">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-center mb-6 text-[#FFD700]"
          >
            Request Your Free Medicare Consultation
          </motion.h3>

          <form className="backdrop-blur-xl bg-white/10 border border-[#FFD700]/20 p-6 rounded-2xl space-y-4 shadow-lg">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
            />
            <select className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FFD700]">
              <option>Select Your State</option>
              <option>California</option>
              <option>Texas</option>
              <option>Florida</option>
              <option>New York</option>
            </select>
            <select className="w-full px-4 py-2 rounded-lg bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#FFD700]">
              <option>Select Your Age Group</option>
              <option>Under 65</option>
              <option>65 - 74</option>
              <option>75+</option>
            </select>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-[#FFD700] text-[#0B132B] font-semibold py-2 rounded-lg hover:bg-yellow-400 transition"
            >
              Request My Free Call
            </motion.button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0B132B] border-t border-[#FFD700]/10 text-center py-5 text-sm text-gray-400">
        © 2025 Medicare360Guide — All Rights Reserved.
      </footer>
    </main>
  );
}