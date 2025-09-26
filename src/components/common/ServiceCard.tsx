"use client";

import Card from "@/components/common/CardParallax";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

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
    <section ref={container} className="relative mt-[10vh] px-6">
      {" "}
      <motion.p
        initial={{ opacity: 0, x: -300 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-center lg:text-right w-full lg:max-w-[90rem] mx-auto text-7xl lg:text-9xl font-bebas-neue font-medium text-[#878787] mb-10 lg:mb-20"
      >
        Expertise
      </motion.p>
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
