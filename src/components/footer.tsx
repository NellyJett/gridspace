"use client";

import React from "react";
import { League_Gothic } from "next/font/google";
import { Logo } from "./icons";

const leagueGothic = League_Gothic({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer className="w-full bg-white py-4">
      {/* Top section */}
      <div className="container mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between py-10 space-y-4 sm:space-y-0 px-6 lg:px-0">
        {/* Left side: Logo + Text */}
        <div className="flex items-center justify-center sm:justify-start space-x-2">
          <Logo />
          <h1 className={`${leagueGothic.className} text-xl text-[#F25417]`}>
            GridSpace
          </h1>
        </div>

        {/* Right side: Links */}
        <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-3 sm:space-y-0 text-center sm:text-left lg:text-right">
          <a href="#" className="text-[#121212] hover:text-[#121212] text-sm">
            About
          </a>
          <a href="#" className="text-[#121212] hover:text-gray-900 text-sm">
            Contact
          </a>
          <a href="#" className="text-[#121212] hover:text-gray-900 text-sm">
            Terms
          </a>
          <a href="#" className="text-[#121212] hover:text-gray-900 text-sm">
            Investors & Partners
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="px-6 lg:px-20">
        <hr className="w-full border-t-2 border-[#868686]" />
      </div>

      {/* Bottom section */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 lg:px-0 py-4 text-sm text-[#121212] space-y-3 md:space-y-0">
        <p className="text-[#121212] font-bold text-center md:text-left">
          Copyright © 2025, GridSpace. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-[#121212]">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-[#121212]">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
