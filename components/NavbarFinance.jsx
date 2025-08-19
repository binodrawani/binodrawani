"use client";

import Link from "next/link";
import { useState } from "react";

export default function NavbarFinance() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#0B2545] shadow-md px-6 py-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white tracking-wide">
          TWB<span className="text-[#FFD700]">Finance</span>
        </h1>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium text-white">
        <li className="hover:text-[#FFD700] transition relative group cursor-pointer">
          <Link href="/finance">Home</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="hover:text-[#FFD700] transition relative group cursor-pointer">
          <Link href="/finance/About">About Us</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="hover:text-[#FFD700] transition relative group cursor-pointer">
          <Link href="/finance/Services">Services</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="hover:text-[#FFD700] transition relative group cursor-pointer">
          <Link href="/finance/Contact">Contact Us</Link>
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#FFD700] transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li>
            <a href="/finance/auth" className="bg-[#FFD700] text-[#0B2545] px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-500 hover:shadow-lg transition">
              Register
            </a>
          </li>
      </ul>

      {/* Mobile Toggle */}
      <button
        className="md:hidden p-2 border rounded"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 font-medium md:hidden">
          <li>
            <Link href="/finance" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/finance/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
