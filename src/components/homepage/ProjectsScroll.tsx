"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "lenis";
import { useTransform, useScroll, motion, MotionValue } from "framer-motion";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

const images = [
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761577706/RESIDENTIAL_AND_COMMERCIAL_DESIGNS_votvjt.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375815/ef98fe25-cd43-4499-ab4e-a24dad202a42_zusqtb.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761585263/HUDDLE_ROOM_2_ocuqvb.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761585250/CABIN_LOBBY_2_pst768.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375810/71a13c6c-a127-4918-a0cf-7d9c946b335f_l33i6d.jpg",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375808/6cf66ea9-936e-4598-99f0-cd34b85e87c9_wiwleg.jpg",
   "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761582945/Gemini_Generated_Image_n33oorn33oorn33o_2_ymdiw4.png",
   "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375811/a022a7f7-c63b-4659-9964-c49762a1e48c_awcmul.jpg",
   "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375896/IMG_0479_2_lwzj10.jpg",
   "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761756706/1_6_axmuei.jpg",
   "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760375987/C6F902C5-CD8D-4B96-A477-DE927D17587A_lkhbff.jpg",
   "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761756696/3_4_jccfm4.jpg",
   "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761933078/MORFIN1_page-0001_esvs77.jpg"
];
// 

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
