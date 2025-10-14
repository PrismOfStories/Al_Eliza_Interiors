"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

const images = [
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
];

export default function ProjectsScroll() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });
  const isMobile = useMediaQuery("(max-width: 768px)");

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });

  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () =>
      setDimension({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <main className="relative bg-background">
      <div
        ref={gallery}
        className="flex gap-2 md:gap-8 p-4 md:p-8 overflow-hidden relative h-[175vh]"
      >
        {isMobile ? (
          <>
            <Column images={images.slice(0, 6)} y={y} top="-45%" />
            <Column images={images.slice(6, 12)} y={y2} top="-95%" />
          </>
        ) : (
          <>
            <Column images={images.slice(0, 3)} y={y} top="-45%" />
            <Column images={images.slice(3, 6)} y={y2} top="-95%" />
            <Column images={images.slice(6, 9)} y={y3} top="-45%" />
            <Column images={images.slice(9, 12)} y={y4} top="-75%" />
          </>
        )}
      </div>

      <div className="absolute inset-0  pointer-events-none">
        <div className="absolute top-20 right-20 text-right">
          <p className="text-gold-dark text-xl sm:text-5xl uppercase font-heading tracking-[0.4rem] ">
            Showcasing our finest projects
          </p>
          <p className="text-white/90 mt-2 text-sm sm:text-3xl font-paragraph font-[300] tracking-[0.25rem]">
            Every detail crafted with care and creativity
          </p>
        </div>
        <div className="absolute bottom-20 left-20 text-left">
          <p className="text-gold-dark text-xl sm:text-5xl uppercase font-heading tracking-[0.4rem]">
            Transforming spaces beautifully
          </p>
          <p className="text-white/90 mt-2 text-sm sm:text-3xl font-paragraph font-[300] tracking-[0.25rem]">
            Bringing your vision to life with elegance
          </p>
        </div>
      </div>
    </main>
  );
}

const Column = ({
  images,
  y,
  top,
}: {
  images: string[];
  y: MotionValue<number>;
  top: string;
}) => {
  return (
    <motion.div
      className="relative flex flex-col gap-4 md:gap-8 min-w-[150px] md:min-w-[250px] w-1/2 md:w-1/4"
      style={{ y, top }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="group relative w-full h-full rounded-[1vw] overflow-hidden cursor-pointer"
        >
          <Image src={src} alt="image" fill style={{ objectFit: "cover" }} />
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />
        </div>
      ))}
    </motion.div>
  );
};
