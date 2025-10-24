"use client";

import { FaChevronRight } from "react-icons/fa";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function ArchitectureHero() {
  // Refs for animating elements
  const sectionRef = useRef<HTMLDivElement>(null);
  const establishedRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Animate "Established in 2021"
    if (establishedRef.current) {
      gsap.from(establishedRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: establishedRef.current,
          start: "top 90%",
          once: false,
        },
      });
    }

    // Animate description
    if (descRef.current) {
      gsap.from(descRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: descRef.current,
          start: "top 90%",
          once: false,
        },
      });
    }

    // Animate CTA button
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, x: -90, skewX: 0 },
        {
          opacity: 1,
          x: 0,
          skewX: -20,
          duration: 0.7,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ctaRef.current,
            start: "top 90%",
            once: false,
          },
        }
      );
    }

    // Batch animation for project cards
    const elements = sectionRef.current.querySelectorAll(".project-animate");
    if (elements.length === 0) return;

    gsap.set(elements, { y: 100, opacity: 0 });

    ScrollTrigger.batch(elements, {
      onEnter: (batch) => {
        gsap.to(batch, {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.2,
        });
      },
      onLeaveBack: (batch) => {
        gsap.to(batch, {
          y: 100,
          opacity: 0,
          duration: 0.5,
          ease: "power3.in",
          stagger: 0.1,
        });
      },
      start: "top 80%",
      end: "bottom 20%",
      // markers: true,
    });

    setTimeout(() => ScrollTrigger.refresh(), 100);
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      className="flex h-full items-center justify-center bg-[#fbfbfb] px-4 sm:px-6 lg:px-8"
      aria-label="About Al-Eliza Interiors"
    >
      <div
        className="mx-auto flex h-full min-h-screen w-full max-w-[100rem] flex-col justify-between space-y-8 py-20 lg:py-40"
        ref={sectionRef}
      >
        <header className="w-full">
          <p
            ref={establishedRef}
            className="font-paragraph text-center text-sm font-[500] uppercase tracking-[0.3rem] text-zinc-500 sm:text-base lg:text-lg"
          >
            Established in 2021
          </p>
        </header>

        <main className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-stretch lg:gap-16">
          <article className="font-poppins project-animate">
            <div className="font-paragraph mb-6 text-center text-7xl font-[300]  leading-none  tracking-[0.3rem] text-black sm:text-8xl lg:text-start lg:text-9xl">
              <p>+5</p>
            </div>
            <p className="font-paragraph ml-1 mt-2 text-center text-xs font-[500] uppercase tracking-[0.3rem] text-zinc-500 sm:text-lg lg:text-start">
              Years of experience
            </p>
          </article>

          <div className="project-animate">
            <h2 className="font-paragraph  space-y-4 text-center font-black text-black lg:text-start">
              <span className="block w-full text-center text-3xl tracking-[0.6rem] sm:text-4xl lg:text-6xl xl:text-7xl">
                YOUR DREAMS
              </span>
              <span className="block w-full text-center text-2xl tracking-[0.6rem] sm:text-3xl lg:text-5xl xl:text-6xl">
                OUR EXPERTISE
              </span>
            </h2>
          </div>

          <article className="font-poppins project-animate">
            <div className="font-paragraph mb-6 text-center text-7xl font-[300] leading-none  tracking-[0.3rem] text-black sm:text-8xl lg:text-start lg:text-9xl">
              <p>100+</p>
            </div>
            <p className="font-paragraph mr-1 mt-2 text-center text-xs font-[500] uppercase tracking-[0.3rem] text-zinc-500 sm:text-lg lg:text-start">
              Successful Projects
            </p>
          </article>
        </main>

        <footer className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-stretch lg:gap-0">
          <div>
            <p
              ref={descRef}
              className="project-animate font-paragraph mx-auto max-w-[80vh] text-center text-sm font-[300] leading-[1.8] tracking-[0.21rem] text-zinc-600 sm:text-base sm:leading-[1.8] lg:mx-0 lg:text-start lg:text-lg"
            >
              At Al Eliza Interior Design, we transform residential and
              commercial spaces into refined, functional environments. Our
              designs elevate mood, enhance utility, and add lasting value.
              {/* Collaborating closely, we craft elegant yet practical interiors
              that leave remarkable first impressions. */}
            </p>
          </div>
          <div className="exclusive-text">
            <p className="project-animate lg:text- font-paragraph mx-auto mb-5 max-w-[50ch] text-center text-sm font-[300] leading-[1.8] tracking-[0.21rem] text-zinc-500 sm:text-base sm:leading-[1.5] lg:mx-0 lg:ml-auto lg:text-right">
              Ready to begin?{" "}
              <span className="font-paragraph font-medium italic text-zinc-500 ">
                Contact us
              </span>{" "}
              to bring your vision to life.
            </p>
            <div className="project-animate  flex justify-center lg:justify-end">
              <Link
                ref={ctaRef}
                href="/get-in-touch"
                className="bg-black hover:bg-gold-dark group inline-flex cursor-pointer px-3 py-3 text-[12px] font-medium text-white transition-colors duration-300 sm:px-8 sm:py-4 sm:text-lg"
                role="button"
                aria-label="Tell us about your project - Contact Al-Eliza Interiors"
              >
                <span className="font-paragraph flex items-center gap-2 font-[300] [transform:skewX(20deg)] sm:tracking-[0.20rem]">
                  Tell us about your project
                  <FaChevronRight aria-hidden="true" />
                </span>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
