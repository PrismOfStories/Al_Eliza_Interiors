"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import RevealWrapper from "../common/RevealWrapper";
import { tabs, projects } from "@/lib/static-data/portfolio";

gsap.registerPlugin(ScrollTrigger);

export default function Portfolio() {
  const [selectedTab, setSelectedTab] = useState(tabs[0].value);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSlides, setLightboxSlides] = useState<{ src: string }[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: sectionRef }
  );

  const handleImageClick = (subcategory: any) => {
    const slides = subcategory.images.map((src: string) => ({ src }));
    setLightboxSlides(slides);
    setLightboxIndex(0);
    setLightboxOpen(true);
  };

  // Helper: Get display images depending on tab
  const getDisplayItems = () => {
    if (selectedTab === "all") {
      // Show only first image from first subcategory of each main category
      return projects.map((project) => {
        const firstSub = project.subcategories?.[0];
        const firstImage = firstSub?.images?.[0];
        return {
          ...project,
          subcategory: firstSub,
          image: firstImage,
        };
      });
    } else {
      // Show each subcategory’s first image under the selected main category
      const project = projects.find((p) => p.category === selectedTab);
      if (!project) return [];
      return project.subcategories.map((sub: any) => ({
        ...project,
        subcategory: sub,
        image: sub.images?.[0],
      }));
    }
  };

  const displayItems = getDisplayItems();

  return (
    <main className="bg-background overflow-hidden pb-14 pt-14 text-white md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <RevealWrapper>
        {/* Header */}
        <section
          ref={sectionRef}
          className="flex flex-col items-center justify-start px-4 pt-20 md:px-6 md:pt-40"
        >
          <header className="text-center">
            <p className="portfolio-animate font-paragraph text-gold text-sm font-[300] uppercase tracking-[0.2rem] md:text-xl">
              Signature Projects
            </p>
            <h1 className="portfolio-animate font-heading mt-4 max-w-5xl text-center text-2xl font-bold uppercase leading-[1.5] tracking-[0.2rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
              Designed with Intention
            </h1>
          </header>
        </section>

        <div className="mx-auto mt-8 max-w-[90rem] md:mt-28">
          {/* Tabs */}
          <nav className="mb-8 flex flex-wrap justify-center gap-4 px-4 lg:justify-between">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                className={`border-b-2 px-3 py-2 text-xs md:px-4 md:text-lg ${
                  selectedTab === tab.value
                    ? "border-gold text-gold"
                    : "hover:text-gold border-transparent text-white"
                } font-paragraph cursor-pointer font-[300] uppercase tracking-[0.2rem] transition-colors duration-300`}
                onClick={() => setSelectedTab(tab.value)}
              >
                {tab.label}
              </button>
            ))}
          </nav>

          {/* Gallery */}
          <section aria-label="Portfolio gallery">
            <AnimatePresence mode="popLayout">
              <motion.div
                className="grid grid-cols-1 gap-3 px-4 pb-16 sm:grid-cols-2 md:px-6 lg:grid-cols-3"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
              >
                {displayItems.map((item, index) =>
                  item.image ? (
                    <motion.article
                      key={`${item.category}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                      }}
                      layout
                      className="group relative cursor-pointer overflow-hidden"
                      onClick={() =>
                        handleImageClick(item.subcategory || { images: [] })
                      }
                    >
                      <figure className="relative h-56 w-full overflow-hidden sm:h-64">
                        <Image
                          src={item.image}
                          alt={`${item.category} preview`}
                          fill
                          className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                        <figcaption className="font-paragraph absolute bottom-3 left-3 z-10 text-lg font-[300] tracking-[0.1rem] text-white md:bottom-7 md:left-4 md:text-lg">
                          {selectedTab === "all"
                            ? item.category
                            : item.subcategory?.title || ""}
                        </figcaption>
                      </figure>
                    </motion.article>
                  ) : null
                )}
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
          />
        </div>
      </RevealWrapper>
    </main>
  );
}
