"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

const images = [
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
];

export default function SemiCircleFan() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const getCardProps = (angle: number, radius: number) => {
    const rad = (angle * Math.PI) / 180;
    const x = radius * Math.sin(rad);
    const y = radius * Math.cos(rad);

    return {
      x,
      y: -y,
      rotate: angle,
      scale: 1,       // No scaling for outer cards
      opacity: 1,     // Always visible
    };
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const total = cards.length;
    const radius = 350;

    const totalAngle = 180;
    const startAngle = -totalAngle / 2;
    const endAngle = totalAngle / 2;
    const angleStep = total > 1 ? (endAngle - startAngle) / (total - 1) : 0;

    let angles = cards.map((_, i) => startAngle + i * angleStep);

    const positionCards = () => {
      cards.forEach((card, i) => {
        const props = getCardProps(angles[i], radius);
        gsap.set(card, {
          xPercent: -50,
          yPercent: 0,
          transformOrigin: "50% 100%",
          x: props.x,
          y: props.y,
          rotation: props.rotate,
          scale: props.scale,
          opacity: props.opacity,
        });
      });
    };

    const animateCards = () => {
      // Shift each angle rightward
      angles = angles.map((angle) => {
        let next = angle + angleStep;

        // Wrap around if it goes beyond 90 degrees
        if (next > endAngle) {
          next = startAngle + (next - endAngle - angleStep);
        }

        return next;
      });

      cards.forEach((card, i) => {
        const props = getCardProps(angles[i], radius);
        gsap.to(card, {
          duration: 1.5,
          ease: "power2.inOut",
          x: props.x,
          y: props.y,
          rotation: props.rotate,
          scale: props.scale,
          opacity: props.opacity,
        });
      });

      // Loop again
      setTimeout(animateCards, 1500);
    };

    positionCards();   // Initial position
    animateCards();    // Begin animation

    return () => {
      gsap.killTweensOf(cards);
    };
  }, []);

  return (
    <section className="bg-black flex items-center mt-26 justify-center h-screen overflow-hidden">
      <div
        ref={containerRef}
        className="relative w-[1000px] h-[700px] ml-4 flex items-end justify-center"
      >
        {/* Optional arc path */}
        <svg
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          width="800"
          height="400"
          viewBox="0 0 800 400"
        >
          <path
            d="M0,400 A400,400 0 0,1 800,400"
            stroke="#0000000"
            strokeWidth="3"
            fill="none"
          />
        </svg>

        {images.map((src, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) cardRefs.current[i] = el;
            }}
            className="fan-card absolute  bottom-0 w-[240px] h-[320px] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 ease-out"
          >
            <Image
              src={src}
              alt={`Card ${i}`}
              fill
              className="object-cover rounded-xl"
              priority={i < 4}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
