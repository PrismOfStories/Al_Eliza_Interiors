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
    <section
      ref={heroRef}
      className="relative w-full min-h-screen overflow-hidden"
    >
      {showVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover -z-10 preload-asset"
          src="https://res.cloudinary.com/dxhmpdgqj/video/upload/v1758311809/intro-video_gyb10k.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      )}
    </section>
  );
}
