"use client";

import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export default function Section() {
  const container = useRef();
  const isMobile = useMediaQuery("(max-width: 768px)");
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const yRange = isMobile ? ["-5%", "5%"] : ["-10%", "10%"];
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <div
      ref={container}
      className="relative flex h-screen items-center justify-center overflow-hidden"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="relative z-10 flex h-full w-full flex-col justify-between px-4 py-8 text-white sm:px-8 sm:py-12 md:px-12 md:py-16 lg:px-28 lg:py-28">
        <p className="w-full self-start text-lg font-light uppercase leading-relaxed sm:text-xl md:w-3/4 md:self-end md:text-2xl lg:w-1/2 lg:text-3xl xl:text-4xl">
          Crafting timeless interiors that reflect your personality, combining
          elegance, functionality, and sustainability.
        </p>
        <p className="text-2xl font-bold uppercase leading-tight sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Elevate Your Space
        </p>
      </div>

      <div className="fixed left-0 top-[-5vh] h-[110vh] w-full sm:top-[-10vh] sm:h-full lg:h-[120vh]">
        <motion.div
          style={{ y: isMobile ? undefined : y }}
          className="relative h-full w-full"
        >
          <Image
            src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp"
            fill
            alt="Interior Design Background"
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30 sm:bg-black/40"></div>
        </motion.div>
      </div>
    </div>
  );
}
