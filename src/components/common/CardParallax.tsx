"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

type CardProps = {
  i: number;
  title: string;
  description: string;
  src: string; // matches
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

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
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
        {/* Background Image */}
        <Image
          src={src} // full URL or /images/...
          alt={title}
          fill
          className="absolute inset-0 object-cover rounded-xl"
          priority
        />

        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

        {/* Overlay content */}
        <div className="relative z-10 flex flex-col h-full">
          <h2 className="text-center text-xl sm:text-[clamp(12px,8vw,60px)] font-semibold text-white m-0">
            {title}
          </h2>

          <div className="flex flex-col lg:flex-row h-full mt-8 sm:mt-12 gap-6 sm:gap-12">
            {/* Description */}
            <div className="w-full  relative top-1/10 text-white">
              <p className="text-base sm:text-3xl w-full lg:w-4xl text-center mx-auto first-letter:text-2xl first-letter:font-title">
                {description}
              </p>
              <p className="flex justify-center items-center gap-2 mt-4 w-full lg:w-4xl  mx-auto">
                <Link
                  href={url}
                  target="_blank"
                  className=" text-lg cursor-pointer"
                >
                  See more
                </Link>
                <FaChevronRight />
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
