"use client";

import React from "react";
import Link from "next/link";

interface GridCardProps {
  id: string;
  title: string;
  button: string;
  color: string;
  color2: string;
  image: React.ReactNode;
}

export default function GridCard({ id, title, button, color, color2, image }: GridCardProps) {
  return (
    <Link href={`/cards/${id}`}>
      <div className="cursor-pointer bg-[#FFFEFE] shadow-md rounded-[8px] p-6 text-center pb-20 pt-10 hover:shadow-lg transition">
        {/* Icon */}
        <div className={`${color2} w-20 h-20 flex items-center justify-center rounded-[8px] mx-auto`}>
          {image}
        </div>

        {/* Title */}
        <h4 className="font-semibold mt-4">{title}</h4>

        {/* Action button */}
        <button className={`${color} text-white px-4 py-2 mt-4 rounded-[12px] w-full`}>
          {button}
        </button>
      </div>
    </Link>
  );
}
