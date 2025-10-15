"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { projects, tabs } from "@/lib/static-data/portfolio";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);

  const filteredProjects = projects.filter((project) =>
    selectedTab === "all" ? true : project.category === selectedTab
  );

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState<{ src: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleImageClick = (project: (typeof projects)[0], index: number) => {
    const slides = project.images.map((url) => ({ src: url }));
    setLightboxSlides(slides);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="bg-background text-white mb-8 pt-20">
      <section className="flex flex-col items-center justify-start pt-20 md:pt-40 px-4 md:px-6">
        <h1 className="text-sm md:text-xl tracking-[0.3rem] md:tracking-[0.5rem] uppercase font-paragraph font-[300] text-gold">
          Signature Projects
        </h1>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mt-4 max-w-5xl text-center tracking-[0.2rem] md:tracking-[0.8rem] leading-[1.5] uppercase font-heading font-bold">
          Designed with Intention
        </p>
      </section>

      <div className="max-w-[90rem] mx-auto mt-8 md:mt-16">
        {/* Tabs */}
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 mb-8 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`px-3 md:px-4 py-2 border-b-2 text-xs md:text-lg ${
                selectedTab === tab.value
                  ? "border-gold text-gold"
                  : "border-transparent text-white hover:text-gold"
              } font-paragraph  uppercase tracking-[0.2rem] font-[300] transition-colors duration-300 cursor-pointer`}
              onClick={() => setSelectedTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery */}
        <AnimatePresence mode="popLayout">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-6 pb-16"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={`${project.id}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                layout
                className="group relative overflow-hidden cursor-pointer"
                onClick={() => handleImageClick(project, index)}
              >
                <div className="relative w-full h-56 sm:h-64 overflow-hidden">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <h3 className="absolute bottom-3 md:bottom-7 left-3 md:left-4 text-white text-lg md:text-lg tracking-[0.1rem] md:tracking-[0.2rem] font-paragraph font-[300] z-10">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Lightbox */}
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
          plugins={[Thumbnails, Fullscreen, Zoom]}
          carousel={{ finite: true }}
          animation={{
            fade: 300,
            swipe: 300,
            navigation: 300,
            easing: {
              fade: "ease-in-out",
              swipe: "ease-in-out",
              navigation: "ease-in-out",
            },
          }}
        />
      </div>
    </div>
  );
}
