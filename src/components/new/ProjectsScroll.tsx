"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { useTransform, useScroll, motion } from "framer-motion";

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
        className="flex gap-8 p-8 overflow-hidden relative h-[175vh]"
      >
        <Column images={images.slice(0, 3)} y={y} top="-45%" />
        <Column images={images.slice(3, 6)} y={y2} top="-95%" />
        <Column images={images.slice(6, 9)} y={y3} top="-45%" />
        <Column images={images.slice(9, 12)} y={y4} top="-75%" />
      </div>

      <div className="absolute inset-0 pointer-events-none ">
        {/* Top-right */}
        <div className="absolute top-20 right-20  text-right">
          <p className="text-white text-xl sm:text-7xl font-semibold">
            Showcasing our finest projects
          </p>
          <p className="text-white/90 mt-2 text-sm sm:text-3xl">
            Every detail crafted with care and creativity
          </p>
        </div>

        {/* Bottom-left */}
        <div className="absolute bottom-20 left-20 text-left">
          <p className="text-white text-xl sm:text-7xl font-semibold">
            Transforming spaces beautifully
          </p>
          <p className="text-white/90 mt-2 text-sm sm:text-3xl">
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
  y: any;
  top: string;
}) => {
  return (
    <motion.div
      className="relative flex flex-col gap-8 min-w-[250px] w-1/4"
      style={{ y, top }}
    >
      {images.map((src, i) => (
        <div
          key={i}
          className="relative w-full h-full rounded-[1vw] overflow-hidden"
        >
          <Image src={src} alt="image" fill style={{ objectFit: "cover" }} />
        </div>
      ))}
    </motion.div>
  );
};
