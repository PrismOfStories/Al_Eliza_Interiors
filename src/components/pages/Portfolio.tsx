"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects, tabs } from "@/lib/static-data/portfolio";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import RevealWrapper from "../common/RevealWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".portfolio-animate", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: sectionRef }
  );
  return (
    <main className="bg-background overflow-hidden pb-14 pt-14 text-white md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      {/* Hero Section */}
      <RevealWrapper>
        <section
          ref={sectionRef}
          className="flex flex-col items-center justify-start px-4 pt-20 md:px-6 md:pt-40"
          aria-label="Portfolio introduction"
        >
          <header className="text-center">
            <p className="portfolio-animate font-paragraph text-gold text-sm font-[300] uppercase tracking-[0.3rem] md:text-xl md:tracking-[0.5rem]">
              Signature Projects
            </p>
            <h1 className="portfolio-animate font-heading mt-4 max-w-5xl text-center text-2xl font-bold uppercase leading-[1.5] tracking-[0.2rem] sm:text-4xl md:text-5xl md:tracking-[0.8rem] lg:text-6xl xl:text-7xl">
              Designed with Intention
            </h1>
          </header>
        </section>

        <div className="mx-auto mt-8 max-w-[90rem] md:mt-28">
          {/* Navigation Tabs */}
          <nav
            className="mb-8 flex flex-wrap justify-center gap-4 px-4 lg:justify-between"
            aria-label="Portfolio category filters"
          >
            {tabs.map((tab) => (
              <button
                key={tab.value}
                className={`border-b-2 px-3 py-2 text-xs md:px-4 md:text-lg ${
                  selectedTab === tab.value
                    ? "border-gold text-gold"
                    : "hover:text-gold border-transparent text-white"
                } font-paragraph  cursor-pointer font-[300] uppercase tracking-[0.2rem] transition-colors duration-300`}
                onClick={() => setSelectedTab(tab.value)}
                aria-pressed={selectedTab === tab.value}
                aria-label={`Filter by ${tab.label}`}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Portfolio Gallery */}
          <section aria-label="Portfolio gallery">
            <AnimatePresence mode="popLayout">
              <motion.div
                className="grid grid-cols-1 gap-3 px-4 pb-16 sm:grid-cols-2 md:px-6 lg:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                role="list"
                aria-label={`Portfolio projects - ${
                  selectedTab === "all"
                    ? "All categories"
                    : tabs.find((t) => t.value === selectedTab)?.label
                }`}
              >
                {filteredProjects.map((project, index) => (
                  <motion.article
                    key={`${project.id}-${index}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.05,
                    }}
                    layout
                    className="group relative cursor-pointer overflow-hidden"
                    onClick={() => handleImageClick(project, index)}
                    role="listitem"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handleImageClick(project, index);
                      }
                    }}
                    aria-label={`View project: ${project.title}`}
                  >
                    <figure className="relative h-56 w-full overflow-hidden sm:h-64">
                      <Image
                        src={project.images[0]}
                        alt={`${project.title} - Interior design project by Al-Eliza Interiors`}
                        fill
                        className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                      />
                      <div
                        className="absolute inset-0 bg-black opacity-0 transition-opacity duration-500 group-hover:opacity-50"
                        aria-hidden="true"
                      ></div>
                      <div
                        className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
                        aria-hidden="true"
                      ></div>
                      <figcaption className="font-paragraph absolute bottom-3 left-3 z-10 text-lg font-[300] tracking-[0.1rem] text-white md:bottom-7 md:left-4 md:text-lg md:tracking-[0.2rem]">
                        {project.title}
                      </figcaption>
                    </figure>
                  </motion.article>
                ))}
              </motion.div>
            </AnimatePresence>
          </section>

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
      </RevealWrapper>
    </main>
  );
}
