"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { CheckCircle2, Move } from "lucide-react";

export type TransformationSectionProps = {
  title?: string;
  subtitle?: string;
  beforeLabel?: string;
  afterLabel?: string;
  gainTitle?: string;
  gainItems?: string[];
  beforeImage?: string;
  afterImage?: string;
};

export default function TransformationSection({
  title = "The Transformation You Experience",
  subtitle = "From ordinary to exceptional.",
  beforeLabel = "Cluttered, underutilized, lacking identity",
  afterLabel = "Elegant, spacious, and visually stunning",
  gainTitle = "What You Gain:",
  gainItems = [
    "A living room that reflects your lifestyle and status",
    "Enhanced comfort and functionality",
    "Seamless flow in open-plan living spaces",
    "A space designed for both relaxation and entertaining",
  ],
  beforeImage = "/images/commercial.webp",
  afterImage = "/images/home.webp"
}: TransformationSectionProps = {}) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePointerDown = () => {
    const move = (ev: PointerEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      let x = ev.clientX - rect.left;
      x = Math.max(0, Math.min(x, rect.width));
      setPosition((x / rect.width) * 100);
    };

    const stop = () => {
      window.removeEventListener("pointermove", move as EventListener);
      window.removeEventListener("pointerup", stop);
    };

    window.addEventListener("pointermove", move as EventListener);
    window.addEventListener("pointerup", stop);
  };

  return (
    <section className="bg-background py-20 text-white">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-16 text-center">
          <h2 className="font-outfit mb-4 text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="font-paragraph text-lg text-gray-400">
            {subtitle}
          </p>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-12">
          <div
            ref={containerRef}
            className="relative col-span-1 h-[400px] w-full touch-none select-none overflow-hidden rounded-xl md:col-span-8"
          >
            {/* AFTER IMAGE AND LABEL */}
            <Image
              src={afterImage}
              alt="After"
              fill
              className="object-cover"
            />
            <div className="absolute right-6 top-6 z-0 flex max-w-[220px] flex-col items-end text-right">
              <span className="font-outfit text-3xl font-bold tracking-wider text-white drop-shadow-md">
                AFTER
              </span>
              <p className="font-paragraph mt-2 text-base font-medium text-white drop-shadow-lg">
                {afterLabel}
              </p>
            </div>

            {/* BEFORE IMAGE AND LABEL (clipped) */}
            <div
              className="absolute inset-0 z-10 overflow-hidden border-r-2 border-[#CFA767]"
              style={{ width: `${position}%` }}
            >
              <Image
                src={beforeImage}
                alt="Before"
                fill
                className="object-cover"
              />
              <div className="absolute left-6 top-6 z-20 flex w-[220px] flex-col">
                <span className="font-outfit text-3xl font-bold tracking-wider text-white drop-shadow-md">
                  BEFORE
                </span>
                <p className="font-paragraph mt-2 text-base font-medium text-white drop-shadow-lg">
                  {beforeLabel}
                </p>
              </div>
            </div>

            {/* HANDLE */}
            <div
              className="absolute top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize touch-none"
              style={{ left: `${position}%` }}
              onPointerDown={handlePointerDown}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#CFA767] text-white shadow-xl">
                <Move />
              </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-4">
            <h3 className="mb-6 text-2xl font-bold">{gainTitle}</h3>

            <ul className="space-y-4">
              {gainItems.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-lg bg-white/5 p-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#CFA767] shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
