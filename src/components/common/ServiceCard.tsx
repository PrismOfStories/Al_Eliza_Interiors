"use client";

import Card from "@/components/common/CardParallax";
import { useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

interface ServiceProps {
  type?: "home" | "page";
  title?: string;
  projects: {
    title: string;
    description: string;
    src: string;
    url: string;
    color: string;
  }[];
}

export default function ServiceCard({
  type = "home",
  title,
  projects,
}: ServiceProps) {
  const container = useRef<HTMLElement>(null);
  const headingRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  const isInView = useInView(headingRef, {
    once: false,
    margin: "0% 0px -40% 0px",
  });

  return (
    <section ref={container} className="relative mt-[10vh] px-4">
      {title && (
        <motion.p
          ref={headingRef}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: false, margin: "0px 0px -40% 0px" }}
          className="font-heading text-gold-dark mx-auto mb-10 w-full text-center text-2xl font-medium uppercase leading-[1.8] tracking-[0.4rem] sm:leading-[1.5] lg:mb-20 lg:max-w-[90rem] lg:text-right lg:text-6xl"
        >
          {title}
        </motion.p>
      )}
      {projects.map((project, i) => {
        const targetScale = 1 - (projects.length - i) * 0.05;

        return (
          <Card
            type={type}
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
