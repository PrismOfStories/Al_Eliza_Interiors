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
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Header fade-in
    if (headerRef.current) {
      gsap.fromTo(
        headerRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        }
      );
    }

    const setupMarquee = (row: HTMLDivElement, direction: "left" | "right") => {
      const totalWidth = row.scrollWidth / 2;
      gsap.fromTo(
        row,
        { x: direction === "left" ? 0 : -totalWidth },
        {
          x: direction === "left" ? -totalWidth : 0,
          duration: 35,
          ease: "none",
          repeat: -1,
        }
      );
    };

    if (row1Ref.current) setupMarquee(row1Ref.current, "left");
    if (row2Ref.current) setupMarquee(row2Ref.current, "right");

    return () => {
      gsap.killTweensOf(row1Ref.current);
      gsap.killTweensOf(row2Ref.current);
    };
  }, []);

  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="py-16 lg:py-24 mt-12 overflow-hidden ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header ref={headerRef} className="mb-12 text-center lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="font-heading text-gold-dark mb-10 w-full text-center text-xl leading-[1.8] tracking-[0.5rem] sm:leading-[1.5] lg:mb-20 lg:text-4xl"
          >
            OUR PRESTIGIOUS CLIENTS
          </motion.h2>
        </header>

        {/* Row 1 */}
        <div className="relative mb-10 overflow-hidden">
          <div ref={row1Ref} className="flex gap-6 sm:gap-10 w-max">
            {duplicatedLogos.map((logo, index) => (
              <div key={`row1-${index}`} className="relative h-16 w-28 sm:h-20 sm:w-36">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 120px"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="relative overflow-hidden">
          <div ref={row2Ref} className="flex gap-6 sm:gap-10 w-max">
            {duplicatedLogos.map((logo, index) => (
              <div key={`row2-${index}`} className="relative h-16 w-28 sm:h-20 sm:w-36">
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 80px, 120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
