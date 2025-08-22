"use client";
import React from "react";

import Navbar from "@/components/navbar";
import Platform from "@/components/platform";
import GridMain from "@/components/gridmain";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Platform />
      <GridMain />
      <Footer />
    </>
  );
}
