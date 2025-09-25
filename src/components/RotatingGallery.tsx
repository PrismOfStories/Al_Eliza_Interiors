"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import Image from "next/image";

gsap.registerPlugin(MotionPathPlugin);

const images = [
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
];

export default function SemiCircleGallery() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = gsap.utils.toArray<HTMLDivElement>(".semi-card");

    const path = [
      { x: -400, y: 200 },
      { x: 0, y: -250 },
      { x: 400, y: 200 },
    ];

    cards.forEach((card, i) => {
      gsap.to(card, {
        duration: 12,
        repeat: -1,
        ease: "none",
        motionPath: {
          path,
          curviness: 1.5,
          autoRotate: false,
          start: i / cards.length,
          end: (i / cards.length) + 1,
        },
        onUpdate: function () {
          const y = gsap.getProperty(card, "y") as number;
          const scale = 0.6 + (-y / 600);
          const z = Math.round(scale * 100);
          gsap.set(card, {
            scale,
            zIndex: z,
          });
        },
      });
    });
  }, []);

  return (
    <section className="bg-black mt-4 flex items-center justify-center min-h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-full max-w-6xl mt-24 h-[600px] flex items-center justify-center"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="semi-card absolute w-48 h-64 shadow-xl overflow-hidden"
          >
            <Image
              src={src}
              alt={`Gallery ${i}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
