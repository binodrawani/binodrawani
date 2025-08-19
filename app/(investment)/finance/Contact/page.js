"use client";
import React from 'react'
import NavbarFinance from '@/components/NavbarFinance'
import { motion } from "framer-motion";
import FooterFinance from '@/components/FooterFinance';
const Contact = () => {
    return (
        <>
            <NavbarFinance />
            <section className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100 flex items-center justify-center px-6 py-12">
                <motion.div
                    className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-10 border border-gray-200"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Heading */}
                    <motion.h1
                        className="text-4xl font-extrabold text-purple-700 mb-6 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        Contact Us
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-center text-gray-600 mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        We'd love to hear from you! Fill out the form below and we'll get back to you.
                    </motion.p>

                    {/* Contact Form */}
                    <form className="space-y-6">
                        {/* Name */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter your name"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </motion.div>

                        {/* Email */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.6 }}
                        >
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                            />
                        </motion.div>

                        {/* Message */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <label className="block mb-2 text-sm font-medium text-gray-700">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Write your message here..."
                                className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
                            ></textarea>
                        </motion.div>

                        {/* Submit Button */}
                        <motion.div
                            className="text-center"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1.4, duration: 0.6 }}
                        >
                            
                            <a href="#" className="bg-purple-600 text-white px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-500 hover:shadow-lg transition">
              Send Message 🚀
            </a>
                        </motion.div>
                    </form>
                </motion.div>
            </section>

           <FooterFinance />
        </>
    )
}

export default Contact