"use client";

import Card from "@/components/common/CardParallax";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

interface ServiceProps {
  projects: {
    title: string;
    description: string;
    src: string;
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
    <section ref={container} className="relative mt-[10vh] px-4">
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
        className="text-center lg:text-right w-full lg:max-w-[90rem] font-michroma tracking-widest mx-auto text-2xl lg:text-6xl uppercase font-medium text-gold-dark mb-10 lg:mb-20"
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
