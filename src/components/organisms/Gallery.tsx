/** @format */

"use client";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { FiDroplet, FiPlus, FiArrowUpRight } from "react-icons/fi";

// ----------------------------------------------------------------------
// 1. DATA LAYER (DRY Principle)
// ----------------------------------------------------------------------
const galleryData = [
  // COLUMN 1 FLOW
  {
    id: "restoring-dignity",
    type: "image-text",
    category: "Restoring Dignity",
    title: "Rural Outreach, Benue",
    description:
      "Community-led discussions addressing immediate local needs and long-term sustainable solutions.",
    imageSrc: "/images/IMG-20260325-WA0096.jpg",
    aspectRatio: "aspect-[3/4]",
  },
  {
    id: "smiling-children",
    type: "image-only",
    imageSrc: "/images/IMG-20260325-WA0094.jpg",
    aspectRatio: "aspect-square",
  },

  // COLUMN 2 FLOW
  {
    id: "clean-water",
    type: "text-icon",
    icon: <FiDroplet className="text-secondary text-4xl mb-6" />,
    title: "Clean Water Initiatives",
    description:
      "Access to clean water is a fundamental human right. Documenting the implementation of sustainable WASH programs.",
  },
  {
    id: "water-pump",
    type: "image-only",
    imageSrc: "/images/IMG-20260325-WA0072.jpg",
    aspectRatio: "aspect-[4/3]",
  },
  {
    id: "sustainable-access",
    type: "image-text",
    category: "WASH Programs",
    title: "Sustainable Access",
    imageSrc: "/images/IMG-20260325-WA0066.jpg",
    aspectRatio: "aspect-[3/3]",
  },

  // COLUMN 3 FLOW
  {
    id: "workshop",
    type: "image-only",
    imageSrc: "/images/nyam stellawrorking2.jpg",
    aspectRatio: "aspect-[16/9]",
    grayscaleHover: true,
  },
  {
    id: "youth-empowerment",
    type: "image-text",
    category: "Youth Empowerment",
    title: "Building Leaders",
    description:
      "Fostering skills and creating opportunities for the next generation of changemakers.",
    imageSrc: "/images/nyam stella3working.jpg",
    aspectRatio: "aspect-square",
  },
  {
    id: "view-archive",
    type: "action",
  },
];

// ----------------------------------------------------------------------
// 2. ANIMATION VARIANTS (Sliding & Spinning)
// ----------------------------------------------------------------------
const gridVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 60,
    rotate: -4,
  },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    // THE FIX IS HERE: Added 'as const' to lock the tuple type for Next.js
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

// ----------------------------------------------------------------------
// 3. COMPONENT IMPLEMENTATION
// ----------------------------------------------------------------------
export const Gallery = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto z-10 relative py-24">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-secondary/5 blur-[120px] pointer-events-none -z-10" />

      <motion.div
        variants={gridVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8"
      >
        {galleryData.map((item) => (
          <motion.div
            key={item.id}
            variants={cardVariants}
            className="break-inside-avoid"
          >
            {/* RENDER: IMAGE + TEXT CARD */}
            {item.type === "image-text" && (
              <div className="group bg-surface-bright rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out border border-white/20 relative">
                <div
                  className={`${item.aspectRatio} w-full overflow-hidden relative`}
                >
                  <Image
                    src={item.imageSrc!}
                    alt={item.title!}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="w-14 h-14 bg-surface-bright/90 backdrop-blur-md rounded-full flex items-center justify-center text-primary shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                    >
                      <FiArrowUpRight className="text-2xl" />
                    </motion.div>
                  </div>
                </div>
                <div className="p-6 bg-surface-bright relative z-10">
                  <span className="font-body text-[10px] uppercase tracking-[0.2em] text-secondary font-semibold block mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl text-primary mb-2 italic">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* RENDER: IMAGE ONLY CARD */}
            {item.type === "image-only" && (
              <div className="group bg-surface-container-low rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 ease-out relative cursor-pointer">
                <div
                  className={`${item.aspectRatio} w-full overflow-hidden relative`}
                >
                  <Image
                    src={item.imageSrc!}
                    alt="Gallery visual"
                    fill
                    className={`object-cover transform group-hover:scale-105 transition-all duration-700 ease-out ${
                      item.grayscaleHover ? "grayscale hover:grayscale-0" : ""
                    }`}
                  />
                </div>
              </div>
            )}

            {/* RENDER: TEXT ONLY CARD */}
            {item.type === "text-icon" && (
              <div className="bg-surface-bright p-8 rounded-xl shadow-sm border border-white/50 flex flex-col justify-center items-start min-h-[300px]">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="font-serif text-3xl text-primary italic mb-4">
                  {item.title}
                </h3>
                <p className="font-body text-base text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>
            )}

            {/* RENDER: ACTION CARD */}
            {item.type === "action" && (
              <div className="bg-primary/5 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-500 ease-out p-8 flex items-center justify-center aspect-square group cursor-pointer border border-transparent hover:border-primary/10">
                <div className="text-center flex flex-col items-center">
                  <motion.div
                    whileHover={{ rotate: 90 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                  >
                    <FiPlus className="text-primary/40 text-5xl mb-4" />
                  </motion.div>
                  <p className="font-serif italic text-primary/60 text-xl group-hover:text-primary transition-colors">
                    View Full Archive
                  </p>
                  <button className="mt-6 px-6 py-2 rounded-full border border-primary/20 text-primary font-body font-semibold text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-colors duration-300">
                    Load More
                  </button>
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
