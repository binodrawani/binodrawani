import React, { useState, useEffect } from "react";

export default function NavbarFinance() {
  const [isScroll, setIsScroll] = useState(false)
  const [isOpen, setIsOpen] = useState(false);

useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            } else {
                setIsScroll(false)
            }
        })
    }, [])

  return (
    <nav className={'bg-[#0B2545] shadow-md fixed w-full z-50 ${isScroll ? "bg-white bg-opacity-70 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20" : ""}'}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white tracking-wide">
          Binod<span className="text-[#FFD700]">Rawani</span>
        </h1>
        <ul className="hidden md:flex gap-8 text-white font-medium ">
          <li className="hover:text-[#FFD700] transition relative group cursor-pointer">Home<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span></li>
          <li className="hover:text-[#FFD700] transition relative group cursor-pointer">Services<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span></li>
          <li className="hover:text-[#FFD700] transition relative group cursor-pointer">About<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span></li>
          <li className="hover:text-[#FFD700] transition relative group cursor-pointer">Contact<span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span></li>

        </ul>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
      </div>
      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 bg-[#0B2545] px-6 py-4 text-white">
          <li className="hover:text-[#FFD700] transition">Home</li>
          <li className="hover:text-[#FFD700] transition">Services</li>
          <li className="hover:text-[#FFD700] transition">About</li>
          <li className="hover:text-[#FFD700] transition">Contact</li>

        </ul>
      )}
    </nav>

  );
}