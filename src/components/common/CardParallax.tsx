"use client";

import Image from "next/image";
import { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

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
          <h2 className="text-center text-xl sm:text-2xl font-semibold text-white m-0">
            {title}
          </h2>

          <div className="flex flex-col lg:flex-row h-full mt-8 sm:mt-12 gap-6 sm:gap-12">
            {/* Description */}
            <div className="w-full lg:w-2/5 relative top-1/10 text-white">
              <p className="text-base sm:text-lg first-letter:text-2xl first-letter:font-title">
                {description}
              </p>
              <span className="flex items-center gap-2 mt-4">
                <a
                  href={url}
                  target="_blank"
                  className="text-xs sm:text-sm underline cursor-pointer"
                >
                  See more
                </a>
                {/* SVG arrow */}
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>

            {/* Spacer for image if needed */}
            <div className="hidden lg:block lg:w-3/5"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
