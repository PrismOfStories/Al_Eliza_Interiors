"use client";

import Card from "@/components/common/CardParallax";
import { useScroll } from "framer-motion";
import { useRef } from "react";

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
