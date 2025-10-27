"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

const images = [
  // "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761581917/HUDDLE_ROOM_2_v4tcco.jpg",
  // "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761582945/Gemini_Generated_Image_n33oorn33oorn33o_2_ymdiw4.png",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761577706/RESIDENTIAL_AND_COMMERCIAL_DESIGNS_votvjt.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375815/ef98fe25-cd43-4499-ab4e-a24dad202a42_zusqtb.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375814/d492e54e-b6b1-4d93-9b63-36f05ece262d_u5zyxl.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375813/ca4c19e7-033e-4075-9d2e-e476d52bfcc1_c3yzhj.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760456206/fa13228c-c148-4355-937e-164ab472023e_wb5a7d.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760456206/ccf5dab0-7149-4caa-92fa-4cdcb4de9ab6_rgs8qo.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761585263/HUDDLE_ROOM_2_ocuqvb.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760456203/bc487908-e126-4148-b924-78986115f4f5_rxvqz8.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761577706/RESIDENTIAL_AND_COMMERCIAL_DESIGNS_votvjt.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760456202/a2d62774-9f89-4328-93f0-f6fd1fe37065_zgbpyf.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375810/71b6b0a0-c1ff-49f5-bbbf-e694f6dca606_emtygn.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375810/71a13c6c-a127-4918-a0cf-7d9c946b335f_l33i6d.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375808/6cf66ea9-936e-4598-99f0-cd34b85e87c9_wiwleg.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375807/59b4f14f-8c35-4b44-acec-169980d93575_lba5ek.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760456206/fa13228c-c148-4355-937e-164ab472023e_wb5a7d.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761581917/HUDDLE_ROOM_2_v4tcco.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761582945/Gemini_Generated_Image_n33oorn33oorn33o_2_ymdiw4.png"
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
    <section
      className="bg-background relative"
      aria-label="Project portfolio gallery"
    >
      <div
        ref={gallery}
        className="relative flex h-[175vh] gap-2 overflow-hidden sm:gap-4"
        role="img"
        aria-label="Scrolling portfolio gallery showcasing Al-Eliza Interiors projects"
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

      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute top-20 px-6 sm:right-20 sm:text-right">
          <h3 className="font-outfit text-base uppercase tracking-[0.25rem] text-white sm:text-5xl">
            Showcasing our finest projects
          </h3>
          <p className="font-paragraph mt-4 text-sm font-[300] tracking-[0.15rem] text-white/90 sm:text-3xl">
            Every detail crafted with care and creativity
          </p>
        </div>
        <div className="absolute bottom-20 px-6 sm:left-20 sm:text-left">
          <h4 className="font-outfit text-base uppercase tracking-[0.25rem] text-white sm:text-5xl">
            Transforming spaces beautifully
          </h4>
          <p className="font-paragraph mt-2 text-sm font-[300] tracking-[0.15rem] text-white/90 sm:text-3xl">
            Bringing your vision to life with elegance
          </p>
        </div>
      </div>
    </section>
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
      className="relative flex w-1/2 min-w-[150px] flex-col gap-2 sm:gap-4 md:w-1/4 md:min-w-[250px]"
      style={{ y, top }}
    >
      {images.map((src, i) => (
        <figure
          key={i}
          className="group relative h-full w-full cursor-pointer overflow-hidden rounded"
        >
          <Image
            src={src}
            alt={`Al-Eliza Interiors project showcase ${i + 1}`}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 80vw, (max-width: 1200px) 40vw, 25vw"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0" />
        </figure>
      ))}
    </motion.div>
  );
};
