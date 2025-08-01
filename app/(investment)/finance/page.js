'use client'
import React from "react";
import NavbarFinance from "@/components/NavbarFinance";
import { motion } from "framer-motion";


export default function Home() {
  return (
    <div>
      <NavbarFinance />

      {/* Hero Section */}
      <motion.section
  className="bg-[#F5F7FA] min-h-screen flex flex-col justify-center items-center text-center px-4 pt-20"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
>
  <motion.h2
    className="text-4xl md:text-6xl font-bold mb-4 text-[#0B2545]"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3 }}
  >
    Secure Your <span className="text-[#FFD700]">Financial Future</span>
  </motion.h2>
  <motion.p
    className="text-lg md:text-xl mb-6 max-w-2xl text-[#1F2937]"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
  >
    We help you plan, save, and invest wisely — for a worry-free life.
    <button className="bg-[#FFD700] text-[#0B2545] px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition">
          Get Started
        </button>
  </motion.p>
</motion.section>
      <section className="bg-white py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-10 text-[#0B2545]">What We Offer</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Financial Education</h4>
              <p className="text-gray-700">Get trained yourself by boosting your knowledge in Indian & Forex stock market.</p>
            </div>
            <div className="p-6 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Wealth Management</h4>
              <p className="text-gray-700">Let us manage and grow your money with confidence.</p>
            </div>
            <div className="p-6 bg-[#F9FAFB] shadow-md rounded-xl hover:shadow-lg transitionp-6 bg-white shadow-md rounded-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-3 text-[#1E3A8A]">Financial Advisor</h4>
              <p className="text-gray-700">We advise you on your finance related issues and queries.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-[#EEF2F7] py-16 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-3xl font-bold mb-6 text-[#0B2545]">Get In Touch</h3>
    <form className="grid gap-4">
      <input type="text" placeholder="Your Name" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition" />
      <input type="email" placeholder="Your Email" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition" />
      <textarea placeholder="Your Message" rows="4" className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FFD700] transition"></textarea>
      <button className="bg-[#0B2545] text-white py-3 rounded-lg hover:bg-[#12335a] transition">
        Send Message
      </button>
    </form>
  </div>
</section>
<motion.footer
  className="bg-[#0B2545] text-white text-center py-6"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
>
  <p>© {new Date().getFullYear()} BinodRawani Finance. All rights reserved.</p>
</motion.footer>

    </div>
  );
}                       