"use client";

import React from "react";
import GridCard from "./gridcard";
import { gridData } from "./griddata";

export default function GridMain() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-20 bg-[#F9F3F1] px-6 md:px-12 lg:px-18">
      {gridData.map((item) => (
        <GridCard
          key={item.id}
          id={item.id}
          title={item.title}
          button={item.button}
          color={item.color}
          color2={item.color2}
          image={item.image}
        />
      ))}
    </section>
  );
}
