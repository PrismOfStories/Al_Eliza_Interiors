"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTransform, motion, MotionValue } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

type CardProps = {
  type: "home" | "page";
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
  type = "home",
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
      {type === "home" ? (
        <motion.div
          style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
          className="relative flex flex-col rounded-xl px-2 py-4 md:p-12 w-full max-w-[90rem] h-[450px] sm:h-[550px] lg:h-[650px] origin-top overflow-hidden"
        >
          <Image
            src={src}
            alt={title}
            fill
            className="absolute inset-0 object-cover rounded-xl"
            priority
          />

          <div className="absolute inset-0 bg-black/40 rounded-xl"></div>

          <div className="relative z-10 flex flex-col h-full justify-between sm:p-8">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
              className="text-center w-full font-heading sm:tracking-[0.4rem] leading-[1.4] pt-5 md:pt-0 sm:leading-[1.5] text-2xl sm:text-3xl lg:text-5xl font-semibold text-white m-0 "
            >
              {title}
            </motion.h2>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
              <p className="text-center sm:text-left text-base sm:text-lg lg:text-xl leading-[1.8] sm:leading-[1.5] w-full max-w-3xl  text-white font-paragraph tracking-[0.21rem]">
                {description}
              </p>

              <Link
                href={url}
                target="_blank"
                className="group inline-flex bg-gold hover:bg-gold-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-poppins tracking-widest transition-colors duration-300 [transform:skewX(-20deg)]"
              >
                <span className="flex font-heading font-[300] tracking-[0.20rem] items-center gap-2 [transform:skewX(20deg)]">
                  See more
                  <FaChevronRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
          className="relative flex flex-col md:flex-row w-full max-w-[90rem] rounded-xl h-auto md:h-[650px] lg:h-[700px] origin-top overflow-hidden shadow-2xl"
        >
          {/* Left Side - Image */}
          <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
            <Image
              src={src}
              alt={title}
              fill
              className="absolute inset-0 object-cover"
              priority
            />
          </div>

          <div className="relative w-full md:w-1/2 h-auto md:h-full bg-[#f4f4f4] flex flex-col justify-center p-6 sm:p-8 md:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-gray-500 mb-3 sm:mb-4 font-paragraph font-[300]">
                From Concept to Construction
              </p>

              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-gold mb-4 sm:mb-6 font-paragraph font-semibold uppercase">
                {title}
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-gray-800 mb-6 sm:mb-8 font-paragraph tracking-[0.2rem] font-[300] max-w-xl">
                {description}
              </p>

              <Link
                href={url}
                className="group inline-flex bg-gold hover:bg-gold-dark text-white px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base font-deltha tracking-widest transition-all duration-300 [transform:skewX(-20deg)] hover:shadow-lg w-fit"
              >
                <span className="flex items-center gap-2 [transform:skewX(20deg)] tracking-[0.2rem]">
                  Contact us
                  <FaChevronRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
