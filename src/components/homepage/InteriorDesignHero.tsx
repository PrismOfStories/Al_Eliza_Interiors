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
  }, []);

  return (
    <section
      className="h-full bg-[#fbfbfb] px-4 sm:px-6 lg:px-8 flex items-center justify-center"
      aria-label="About Al-Eliza Interiors"
    >
      <div
        className="w-full max-w-[100rem] min-h-screen mx-auto h-full flex flex-col justify-between space-y-8 py-20 lg:py-40"
        ref={sectionRef}
      >
        <header className="w-full">
          <p
            ref={establishedRef}
            className="text-center text-sm sm:text-base lg:text-lg uppercase text-gold-dark font-paragraph font-[500] tracking-[0.3rem]"
          >
            Established in 2021
          </p>
        </header>

        <main className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-16">
          <article className="font-poppins project-animate">
            <div className="text-7xl sm:text-8xl lg:text-9xl mb-6 leading-none  text-black  text-center lg:text-start font-paragraph font-[300] tracking-[0.3rem]">
              <p>+4</p>
            </div>
            <p className="text-xs sm:text-lg font-paragraph font-[500] tracking-[0.3rem] uppercase text-gold-dark mt-2 ml-1 text-center lg:text-start">
              Years of experience
            </p>
          </article>

          <div className="project-animate">
            <h2 className="font-black  text-black space-y-4 font-heading text-center lg:text-start">
              <span className="block w-full text-center text-3xl sm:text-4xl lg:text-6xl xl:text-7xl tracking-[0.6rem]">
                YOUR DREAMS
              </span>
              <span className="block w-full text-center text-2xl sm:text-3xl lg:text-5xl xl:text-6xl tracking-[0.6rem]">
                OUR EXPERTISE
              </span>
            </h2>
          </div>

          <article className="font-poppins project-animate">
            <div className="text-7xl sm:text-8xl lg:text-9xl mb-6 leading-none text-black  text-center lg:text-start font-paragraph font-[300] tracking-[0.3rem]">
              <p>10+</p>
            </div>
            <p className="text-xs sm:text-lg font-paragraph font-[500] tracking-[0.3rem] uppercase text-gold-dark mt-2 mr-1 text-center lg:text-start">
              Successful Projects
            </p>
          </article>
        </main>

        <footer className="flex justify-between flex-col lg:flex-row items-center lg:items-stretch gap-10 lg:gap-0">
          <div>
            <p
              ref={descRef}
              className="project-animate text-sm sm:text-base lg:text-lg text-black max-w-[80vh] mx-auto lg:mx-0 text-center lg:text-start font-paragraph font-[300] tracking-[0.21rem] leading-[1.8] sm:leading-[1.8]"
            >
              At Al Eliza Interior Design, we transform residential and
              commercial spaces into refined, functional environments. Our
              designs elevate mood, enhance utility, and add lasting value.
              Collaborating closely, we craft elegant yet practical interiors
              that leave remarkable first impressions.
            </p>
          </div>
          <div className="exclusive-text">
            <p className="project-animate text-sm sm:text-base lg:text- text-black max-w-[50ch] mx-auto lg:mx-0 lg:ml-auto mb-5 text-center lg:text-right font-paragraph font-[300] tracking-[0.21rem] leading-[1.8] sm:leading-[1.5]">
              Ready to begin?{" "}
              <span className="text-brown italic font-medium font-paragraph ">
                Contact us
              </span>{" "}
              to bring your vision to life.
            </p>
            <div className="project-animate flex justify-center lg:justify-end">
              <Link
                ref={ctaRef}
                href="/get-in-touch"
                className="group cursor-pointer inline-flex bg-gold hover:bg-gold-dark text-white px-3 sm:px-8 py-3 sm:py-4 text-[12px] sm:text-lg font-medium transition-colors duration-300"
                role="button"
                aria-label="Tell us about your project - Contact Al-Eliza Interiors"
              >
                <span className="flex items-center font-heading font-[300] sm:tracking-[0.20rem] gap-2 [transform:skewX(20deg)]">
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
