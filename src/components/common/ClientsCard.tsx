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
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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

        {/* Logo Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-12 xl:grid-cols-6"
          role="list"
          aria-label="Client logos"
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="group flex items-center justify-center rounded-lg  p-4 transition-all duration-300"
              role="listitem"
            >
              <figure className="relative h-20 w-full sm:h-28">
                <Image
                  src={logo}
                  alt={`Client ${index + 1} logo`}
                  fill
                  className="object-contain opacity-60 grayscale transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:grayscale-0"
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
