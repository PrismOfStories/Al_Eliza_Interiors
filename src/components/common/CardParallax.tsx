"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTransform, motion, MotionValue } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string;
  url: string;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
};

const Card = ({
  i,
  title,
  description,
  src,
  url,
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div
        style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
        className="relative flex flex-col rounded-xl p-8 sm:p-12 w-full max-w-[90rem] h-[450px] sm:h-[550px] lg:h-[650px] origin-top overflow-hidden"
      >
        <Image
          src={src}
          alt={title}
          fill
          className="absolute inset-0 object-cover rounded-xl"
          priority
        />

        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

        <div className="relative z-10 flex flex-col h-full justify-between p-4 sm:p-8">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-center w-full font-michroma text-2xl sm:text-3xl lg:text-5xl font-semibold text-white m-0 tracking-widest"
          >
            {title}
          </motion.h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <p className="text-center sm:text-left text-base sm:text-lg lg:text-xl leading-relaxed w-full max-w-3xl mx-auto text-white font-geist-sans">
              {description}
            </p>

            <Link
              href={url}
              target="_blank"
              className="group inline-flex bg-gold hover:bg-gold-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-michroma tracking-widest transition-colors duration-300 [transform:skewX(-20deg)]"
            >
              <span className="flex items-center gap-2 [transform:skewX(20deg)]">
                See more
                <FaChevronRight className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
