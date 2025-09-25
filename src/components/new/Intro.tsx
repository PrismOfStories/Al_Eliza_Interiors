"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Intro() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "150vh"]);

  return (
    <div ref={container} className="h-screen overflow-hidden ">
      <motion.div style={{ y }} className="relative h-full">
        <video
          src="https://res.cloudinary.com/dxhmpdgqj/video/upload/v1758311809/intro-video_gyb10k.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
}
