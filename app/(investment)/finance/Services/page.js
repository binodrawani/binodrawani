"use client";

import { motion } from "framer-motion";
import NavbarFinance from "@/components/NavbarFinance"
import FooterFinance from "@/components/FooterFinance";

const Services = () => {
    const services = [
        {
            title: "📊 Financial Planning",
            desc: "Get a structured financial plan tailored to your goals and lifestyle.",
        },
        {
            title: "💼 Investment Advisory",
            desc: "Expert advice to grow your wealth through smart investments.",
        },
        {
            title: "📈 Market Analysis",
            desc: "Stay updated with real-time market insights and analysis.",
        },
        {
            title: "🔐 Risk Management",
            desc: "Identify, assess, and mitigate risks to protect your investments.",
        },
        {
            title: "🌍 Training Services",
            desc: "Comprehensive training and full guidance.",
        },
        {
            title: "🤝 Consulting",
            desc: "Personalized consulting to guide you through financial decisions.",
        },
    ];

    return (
        <>
            <NavbarFinance />
            <section className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center px-6 py-12">
                <motion.div
                    className="max-w-6xl w-full"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Heading */}
                    <motion.h1
                        className="text-4xl font-extrabold text-green-700 mb-4 text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        Our Services
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg text-gray-600 mb-12 text-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.7 }}
                    >
                        Explore our wide range of financial services designed to help you achieve
                        financial freedom.
                    </motion.p>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition transform hover:-translate-y-2"
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                            >
                                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">{service.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>
            <FooterFinance />
        </>
    )
}

export default Services