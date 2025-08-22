"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Logo } from "./icons";
import { League_Gothic } from "next/font/google";
import { Menu, X } from "lucide-react";

const leagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-[#F9F3F1] shadow-sm px-6 md:px-6 py-2">
      <div className="flex justify-between items-center lg:px-10">
        <div className="flex gap-2 items-center">
          <Logo />
          <h1 className={`${leagueGothic.className} text-xl text-[#F25417]`}>
            GridSpace
          </h1>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-center justify-between">
          <ul className="flex space-x-6 text-[#121212] pr-20">
            <li><Link href="/how-it-works">How it works</Link></li>
            <li><Link href="/host">Host a Space</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
          <div className="flex space-x-4 items-center">
            <Link href="/become-host" className="text-[#121212] font-bold">
              Become a Host
            </Link>
            <Link
              href="/signup"
              className="bg-[#F25417] text-white px-4 py-2 rounded-[8px] font-bold"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden mt-4 flex flex-col items-center space-y-4 py-6 bg-white shadow-md rounded-md">
          <ul className="flex flex-col space-y-4 text-gray-700">
            <li><Link href="/how-it-works">How it works</Link></li>
            <li><Link href="/host">Host a Space</Link></li>
            <li><Link href="/about">About</Link></li>
          </ul>
          <div className="flex flex-col space-y-3 mt-4 w-full px-6">
            <Link href="/become-host" className="text-[#121212] font-bold text-center">
              Become a Host
            </Link>
            <Link
              href="/signup"
              className="bg-[#F25417] text-white px-4 py-2 rounded-[8px] font-bold text-center"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
