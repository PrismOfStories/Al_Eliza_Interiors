"use client";

import About from "@/components/homepage/About";
import Hero from "@/components/homepage/Hero";
import Services from "@/components/Sevices";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  Sticky,
  StickyIn,
  ZoomIn,
  MoveOut,
  Fade,
} from "react-scroll-motion";

export default function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <main className="overflow-x-hidden">
      {/* Hero Section with Video Background */}
      <Hero />

      {/* Scroll Animation Section */}
      <div className="relative bg-white min-h-screen">
        <ScrollContainer>
          <ScrollPage>
            <Animator animation={batch(FadeIn(), Sticky(), MoveOut(0, -200))}>
              <div className="flex items-center justify-center min-h-screen">
                <span className="text-3xl font-light tracking-widest uppercase text-brown">
                  Welcome to Al-Eliza Interiors
                </span>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={ZoomInScrollOut}>
              <div className="flex items-center justify-center min-h-screen text-center">
                <span className="text-[42px] font-bold font-bebas-neue leading-tight text-brown">
                  Crafting Spaces <br /> That Inspire & Delight
                </span>
              </div>
            </Animator>
          </ScrollPage>

          <ScrollPage>
            <Animator animation={batch(Fade(), Sticky())}>
              <div className="flex items-center justify-center min-h-screen text-center">
                <span className="text-xl lg:text-2xl font-semibold italic text-brown max-w-xl p-8 block">
                  Experience the art of refined living. <br />
                  Contact us to begin your design journey.
                </span>
              </div>
            </Animator>
          </ScrollPage>
        </ScrollContainer>
      </div>

      <About />

      {/* Services Section */}
      <section className="bg-white py-28 lg:py-40 ">
        <p className="text-right w-full max-w-[90rem] mx-auto text-xl lg:text-8xl font-bebas-neue font-medium text-brown mb-5">
          solutions
        </p>
        <hr className="bg-brown mb-5" />
        <Services />
      </section>

      <div className="h-screen"></div>
    </main>
  );
}
