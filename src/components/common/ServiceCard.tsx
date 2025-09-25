"use client";

import Card from "@/components/common/CardParallax";
import { useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface ServiceProps {
  projects: {
    title: string;
    description: string;
    src: string; // <-- change here
    url: string;
    color: string;
  }[];
}

export default function ServiceCard({ projects }: ServiceProps) {
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <section ref={container} className="relative mt-[50vh]">
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i / projects.length, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </section>
  );
}
