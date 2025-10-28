"use client";

import Image from "next/image";
import { useRef } from "react";
import { useTransform, motion, MotionValue } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";


gsap.registerPlugin(ScrollTrigger);

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
  progress,
  range,
  targetScale,
}: CardProps) => {
  const container = useRef(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const scale = useTransform(progress, range, [1, targetScale]);

  // GSAP animation for content div (title, description, link)
  useGSAP(() => {
    if (contentRef.current) {
      gsap.set(contentRef.current, { y: 80, opacity: 0 });
      ScrollTrigger.create({
        trigger: contentRef.current,
        start: "top 80%",
        onEnter: () => {
          gsap.to(contentRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(contentRef.current, {
            y: 80,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
          });
        },
      });
    }
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={container}
      className="sticky top-0 flex h-screen items-center justify-center"
    >
      {type === "home" ? (
        <motion.div
          style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
          className="relative flex h-[450px] w-full max-w-[90rem] origin-top flex-col overflow-hidden rounded-xl px-2 py-4 sm:h-[550px] md:p-12 lg:h-[650px]"
        >
          <Image
            src={src}
            alt={title}
            fill
            className="absolute inset-0 rounded-xl object-cover"
            priority
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
          />

          <div className="absolute inset-0 rounded-xl bg-black/40"></div>

          <div
            ref={contentRef}
            className="relative z-10 flex h-full flex-col justify-between sm:p-8"
          >
            <h2 className="font-outfit m-0 w-full uppercase pt-5 text-center text-2xl font-semibold leading-[1.4] text-white sm:text-3xl sm:leading-[1.5] sm:tracking-[0.4rem] md:pt-0 lg:text-5xl ">
              {title}
            </h2>

            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <p className="font-paragraph w-full max-w-3xl text-center text-base leading-[1.8] tracking-[0.15rem] text-white sm:text-left  sm:text-lg sm:leading-[1.5] lg:text-xl">
                {description}
              </p>

              <Link
                href="/expertise"
                className="hover:bg-gold font-poppins group inline-flex
             bg-gradient-to-b from-[#2b2b2b] via-[#1a1a1a] to-[#0d0d0d]
             hover:from-[#3a3a3a] hover:via-[#1f1f1f] hover:to-[#000]
             px-6 py-3 text-sm tracking-widest text-white transition-colors duration-300
             [transform:skewX(-20deg)] sm:px-8 sm:py-4 sm:text-base
             rounded-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.15),0_2px_6px_rgba(0,0,0,0.4)]"
              >
                <span className="font-outfit flex items-center gap-2 font-[400] tracking-[0.20rem] [transform:skewX(20deg)]">
                  See more
                  <span className="sr-only">about {title}</span>
                  <FaChevronRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>

            </div>
          </div>
        </motion.div>
      ) : (
        <motion.div
          style={{ scale, top: `calc(-5vh + ${i * 25}px)` }}
          className="relative flex h-auto w-full max-w-[90rem] origin-top flex-col overflow-hidden rounded-xl shadow-2xl md:h-[650px] md:flex-row lg:h-[700px]"
        >
          {/* Left Side - Image */}
          <div className="relative h-[300px] w-full md:h-full md:w-1/2">
            <Image
              src={src}
              alt={title}
              fill
              className="absolute inset-0 object-cover"
              priority
              crossOrigin="anonymous"
              referrerPolicy="no-referrer"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </div>

          <div className="relative flex h-auto w-full flex-col justify-center bg-[#f4f4f4] p-6 sm:p-8 md:h-full md:w-1/2 md:p-12 lg:p-16">
            <div ref={contentRef}>
              <p className="font-paragraph mb-3 text-xs font-[300] uppercase tracking-[0.3em] text-gray-500 sm:mb-4 sm:text-sm">
                From Concept to Construction
              </p>

              <h2 className="font-paragraph mb-4 text-xl font-semibold uppercase text-black sm:mb-6 sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
                {title}
              </h2>

              <p className="font-paragraph mb-6 max-w-xl text-sm font-[300] leading-relaxed tracking-[0.2rem] text-gray-800 sm:mb-8 sm:text-base lg:text-lg">
                {description}
              </p>

              <Link
                href="/get-in-touch"
                className="hover:bg-gold font-outfit group inline-flex w-fit bg-black px-6 py-3 text-sm tracking-widest text-white transition-all duration-300 [transform:skewX(-20deg)] hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
              >
                <span className="flex items-center gap-2 tracking-[0.2rem] [transform:skewX(20deg)]">
                  Contact us
                  <FaChevronRight className="transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Card;
