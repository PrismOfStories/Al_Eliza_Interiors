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
  const headerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      gsap.from(".expertise-animate", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: headerRef.current,
          start: "top 80%",
        },
      });
    },
    { scope: headerRef }
  );

  return (
    <main className="bg-background text-white mb-8">
      {/* Hero Section */}

      <section
        className="flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden"
        aria-label="Our services introduction"
      >
        <RevealWrapper>
          <header ref={headerRef} className="text-center">
            <p className="expertise-animate text-sm md:text-xl pt-10 tracking-[0.3rem] md:tracking-[0.5rem] mb-3 uppercase font-paragraph font-[300] text-gold">
              OUR EXPERTISE
            </p>
            <h1 className="expertise-animate text-[clamp(2rem,6vw,5rem)] font-heading text-center mb-6 tracking-[0.2rem] md:tracking-[0.8rem] leading-[1.3] ">
              DESIGN SOLUTIONS
            </h1>
            <p className="expertise-animate font-paragraph tracking-[0.2rem] font-[300] text-base md:text-lg text-silver max-w-2xl mx-auto mb-12">
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
        className="max-w-6xl mx-auto mt-28 px-6  lg:py-20"
        aria-label="About our services"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-18">
          <div className="col-span-1 flex items-center gap-2">
            <span className="w-3 h-3 bg-gold" aria-hidden="true"></span>
            <span className="font-heading tracking-[0.4rem] uppercase text-sm font-semibold  text-white">
              Our Services
            </span>
          </div>

          <div className="col-span-2 text-left">
            <h2 className="leading-[1.8] sm:leading-[1.5] font-paragraph font-[200] tracking-[0.2rem] sm:tracking-[0.5rem] text-xl md:text-3xl text-silver">
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
        className="bg-background text-center py-8 px-4"
        aria-label="Start your project with us"
      >
        <header>
          <p className="text-sm font-paragraph font-[400] tracking-[0.2rem] text-silver mt-10 mb-4">
            START BUILDING
          </p>
          <h2 className="font-heading text-6xl md:text-8xl font-extrabold text-gold mb-8 leading-none">
            LET&lsquo;S DESIGN
          </h2>
          <p className="text-base font-paragraph font-[300] tracking-[0.15rem] md:text-lg text-silver max-w-2xl mx-auto mb-12">
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
