"use client";

import React, { useState } from "react";
import Image from "next/image";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import useFancybox from "@/lib/utils/useFancybox";
import Link from "next/link";
import {AnimatePresence,motion} from "motion/react"
import { projects, tabs } from "@/lib/static-data/portfolio";

export default function Portfolio() {


  const [selectedTab, setSelectedTab] = useState(tabs[0].value);



  const filteredProjects = projects.filter((project) =>
    selectedTab === "all" ? true : project.category === selectedTab
  );

 const [fancyboxRef] = useFancybox({
 Carousel: {
    Toolbar: {
      display: {
        left: ["counter"],
        middle: [
          "zoomIn",
          "zoomOut",
          "reset",
        ],
        right: ["autoplay", "thumbs", "close"],
      },
    },
  },
});

  return (
    <div className="bg-background text-white mb-8">
      <section className="flex flex-col items-center justify-start pt-20 md:pt-40 px-4 md:px-6">
        <h1 className="text-sm md:text-xl tracking-[0.3rem] md:tracking-[0.6rem] uppercase font-michroma font-light">
          Signature Projects
        </h1>
      <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-4 max-w-5xl text-center tracking-[0.2rem] md:tracking-[0.8rem] leading-snug uppercase font-michroma font-bold">
          Designed with Intention
        </p>
      </section>

      <div className="max-w-[90rem] mx-auto mt-8 md:mt-16">
        <div className="flex flex-wrap justify-center lg:justify-between gap-4 mb-8 px-4">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              className={`px-3 md:px-4 py-2 border-b-2 text-xs md:text-lg ${
                selectedTab === tab.value
                  ? "border-gold text-gold"
                  : "border-transparent text-white hover:text-gold"
              } font-michroma uppercase tracking-wider md:tracking-widest transition-colors duration-300 cursor-pointer`}
              onClick={() => setSelectedTab(tab.value)}
            >
              {tab.label}
            </button>
          ))}
        </div>

     <AnimatePresence mode="popLayout">
  <motion.div 
    ref={fancyboxRef} 
    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 px-4 md:px-6 pb-16"
    initial="hidden"
    animate="visible"
    variants={{
      visible: {
        transition: {
          staggerChildren: 0.1
        }
      }
    }}
  >
    {filteredProjects.map((project, index) => (
      <motion.div
        key={`${selectedTab}-${project.id}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ 
          duration: 0.4,
          delay: index * 0.05 
        }}
        layout
        className="group relative overflow-hidden"
      >
        <Link
          href={project.children[0]}
          data-fancybox={`gallery-${project.id}`}
          data-caption={project.title}
        >
          <div className="relative w-full h-56 sm:h-64 cursor-pointer overflow-hidden">
            <Image
              src={project.imageUrl}
              alt={project.title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover object-center transition-transform duration-500 ease-in-out group-hover:scale-110"
              style={{ objectPosition: "center" }}
            />
            
            {/* Black overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
            <h3 className="absolute bottom-3 md:bottom-7 left-3 md:left-4 text-white text-sm md:text-base tracking-[0.1rem] md:tracking-[0.2rem] font-michroma z-10">
              {project.title}
            </h3>
          </div>
        </Link>

        {project.children.slice(1).map((img, i) => (
          <Link
            key={i}
            href={img}
            data-fancybox={`gallery-${project.id}`}
            data-caption={project.title}
            className="hidden"
          ></Link>
        ))}
      </motion.div>
    ))}
  </motion.div>
</AnimatePresence>

      </div>
    </div>
  );
}
