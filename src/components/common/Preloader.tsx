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
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="masking-container flex items-center justify-center">
            <h1
              className="masked-text text-[clamp(6rem,10vw,9rem)] font-extrabold"
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
            <style jsx>{`
              @keyframes animate-background {
                0% {
                  background-position: 0 50%;
                }
                100% {
                  background-position: 100% 50%;
                }
              }
            `}</style>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
