"use client";
import React from 'react'
import NavbarFinance from '@/components/NavbarFinance'
import FooterFinance from '@/components/FooterFinance';
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <NavbarFinance />
            <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex items-center justify-center px-6 py-12">
                <motion.div
                    className="max-w-3xl bg-white shadow-lg rounded-2xl p-10 border border-gray-200"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Heading */}
                    <motion.h1
                        className="text-4xl font-extrabold text-blue-700 mb-6 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        About Us - Finance
                    </motion.h1>

                    {/* Intro */}
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed mb-6 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.7 }}
                    >
                        Welcome to the{" "}
                        <span className="font-semibold text-blue-600">Finance Section</span>.
                        We provide insights, strategies, and tools to help you manage investments
                        effectively and make informed financial decisions.
                    </motion.p>

                    {/* Feature Highlights */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                        {[
                            {
                                title: "📊 Investment",
                                desc: "Learn smart ways to grow your wealth through investment strategies.",
                            },
                            {
                                title: "💡 Knowledge",
                                desc: "Simplify complex financial concepts with easy-to-understand guides.",
                            },
                            {
                                title: "🤝 Guidance",
                                desc: "Get expert tips to achieve your financial goals step by step.",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.9 + index * 0.3, duration: 0.6 }}
                            >
                                <h3 className="text-xl font-bold text-blue-700 mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Closing Note */}
                    <motion.p
                        className="text-lg text-gray-700 leading-relaxed mt-8 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.8, duration: 0.8 }}
                    >
                        🚀 Stay tuned for more resources, tools, and expert guidance tailored
                        to your{" "}
                        <span className="font-semibold text-blue-600">financial journey</span>.
                    </motion.p>
                </motion.div>
            </section>
            <FooterFinance />
        </>

    )
}

export default About