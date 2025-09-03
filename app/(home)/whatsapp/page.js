"use client";
import React from 'react'
const Whatsapp = () => {
  return (
    <>
      <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center px-6 py-12 overflow-hidden">
      {/* Background Candlestick Animation */}
      <div className="absolute inset-0 opacity-20 overflow-hidden flex items-center justify-around">
        <div className="animate-candle bg-green-500 w-2 rounded-md shadow-md" style={{ height: "160px" }}></div>
        <div className="animate-candle bg-red-500 w-2 rounded-md shadow-md" style={{ height: "120px", animationDelay: "0.3s" }}></div>
        <div className="animate-candle bg-green-500 w-2 rounded-md shadow-md" style={{ height: "200px", animationDelay: "0.6s" }}></div>
        <div className="animate-candle bg-red-500 w-2 rounded-md shadow-md" style={{ height: "90px", animationDelay: "0.9s" }}></div>
        <div className="animate-candle bg-green-500 w-2 rounded-md shadow-md" style={{ height: "150px", animationDelay: "1.2s" }}></div>
      </div>

      <style jsx>{`
        @keyframes flicker {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-candle {
          animation: flicker 3s ease-in-out infinite;
        }

        @keyframes ticker {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .ticker {
          display: inline-block;
          white-space: nowrap;
          animation: ticker 20s linear infinite;
        }
      `}</style>

      {/* Hero Section */}
      <h1 className="text-4xl md:text-6xl font-extrabold text-center mb-6 relative z-10">
        📈 Free Stock Market Updates
      </h1>
      <p className="text-lg md:text-xl text-gray-300 text-center max-w-2xl mb-10 relative z-10">
        हम से जुड़ के पहले कमाईये, देखिये सीखिये, फिर खुद निर्णय लीजिये
        <p>EVERYTHING.  Absolutely{" "}
        <span className="text-green-400 font-bold">FREE</span> जल्दी कीजिये  🚀🚀🚀 </p>
      </p>

      {/* Benefits Section */}
      <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl relative z-10">
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-3">📊 अगर आप ट्रेडिंग के बारे मे नहीं जानते है लेकिन आप कमाना चाहते है वो भी बहुत कम investment के साथ</h2>
          <p className="text-gray-400">
            तो Guide हम करेंगे
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-3">⚡ अगर आप ट्रैडर है लेकिन सही दिशा नही मिल रहा है</h2>
          <p className="text-gray-400">
             तो Guide हम करेंगे
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
          <h2 className="text-xl font-semibold mb-3">💹 अगर आपमें कुछ करने का जज़्बा है, कमाने का जुनून है, सीखने का जुनून है</h2>
          <p className="text-gray-400">
             तो Guide हम करेंगे
          </p>
        </div>
      </div>
      {/* Call to Action */}
      <a
        href="https://chat.whatsapp.com/LO6civAx80C3TIBf72sOer"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-black font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition transform hover:scale-110 relative z-10"
      >
        👉 Join WhatsApp Now
      </a>
     {/* Footer */}
<footer className=" relative z-10 w-full bg-gradient-to-r from-gray-900 via-pinkgit ass to-gray-900">
  {/* Ticker Bar */}
  <div className="bg-gray-950 mt-6 overflow-hidden border-t border-gray-800">
    <div className="ticker text-green-400 font-semibold py-2 text-sm">
      🔥 NIFTY 50: 24,520 (+0.65%) &nbsp; | &nbsp; SENSEX: 81,350 (+0.72%) &nbsp; | &nbsp; 
      RELIANCE: 2,850 (+1.2%) &nbsp; | &nbsp; TCS: 3,560 (-0.5%) &nbsp; | &nbsp; 
      HDFC BANK: 1,680 (+0.9%)
    </div>
  </div>
  <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left px-6">
    {/* Left Side */}
    <p className="text-gray-400 text-sm">
      © {new Date().getFullYear()} BinodRawani.com | All Rights Reserved
    </p>

    {/* Right Side */}
    <p className="text-gray-500 text-xs max-w-md">
      Disclaimer: This page is for educational purposes only. We never share
      your personal details or spam. All trading/investment decisions are at
      your own risk.
    </p>
  </div>

  
</footer>

    </div>
 
    </>
  );
}

export default Whatsapp