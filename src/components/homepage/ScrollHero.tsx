"use client";

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
} from "react-scroll-motion";

export default function ScrollHero() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <div className="relative  min-h-screen">
      <ScrollContainer>
        <ScrollPage>
          <Animator
            animation={batch(FadeIn(), Sticky(), MoveOut(0, -200))}
            className="w-full flex items-center justify-center min-h-screen flex-wrap text-center"
          >
            <p className="leading-loose text-center text-[clamp(1.5rem,5vw,2.5rem)] font-light uppercase text-gold-dark px-8 font-michroma tracking-widest block">
              Welcome to <br /> Al-Eliza Interiors
            </p>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator
            animation={ZoomInScrollOut}
            className="w-full px-8 flex items-center justify-center min-h-screen text-center"
          >
            <p className="text-center text-[clamp(1.5rem,5vw,2.5rem)] font-bold font-geist-sans uppercase leading-tight text-white block">
              Crafting Spaces <br /> That Inspire & Delight
            </p>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </div>
  );
}
