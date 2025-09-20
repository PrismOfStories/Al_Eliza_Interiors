"use client";

import { useEffect, useRef, useState } from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

export default function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.intersectionRatio >= 0.5);
      },
      { threshold: 0.5 }
    );

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);
  return (
    <div>
      <div className="relative min-h-screen w-full overflow-hidden">
        <video
          className="fixed inset-0 h-full w-full object-cover -z-10"
          src="https://res.cloudinary.com/dxhmpdgqj/video/upload/v1758311809/intro-video_gyb10k.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      <ScrollContainer>
        {/* Intro */}
        <ScrollPage>
          <Animator animation={batch(FadeIn(), Sticky(), MoveOut(0, -200))}>
            <span className="text-3xl font-light tracking-widest uppercase text-brown">
              Welcome to Al-Eliza Interiors
            </span>
          </Animator>
        </ScrollPage>

        {/* Tagline */}
        <ScrollPage>
          <Animator animation={ZoomInScrollOut}>
            <span className="text-[42px] font-bold font-bebas-neue text-center tracking-wide leading-tight text-brown">
              Crafting Spaces <br /> That Inspire & Delight
            </span>
          </Animator>
        </ScrollPage>

        {/* Highlight Features */}
        {/* <ScrollPage>
          <div className="flex flex-col justify-center items-center h-full gap-12 text-6xl text-brown font-medium font-bebas-neue max-w-4xl mx-auto">
            <Animator animation={MoveIn(-1000, 0)}>
              Innovative Design Solutions
            </Animator>
            <Animator animation={MoveIn(1000, 0)}>
              Seamless Project Management
            </Animator>
            <span>Personalized for You</span>
            <Animator animation={MoveOut(1000, 0)}>Elevate Your Home</Animator>
            <Animator animation={MoveOut(-1000, 0)}>
              Transform Your Lifestyle
            </Animator>
          </div>
        </ScrollPage> */}

        {/* Call to Action / Footer */}
        <ScrollPage>
          <Animator animation={batch(Fade(), Sticky())}>
            <span className="text-[28px] font-semibold italic text-brown text-center max-w-xl mx-auto p-8 block">
              Experience the art of refined living. <br />
              Contact us to begin your design journey.
            </span>
          </Animator>
        </ScrollPage>
      </ScrollContainer>

      <div
        ref={containerRef}
        className="relative h-screen flex justify-center items-center bg-white z-20 rounded-3xl px-10"
      >
        <ul className="absolute top-1/4 left-10 text-4xl font-bebas-neue space-y-6 text-brown select-none pointer-events-none">
          <li>Elevate</li>
          <li>Inspire</li>
          <li>Create</li>
        </ul>

        {isVisible && (
          <ScrollContainer>
            <ScrollPage>
              <Animator animation={batch(ZoomInScrollOut, Sticky())}>
                <p className="text-[200px] leading-[160px] font-bebas-neue text-center text-brown tracking-wide">
                  Curate <br />
                  Spaces
                </p>
              </Animator>
            </ScrollPage>
          </ScrollContainer>
        )}

        <p className="absolute bottom-10 right-10 text-4xl font-unbounded text-brown italic select-none">
          interior design
        </p>
      </div>
    </div>
  );
}
