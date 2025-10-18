"use client";

import React, { useRef } from "react";
import { motion } from "framer-motion";
import { logos } from "@/lib/static-data/about";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ClientsCard() {
  const headerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Header animation
    if (headerRef.current) {
      gsap.set(headerRef.current, { y: 60, opacity: 0 });
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(headerRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(headerRef.current, {
            y: 60,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
          });
        },
      });
    }

    // Grid animation
    if (gridRef.current) {
      gsap.set(gridRef.current, { y: 80, opacity: 0 });
      ScrollTrigger.create({
        trigger: gridRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(gridRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(gridRef.current, {
            y: 80,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
          });
        },
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="py-16 lg:py-24" aria-label="Our prestigious clients">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header ref={headerRef} className="text-center mb-12 lg:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center w-full text-xl lg:text-4xl font-heading tracking-[0.5rem] leading-[1.8] sm:leading-[1.5] text-gold-dark mb-10 lg:mb-20"
          >
            OUR PRESTIGIOUS CLIENTS
          </motion.h2>
        </header>

        {/* Logo Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 lg:gap-12 items-center"
          role="list"
          aria-label="Client logos"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-4  transition-all duration-300 rounded-lg"
              role="listitem"
            >
              <figure className="relative w-full h-20 sm:h-28">
                <Image
                  src={logo}
                  alt={`Client ${index + 1} logo`}
                  fill
                  className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
