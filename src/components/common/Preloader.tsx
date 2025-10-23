"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="masking-container relative flex items-center justify-center">
            <h1
              className="masked-text text-[clamp(3.7rem,10vw,7rem)] font-extrabold"
              style={{
                color: "transparent",
                backgroundImage: "url('/images/preload.webp')",
                backgroundSize: "200%",
                backgroundPosition: "0 50%",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "animate-background 5s infinite alternate linear",
                fontFamily: "Arial, sans-serif",
              }}
            >
              AL&nbsp;ELIZA
            </h1>
          </div>

          <div className="relative h-2 w-full max-w-xs overflow-hidden">
            <div className="progress-line-left bg-gold-dark absolute right-1/2 top-0 h-full origin-right" />
            <div className="progress-line-right bg-gold-dark absolute left-1/2 top-0 h-full origin-left" />
          </div>

          <style jsx>{`
            @keyframes animate-background {
              0% {
                background-position: 0 50%;
              }
              100% {
                background-position: 100% 50%;
              }
            }

            @keyframes drawLineLeft {
              0% {
                width: 0;
                right: 50%;
              }
              100% {
                width: 50%;
                right: 0;
              }
            }
            @keyframes drawLineRight {
              0% {
                width: 0;
                left: 50%;
              }
              100% {
                width: 50%;
                left: 0;
              }
            }

            .progress-line-left {
              width: 0;
              animation: drawLineLeft 2.5s forwards;
            }
            .progress-line-right {
              width: 0;
              animation: drawLineRight 2.5s forwards;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
