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
  //   Fade,
} from "react-scroll-motion";

export default function ScrollHero() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <div className="relative bg-black min-h-screen">
      <ScrollContainer>
        <ScrollPage>
          <Animator
            animation={batch(FadeIn(), Sticky(), MoveOut(0, -200))}
            className="w-full flex items-center justify-center min-h-screen flex-wrap text-center"
          >
            <p className="text-xl flex text-center flex-wrap lg:text-3xl font-light tracking-widest uppercase text-white px-8">
              Welcome to Al-Eliza Interiors
            </p>
          </Animator>
        </ScrollPage>

        <ScrollPage>
          <Animator
            animation={ZoomInScrollOut}
            className="w-full px-8 flex items-center justify-center min-h-screen text-center"
          >
            <p className="text-5xl flex text-center flex-wrap font-bold font-bebas-neue leading-tight text-white">
              Crafting Spaces <br /> That Inspire & Delight
            </p>
          </Animator>
        </ScrollPage>
        {/* 
        <ScrollPage>
          <Animator
            animation={batch(Fade(), Sticky())}
            className="flex items-center justify-center min-h-screen text-center w-full "
          >
            <p className="text-xl lg:text-2xl font-semibold italic text-white max-w-xl px-8 block">
              Experience the art of refined living. <br />
              Contact us to begin your design journey.
            </p>
          </Animator>
        </ScrollPage> */}
      </ScrollContainer>
    </div>
  );
}
