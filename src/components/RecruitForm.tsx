"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function RecruitForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
  });

  const [cvFile, setCvFile] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setCvFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recruitment data:", formData);
    console.log("CV file:", cvFile);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 bg-green-100 rounded-lg text-green-800 mt-4">
        Thank you! Your details have been submitted for recruitment.
      </div>
    );
  }

  // Animation variants
  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4 },
    }),
  };

  const fields = [
    { label: "Full Name", name: "fullName", type: "text" },
    { label: "Email", name: "email", type: "email" },
    { label: "Phone Number", name: "phone", type: "tel" },
    { label: "Position Interested", name: "position", type: "text" },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg mt-6"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center">
        Recruitment Form
      </h2>

      {fields.map((field, index) => (
        <motion.label
          className="block mb-4"
          key={field.name}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fieldVariants}
        >
          {field.label}
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name as keyof typeof formData]}
            onChange={handleChange}
            className="mt-1 w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </motion.label>
      ))}

      <motion.label
        className="block mb-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: fields.length * 0.1, duration: 0.4 }}
      >
        Upload CV
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="mt-1 w-full"
          required
        />
      </motion.label>

      <motion.button
        type="submit"
        className="mt-4 w-full bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: (fields.length + 1) * 0.1, duration: 0.4 }}
      >
        Submit
      </motion.button>
    </form>
  );
}
