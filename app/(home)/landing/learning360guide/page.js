"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useRouter } from 'next/navigation';

export default function Learning360Guide() {
    const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({ name: "", email: "", phone: "" });

  const validate = () => {
    let valid = true;
    let newErrors = { name: "", email: "", phone: "" };

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    //if (!email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) return "Please enter a valid email.";
    if (!form.email.trim() || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email";
      valid = false;
    }

    if (!form.phone.match(/^[0-9]{10}$/)) {
      newErrors.phone = "Enter a valid 10-digit phone number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Data:", form);
      toast.success("Form submitted successfully!");
      setForm({ name: "", email: "", phone: "" });
       router.push('/landing/learning360guide/success'); // redirect to success page
    } else {
      toast.error("Please fix the errors above");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-600 text-white flex flex-col items-center">
      {/* HERO SECTION */}
      <section className="max-w-4xl text-center py-16 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Unlock Your Learning Potential 🚀
        </motion.h1>
        <p className="text-lg md:text-xl opacity-90 mb-8">
          Join thousands of learners accelerating their journey with our Learning360 Guide.
          Get structured content, expert mentorship, and success support.
        </p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center"
        >
          <Button
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({
                behavior: "smooth",
              })
            }
            size="lg"
            className="bg-white text-purple-700 font-semibold hover:bg-purple-100"
          >
            Get My Free Guide
          </Button>
        </motion.div>
      </section>

      {/* BENEFITS SECTION */}
      <section className="bg-white text-gray-800 w-full py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Learners Love Learning360 🌟
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              title: "Structured Learning Path",
              desc: "Get a roadmap designed by industry experts for efficient progress.",
            },
            {
              title: "1-on-1 Mentorship",
              desc: "Personalized guidance from mentors who’ve been there and done that.",
            },
            {
              title: "Community & Support",
              desc: "Stay motivated and connected with a vibrant learning community.",
            },
          ].map((item, i) => (
            <Card
              key={i}
              className="rounded-2xl shadow-lg border-0 hover:shadow-xl transition"
            >
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FORM SECTION */}
      <section
        id="lead-form"
        className="py-20 px-6 w-full bg-gradient-to-r from-purple-700 to-indigo-700 flex justify-center"
      >
        <Card className="max-w-md w-full p-8 bg-white/90 text-gray-800 rounded-3xl shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-6">
            Get Your Free Learning360 Guide
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Input
                placeholder="Full Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Email Address"
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <Input
                placeholder="Phone Number"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
              {errors.phone && (
                <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold"
            >
              Submit
            </Button>
          </form>
        </Card>
      </section>
    {/* Hero style section with green radient background */}
    
        <section
      className="min-h-screen flex flex-col items-center justify-center text-white bg-[repeating-linear-gradient(135deg,#16a34a_0_10px,#15803d_10px_20px)]
 px-6 py-16"
      
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold text-center mb-4"
      >
        Ready to Transform <br />
        <span className="text-yellow-400">Your Trading Journey?</span>
      </motion.h1>

      <p className="text-center text-lg md:text-xl max-w-2xl mb-10 opacity-90">
        Join thousands of successful traders who started with our masterclasses
        and achieved financial freedom.
      </p>

      {/* Offer Card */}
      <div className="bg-green-900/50 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-10 max-w-3xl w-full border border-green-800">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - included list */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-green-200">
              What’s Included:
            </h3>
            <ul className="space-y-2 text-green-100">
              {[
                "Live interactive sessions with Q&A",
                "Real-time market analysis and trades",
                "Lifetime access to recorded sessions",
                "Exclusive trading community access",
                "Personal mentorship opportunities",
              ].map((item, i) => (
                <li key={i} className="flex items-start space-x-2">
                  <CheckCircle className="w-5 h-5 text-green-400 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - pricing + CTA */}
          <div className="text-center md:text-right flex flex-col items-center md:items-end space-y-4">
            <h2 className="text-5xl font-bold text-yellow-400">₹0</h2>
            <p className="text-green-200 text-sm">
              Limited Time Offer <br />
              <span className="line-through text-green-400">Worth ₹499</span>
            </p>

            <p className="text-yellow-300 text-sm flex items-center gap-2">
              <span className="font-medium">Offer ends:</span>
              <span>19th October, Sunday 12:00 PM</span>
            </p>

            <button
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({
                behavior: "smooth",
              })}
            className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-900 font-semibold px-6 py-3 rounded-lg transition">
              Claim Your Free Spot Now <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-xs text-red-200 mt-2">
              🔥 Only 50 spots available per session
            </p>
          </div>
        </div>
      </div>
    </section>
 
      <section className="w-full bg-gray-100 text-gray-900 py-12 px-6">
  <div className="max-w-3xl mx-auto space-y-4">
    

    <p className="text-sm text-gray-600">
      All content on this site is for educational purposes only and does not constitute financial advice. Investing in stocks involves risks, including the loss of principal. Past performance is not indicative of future results and is influenced by market conditions. Conduct your own research or consult a financial advisor before making any investment decisions. The author is not responsible for any financial losses or gains resulting from the use of this information.
    </p>
    <p className="text-sm text-gray-600">
        This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
    </p>
    <p className="text-sm text-gray-600">
        As stipulated by law, we can not and do not make any guarantees about your ability to get results or earn any money with our ideas, information, tools or strategies. We just want to help you by giving great content, direction and strategies that worked well for us and our students and that we believe can move you forward.
    </p>
    <p className="text-sm text-gray-600">
        All of our terms, privacy policies, and disclaimers for this program and website can be accessed via the link above. We feel transparency is important and we hold ourselves and you to a high standard of integrity.
    </p>
    <p className="text-sm text-gray-600">
        Thanks for stopping by. We hope this training and content brings you a lot of value.
    </p>
  </div>
</section>

      {/* FOOTER */}
      {/*<footer className="w-full bg-green-800 py-8 text-center opacity-80 text-sm fixed bottom-0"> */}
      <footer class="fixed bottom-0 w-full bg-green-600 text-red-100 text-center py-4 shadow-lg flex flex-col md:flex-row items-center justify-center gap-4 px-4">
  <p class="text-lg font-semibold max-w-lg">
     <span class="line-through">₹499</span> <span class="text-red-600 font-bold">  FREE NOW !  </span> 
    Offer valid till <span class="text-white font-bold">19 Oct, 12:00 PM</span>.
  </p>
  <button 
  onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({
                behavior: "smooth",
              })}
  class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-5 rounded-lg shadow-md transition duration-300">
    Enroll Now
  </button>
  
</footer>
        
      
    </div>
  );
}