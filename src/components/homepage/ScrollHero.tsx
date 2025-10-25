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
    <section
      className="relative min-h-screen"
      aria-label="Welcome introduction"
    >
      <ScrollContainer>
        <ScrollPage>
          <Animator
            animation={batch(FadeIn(), Sticky(), MoveOut(0, -200))}
            className="flex min-h-screen w-full flex-wrap items-center justify-center text-center"
          >
            <h2 className="font-outfit block px-8 text-center text-[clamp(1.5rem,5vw,2.5rem)] font-light uppercase leading-[1.8] tracking-[0.2rem] text-zinc-500 sm:leading-[1.5] ">
              Welcome to <br /> Al Eliza Interiors
            </h2>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator
            animation={ZoomInScrollOut}
            className="flex min-h-screen w-full items-center justify-center px-8 text-center"
          >
            <h3 className="font-paragraph block text-center text-[clamp(1.5rem,5vw,2.5rem)] font-[200] uppercase leading-tight tracking-[0.2rem] text-zinc-500">
              Crafting Spaces <br /> That Inspire & Delight
            </h3>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </section>
  );
}
