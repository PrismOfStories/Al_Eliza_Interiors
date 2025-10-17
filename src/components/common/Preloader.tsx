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
          <div className="masking-container flex items-center justify-center relative">
            <h1
              className="masked-text text-[clamp(3.7rem,10vw,7rem)] font-extrabold"
              style={{
                color: "transparent",
                backgroundImage:
                  "url('https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp')",
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

          {/* Yellow progress line drawing from center to both sides */}
          <div className="relative w-full max-w-xs h-2 overflow-hidden">
            {/* Left half expanding left from center */}
            <div className="progress-line-left absolute top-0 right-1/2 h-full bg-gold-dark origin-right" />
            {/* Right half expanding right from center */}
            <div className="progress-line-right absolute top-0 left-1/2 h-full bg-gold-dark origin-left" />
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

            /* Animate both lines from center outward over 2 seconds */
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

            /* Apply animation to lines */
            .progress-line-left {
              width: 0;
              animation: drawLineLeft 2.5s forwards; /* 2.5 seconds */
            }
            .progress-line-right {
              width: 0;
              animation: drawLineRight 2.5s forwards; /* 2.5 seconds */
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
