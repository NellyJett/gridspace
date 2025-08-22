"use client";
import React from "react";

export default function Platform() {
  return (
    <section className="relative text-center py-20 text-white overflow-hidden">
      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#002F5B] to-[#F25417]" />
      
      {/*overlay (60% opacity) */}
      <div className="absolute inset-0 bg-[#000000]/60" />
      
      {/* Content */}
      <div className="relative z-10 max-sm:px-5 px-8 space-y-2">
        <h2 className="text-[54px] font-bold">Choose How You Work</h2>
        <h3 className="text-[54px] font-bold text-[#F25417] mt-[-4px]">
          With Gridspace
        </h3>
        <p className="text-[21px]">
          One platform. Three ways to connect with opportunities.
        </p>
      </div>
    </section>
  );
}
