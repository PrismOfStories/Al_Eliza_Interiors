"use client";

import RevealWrapper from "@/components/common/RevealWrapper";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const Error404 = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".notfound-animate", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: sectionRef }
  );
  return (
    <main className="relative z-10 mb-0 bg-background overflow-hidden">
      <RevealWrapper>
        <section
          ref={sectionRef}
          className="relative flex h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
        >
          <h1 className="notfound-animate font-paragraph text-[120px] leading-none md:text-[280px] lg:text-[400px] text-white">
            404
          </h1>
          <h2 className="notfound-animate mb-8 mt-6 text-[28px] font-normal leading-tight md:mb-12 md:text-[48px] lg:text-[64px] text-gold">
            Page Not Found
          </h2>
          <Link href="/" className="inline-block notfound-animate">
            <div className="text-center text-white hover:text-gold">
              <span>Back to Homepage</span>
            </div>
          </Link>
        </section>
      </RevealWrapper>
    </main>
  );
};

export default Error404;
