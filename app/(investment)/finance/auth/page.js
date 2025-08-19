"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const AuthPage = () => {
  const [tab, setTab] = useState("login");

  const tabList = [
    { key: "login", label: "Login" },
    { key: "register", label: "Register" },
    { key: "forgot", label: "Forgot Password" },
  ];

  return (
    <>
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-6">
      <motion.div
        className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Tabs */}
        <div className="flex justify-between mb-6 border-b">
          {tabList.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`w-1/3 pb-2 text-lg font-semibold ${
                tab === t.key
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-400"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Forms */}
        <motion.div
          key={tab}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {tab === "login" && (
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition"
              >
                Login
              </button>
            </form>
          )}

          {tab === "register" && (
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-green-600 text-white rounded-xl hover:bg-green-700 transition"
              >
                Register
              </button>
            </form>
          )}

          {tab === "forgot" && (
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
              />
              <button
                type="submit"
                className="w-full py-3 bg-yellow-500 text-white rounded-xl hover:bg-yellow-600 transition"
              >
                Reset Password
              </button>
            </form>
          )}
        </motion.div>
      </motion.div>
    </section>
    </>
  );
} 
  
export default AuthPage

