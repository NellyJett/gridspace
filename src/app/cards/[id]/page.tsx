"use client";

import { gridData } from "@/components/griddata";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import CoworkGallery from "@/components/CoworkGallery";
import RecruitForm from "@/components/RecruitForm";
import ProjectsGallery from "@/components/ProjectsGallery";

interface CardPageProps {
  params: {
    id: string;
  };
}

export default function CardDetailPage({ params }: CardPageProps) {
  const card = gridData.find((item) => item.id === params.id);

  if (!card) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold">Card not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Navbar />

      {card.id === "cowork" && <CoworkGallery />}
      {card.id === "recruit" && <RecruitForm />}
      {card.id === "project" && <ProjectsGallery />}
      <Footer />
    </div>
  );
}
