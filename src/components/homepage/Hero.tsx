"use client";

import React, { useEffect, useRef, useState } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    if (!heroRef.current) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setShowVideo(entry.isIntersecting),
      { threshold: 0.1 }
    );

    heroObserver.observe(heroRef.current);

    return () => heroObserver.disconnect();
  }, []);

  return (
    <header
      ref={heroRef}
      className="relative min-h-screen w-full overflow-hidden"
      role="banner"
    >
      <h1 className="sr-only">
        Al-Eliza Interiors - Premier Interior Design Services
      </h1>
      {showVideo && (
        <video
          className="preload-asset absolute inset-0 -z-10 h-full w-full object-cover"
          src="https://res.cloudinary.com/dxhmpdgqj/video/upload/v1758311809/intro-video_gyb10k.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Al-Eliza Interiors showcase video"
        />
      )}
    </header>
  );
}
