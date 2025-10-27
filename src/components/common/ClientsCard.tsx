"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { logos } from "@/lib/static-data/about";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ClientsCard() {
  const headerRef = useRef<HTMLDivElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const row = rowRef.current;
    const header = headerRef.current;

    // Header animation
    if (header) {
      gsap.fromTo(
        header,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: header,
            start: "top 85%",
          },
        }
      );
    }

    // Continuous marquee animation
    if (row) {
      const totalWidth = row.scrollWidth / 2;
      gsap.fromTo(
        row,
        { x: 0 },
        {
          x: -totalWidth,
          duration: 60,
          ease: "none",
          repeat: -1,
        }
      );
    }

    return () => {
      if (row) gsap.killTweensOf(row);
    };
  }, []);

  // Duplicate logos so animation loops smoothly
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="mt-12 overflow-hidden py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header ref={headerRef} className="mb-12 text-center lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-outfit mb-10 w-full text-center text-xl leading-[1.8] tracking-[0.3rem] text-zinc-500 sm:leading-[1.5] lg:mb-20 lg:text-4xl"
          >
            OUR PRESTIGIOUS CLIENTS
          </motion.h2>
        </header>

        {/* Moving Row */}
        <div className="relative overflow-hidden">
          <div ref={rowRef} className="flex w-max gap-6 sm:gap-10">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`logo-${index}`}
                className="relative h-16 w-28 sm:h-20 sm:w-36"
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 120px"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
