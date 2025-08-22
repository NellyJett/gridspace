import { motion, Easing, Variants } from "framer-motion";
import {
  Gallery1,
  Gallery2,
  Gallery3,
  Gallery4,
  Gallery5,
  Gallery6,
  Gallery7,
  Gallery8,
  Gallery9,
  Gallery10,
  Gallery11,
  Gallery12,
  Gallery13,
} from "@/components/icons";

const galleries = [
  <Gallery1 key="gallery1" />,
  <Gallery2 key="gallery2" />,
  <Gallery3 key="gallery3" />,
  <Gallery4 key="gallery4" />,
  <Gallery5 key="gallery5" />,
  <Gallery6 key="gallery6" />,
  <Gallery7 key="gallery7" />,
  <Gallery8 key="gallery8" />,
  <Gallery9 key="gallery9" />,
  <Gallery10 key="gallery10" />,
  <Gallery11 key="gallery11" />,
  <Gallery12 key="gallery12" />,
];

const galleryVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut" as Easing,
    },
  }),
};

const hoverEffect = {
  scale: 1.05,
  y: -10,
  transition: {
    duration: 0.2,
    ease: "easeOut" as Easing,
  },
};

const marqueeVariants: Variants = {
  animate: {
    y: [0, -50],
    transition: {
      repeat: Infinity,
      repeatType: "loop",
      duration: 4,
      ease: "linear" as Easing,
    },
  },
};

export default function CoworkGallery() {
  return (
    <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-18">
      {/* Gallery13 as Background with Text Overlay */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] mb-6">
        <Gallery13 className="h-full w-full object-cover rounded-lg" />
        {/* Fixed Title in the Center */}
        <h2 className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl sm:text-2xl font-bold text-white bg-black bg-opacity-50 px-3 sm:px-4 py-1 sm:py-2 rounded">
          Cowork Spaces Gallery
        </h2>
        {/* Marquee Text in Lower Half, Centered with Responsive Width */}
        <motion.div
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full sm:w-64 md:w-72 lg:w-80 p-3 sm:p-4 text-white text-xs sm:text-sm"
          variants={marqueeVariants}
          animate="animate"
        >
          <p>
            Our coworking spaces blend modern design with a vibrant community to
            boost productivity. Check out the gallery below to explore our
            inspiring workspaces.
            Our coworking spaces blend modern design with a vibrant community to
            boost productivity. Check out the gallery below to explore our
            inspiring workspaces.
            Our coworking spaces blend modern design with a vibrant community to
            boost productivity. Check out the gallery below to explore our
            inspiring workspaces.
          </p>
        </motion.div>
      </div>

      {/* Write-Up Section */}
      <div className="text-center mb-10 px-4 sm:px-6 md:px-8 lg:px-12">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Gallery</h2>
        <p className="mt-2 text-sm sm:text-base text-gray-700 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          Step into our vibrant coworking spaces, where modern design sparks
          creativity and community fuels success. Explore our gallery to
          discover inspiring workspaces that elevate your workday!
        </p>
      </div>

      {/* Gallery Grid */}
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {galleries.map((gallery, index) => (
          <motion.div
            key={`gallery-${index}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={galleryVariants}
            whileHover={hoverEffect}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {gallery}
          </motion.div>
        ))}
      </div>
    </div>
  );
}