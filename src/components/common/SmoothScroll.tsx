// components/SmoothScroll.js
"use client"; // Important for Next.js App Router

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const lenis = new Lenis({
      // optional settings:
      // smoothWheel: true,
      // smoothTouch: false,
      // duration: 1.2,
      // easing: (x) => x,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null; // This component only initializes Lenis
}
