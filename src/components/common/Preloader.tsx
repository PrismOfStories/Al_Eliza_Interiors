"use client";

import { cn } from "@/lib/utils/tailwind";
import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Preloader() {
  const [step, setStep] = useState<"words" | "brand" | "swipe" | "done">(
    "words"
  );

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    setStep("words");
    timers.push(setTimeout(() => setStep("brand"), 1200));
    timers.push(setTimeout(() => setStep("swipe"), 2400));
    timers.push(
      setTimeout(() => {
        setStep("done"); // just mark done
      }, 2700)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <AnimatePresence>
      {step !== "done" && (
        <motion.div
          className={cn(
            "fixed inset-0 z-[9999] flex items-center justify-center",
            step === "swipe" ? "bg-brown/40" : "bg-background"
          )}
          initial={{ y: 0 }}
          animate={step === "swipe" ? { y: "-100%" } : { y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          {step === "words" && (
            <div className="flex flex-col lg:flex-row gap-4 text-5xl text-gold">
              {/* words */}
              <motion.span
                key="Inspired"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0 }}
                className="font-light text-neutral-500"
              >
                Inspired
              </motion.span>
              <motion.span
                key="Creative"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.25 }}
                className="font-bold text-neutral-200"
              >
                Creative
              </motion.span>
              <motion.span
                key="Functional"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2, delay: 0.5 }}
                className="font-light text-neutral-500"
              >
                Functional
              </motion.span>
            </div>
          )}

          {step === "brand" && (
            <motion.div className="relative flex items-center justify-center overflow-hidden h-full w-full">
              <motion.div
                className="absolute inset-0 bg-neutral-800 origin-left h-16 w-64 mx-auto my-auto"
                initial={{ scaleX: 0, x: 0, skewX: -20 }}
                animate={{ scaleX: [0, 1, 1], x: [0, "40%", 0], skewX: -20 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
                exit={{ scaleX: [1, 1, 0] }}
              />
              <motion.h1
                className="relative text-5xl font-extrabold text-white"
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut", delay: 0.5 }}
              >
                Al Eliza
              </motion.h1>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
