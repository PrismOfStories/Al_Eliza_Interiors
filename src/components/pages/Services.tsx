"use client";

import React, { useRef } from "react";
import { services as servicePage } from "@/lib/static-data/home";
import ServiceCard from "../common/ServiceCard";
import RevealWrapper from "../common/RevealWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ServicesCombined() {
  const heroHeaderRef = useRef<HTMLDivElement | null>(null);
  const aboutSectionRef = useRef<HTMLDivElement | null>(null);
  const ctaSectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".expertise-animate", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: heroHeaderRef.current,
          start: "top 80%",
        },
      });
      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: heroHeaderRef }
  );

  useGSAP(
    () => {
      gsap.from(
        aboutSectionRef.current?.querySelectorAll(".content-animate") || [],
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: aboutSectionRef.current,
            start: "top 80%",
          },
        }
      );
      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: aboutSectionRef }
  );

  useGSAP(
    () => {
      gsap.from(
        ctaSectionRef.current?.querySelectorAll(".contentOne-animate") || [],
        {
          y: 100,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: ctaSectionRef.current,
            start: "top 80%",
          },
        }
      );
      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: ctaSectionRef }
  );

  return (
    <main className="bg-background mb-8 text-white">
      {/* Hero Section */}

      <section
        className="flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
        aria-label="Our services introduction"
      >
        <RevealWrapper>
          <header ref={heroHeaderRef} className="text-center">
            <p className="expertise-animate font-paragraph text-gold mb-3 pt-10 text-sm font-[300] uppercase tracking-[0.3rem] md:text-xl md:tracking-[0.5rem]">
              OUR EXPERTISE
            </p>
            <h1 className="expertise-animate font-outfit font-bold mb-6 text-center text-[clamp(2rem,6vw,5rem)] leading-[1.3] tracking-[0.2rem] md:tracking-[0.1rem]">
              DESIGN SOLUTIONS
            </h1>

            <p className="expertise-animate font-paragraph text-silver mx-auto mb-12 max-w-2xl text-base font-[300] tracking-[0.2rem] md:text-lg">
              &ldquo;Designing spaces that tell your story with elegance,
              balance, and soul.&rdquo;
            </p>
          </header>{" "}
        </RevealWrapper>
      </section>

      {/* Services Cards Section */}
      <section aria-label="Our design services">
        <ServiceCard type="page" projects={servicePage} />
      </section>

      {/* About Our Services Section */}
      <section
        ref={aboutSectionRef}
        className="mx-auto mt-28 max-w-6xl px-6  lg:py-20"
        aria-label="About our services"
      >
        <div className="mb-18 grid grid-cols-1 items-start gap-12 md:grid-cols-3">
          <div className="content-animate col-span-1 flex items-center gap-2">
            <span className="bg-gold h-3 w-3" aria-hidden="true"></span>
            <span className="font-head text-sm font-semibold uppercase tracking-[0.4rem]  text-white">
              Our Services
            </span>
          </div>

          <div className="col-span-2 text-left">
            <h2 className="content-animate font-paragraph text-silver text-xl font-[200] leading-[1.8] tracking-[0.2rem] sm:leading-[1.5] sm:tracking-[0.1rem] md:text-3xl">
              At Al Eliza Services, we deliver solutions with{" "}
              <span className="font-[200]">dedication, skill and care</span>{" "}
              <span className="font-[200] text-white">
                providing services that support, empower, and match your unique
                way of living.
              </span>
            </h2>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        ref={ctaSectionRef}
        className="bg-background px-4 py-8 text-center"
        aria-label="Start your project with us"
      >
        <header>
          <p className="contentOne-animate font-paragraph text-silver mb-4 mt-10 text-sm font-[400] tracking-[0.2rem]">
            START BUILDING
          </p>
          <h2 className="contentOne-animate font-outfit text-white mb-8 text-6xl font-extrabold leading-none md:text-8xl">
            LET&lsquo;S DESIGN
          </h2>
          <p className="contentOne-animate font-paragraph text-silver mx-auto mb-12 max-w-2xl text-base font-[300] tracking-[0.15rem] md:text-lg">
            Ready to bring your vision to life? Whether it&apos;s a home, a
            workspace, or a public space, we&apos;re here to design environments
            that inspire, function, and endure. Let&apos;s start your project
            together.
          </p>
        </header>
      </section>

      {/* <RotatingGallery /> */}
    </main>
  );
}
