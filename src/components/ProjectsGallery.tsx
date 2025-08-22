"use client";

import { projectData } from "./projectData";
import { motion } from "framer-motion";

export default function ProjectsGallery() {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-20">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
