"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!containerRef.current || !textRef.current) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
        },
      });

      const fillElements = containerRef.current.querySelectorAll(".fill-text");
      fillElements.forEach((element) => {
        tl.fromTo(
          element,
          { clipPath: "inset(0 100% 0 0)" },
          { clipPath: "inset(0 0% 0 0)", duration: 0.5 },
          0
        );
      });

      tl.to(
        textRef.current,
        {
          scale: 10,
          opacity: 0,
          duration: 0.5,
        },
        0.5
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative" style={{ height: "200vh" }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div
          ref={textRef}
          className="font-outfit text-center text-lg font-bold text-white md:text-8xl"
        >
          <FillText text="WELCOME TO" />
          <FillText text="ALELIZA" />
        </div>
      </div>
    </div>
  );
}

interface FillTextProps {
  text: string;
}

function FillText({ text }: FillTextProps) {
  return (
    <p className="relative mb-6 flex justify-center gap-3 text-5xl md:text-8xl">
      <span className="block text-neutral-800">{text}</span>

      <span
        className="fill-text absolute inset-0 block text-white"
        style={{ clipPath: "inset(0 100% 0 0)" }}
      >
        {text}
      </span>
    </p>
  );
}
