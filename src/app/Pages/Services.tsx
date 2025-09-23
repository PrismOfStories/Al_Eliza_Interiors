// ServicesCombined.tsx
"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Residential & Commercial Interior Design",
    description:
      "We craft spatial solutions that blend creativity, functionality, and sustainability, turning ideas into fully realized designs.",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
  },
  {
    title: "Interior Design Consultancy",
    description:
      "In today’s people first world, workplace expectations have evolved. Our Dubai-based interior design consultants help businesses across the UAE create flexible, wellness driven environments aligned with their company’s purpose and culture.",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
  },
  {
    title: "virtual-reality-designs",
    description:
      "Embrace the future of design with our immersive 360° Virtual Reality (VR) experiences. Based in Dubai, UAE, our team builds interactive, photorealistic environments that allow clients to explore their spaces before physical execution.",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
  },
  {
    title: "Fit-Out Approvals & Compliance",
    description:
      "Navigating Dubai's regulatory landscape is a critical part of any commercial interior project. We manage the entire approval process, liaising with building owners, developers, and government bodies across Dubai and the UAE.",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
  }
];

export default function ServicesCombined() {
  const introRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const imageFrontRef = useRef<HTMLDivElement | null>(null); // visible layer
  const imageBackRef = useRef<HTMLDivElement | null>(null); // used for crossfade
  const currentIndex = useRef<number>(0);

  // Intro split-text (optional) — works if you have split-type installed
  useEffect(() => {
    if (!introRef.current) return;
    let splits: any[] = [];

    (async () => {
      try {
        const SplitTypeModule = await import("split-type");
        const SplitType = SplitTypeModule.default ?? SplitTypeModule;

        const els = Array.from(
          introRef.current!.querySelectorAll<HTMLElement>(".split-text")
        );

        els.forEach((el) =>
          splits.push(
            new (SplitType as any)(el, {
              types: "lines, words, chars",
              tagName: "span",
            })
          )
        );

        // play line reveal
        setTimeout(() => {
          const lineSpans = introRef.current!.querySelectorAll(".line > span");
          gsap.set(lineSpans, { yPercent: 100, opacity: 1 });
          gsap.to(lineSpans, {
            yPercent: 0,
            duration: 0.9,
            ease: "power3.out",
            stagger: 0.08,
          });
        }, 60);
      } catch (e) {
        console.log("Split type error:", e)
      }
    })();

    return () => {
      splits.forEach((s) => {
        if (s && typeof s.revert === "function") s.revert();
      });
    };
  }, []);

  // Main scroll behavior: preload images, animate overlays, crossfade images
  useEffect(() => {
    if (!containerRef.current || !imageFrontRef.current || !imageBackRef.current)
      return;

    let tlHandles: gsap.core.Timeline[] = [];
    let triggers: ScrollTrigger[] = [];

    (async () => {
      // Preload images for smooth crossfade
      await Promise.all(
        services.map(
          (s) =>
            new Promise<void>((res) => {
              const img = new Image();
              img.onload = () => res();
              img.onerror = () => res();
              img.src = s.image;
            })
        )
      );

      // Utility to crossfade to image index i
      const crossfadeTo = (i: number) => {
        if (!imageFrontRef.current || !imageBackRef.current) return;
        if (currentIndex.current === i) return;

        const front = imageFrontRef.current!;
        const back = imageBackRef.current!;
        const newSrc = services[i].image;

        // put new image into the back layer
        gsap.set(back, { backgroundImage: `url(${newSrc})`, opacity: 0, zIndex: 3 });
        gsap.set(front, { zIndex: 2 });

        // animate back layer in, then copy to front and reset back
        gsap.to(back, {
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          onComplete: () => {
            // copy new image to front (so front always shows the current image)
            gsap.set(front, { backgroundImage: `url(${newSrc})`, opacity: 1 });
            // hide back again (ready for next swap)
            gsap.set(back, { opacity: 0, zIndex: 1 });
            currentIndex.current = i;
          },
        });
      };

      // select overlays (left column) and set initial states
      const overlays = gsap.utils.toArray<HTMLElement>(".service-overlay");
      if (!overlays || overlays.length === 0) return;

      // initialize overlay positions: all offscreen (down) and hidden,
      // but keep the first one visible on load
      gsap.set(overlays, { y: 120, opacity: 0 });
      gsap.set(overlays[0], { y: 0, opacity: 1 });

      // Ensure front layer is initial image
      gsap.set(imageFrontRef.current, {
        backgroundImage: `url(${services[0].image})`,
        opacity: 1,
      });
      gsap.set(imageBackRef.current, { opacity: 0 });

      // create timeline + scrolltrigger for each overlay
      overlays.forEach((el, i) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: "top 60%", // adjust trigger points to taste
            end: "bottom 40%",
            scrub: true,
            // when the overlay becomes active, swap the image
            onEnter: () => crossfadeTo(i),
            onEnterBack: () => crossfadeTo(i),
          },
        });

        // from (enter) -> hold -> exit
        tl.fromTo(
          el,
          { y: 120, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
        ).to(el, { y: -80, opacity: 0, duration: 0.6, ease: "power3.in" });

        tlHandles.push(tl);
        if (tl.scrollTrigger) triggers.push(tl.scrollTrigger);
      });
    })();

    // cleanup
    return () => {
      try {
        tlHandles.forEach((t) => t.kill());
        triggers.forEach((tr) => tr.kill());
        ScrollTrigger.getAll().forEach((t) => t.kill());
      } catch (e) {
        // ignore cleanup errors
      }
    };
  }, []);

  return (
    <>
      <div className="bg-[#fcfbf6]">
        {/* Intro Section */}
        <section
          ref={introRef}
          className="flex flex-col items-center justify-center min-h-screen px-6"
        >
          <p className="text-sm tracking-widest mb-6">OUR SERVICES</p>
          <div className="text-center">
            <h1 className="split-text text-[8vw] md:text-[10vw] font-extrabold leading-[1.05]">
              DESIGN
            </h1>
            <h1 className="split-text text-[8vw] md:text-[10vw] font-extrabold leading-[1.05]">
              SOLUTIONS
            </h1>
          </div>

          <style jsx>{`
            :global(.line) {
              display: block;
              overflow: hidden;
            }
            :global(.line > span) {
              display: inline-block;
              will-change: transform;
            }
          `}</style>
        </section>

        {/* Short intro paragraph */}
        <div className="max-w-7xl mx-auto text-center mb-12 px-6">
          <p className="text-gray-800 text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive range of architectural services — from initial
            concept to final construction. Our approach combines creativity,
            precision, and collaboration to bring purposeful spaces to life.
          </p>
        </div>

        {/* Services Section */}
        <section ref={containerRef} className="relative w-full min-h-screen flex">
          {/* Left: Text content (triggers) */}
          <div className="w-full md:w-1/2 flex flex-col gap-40 py-36 px-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`service-overlay h-screen flex items-center`}
              >
                <div className="max-w-lg">
                  <p className="text-sm tracking-widest mb-3 text-gray-500">
                    FROM CONCEPT TO CONSTRUCTION
                  </p>
                  <h2 className="text-4xl md:text-5xl font-bold mb-5">
                    {`${idx + 1}. ${service.title}`}
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Image display (sticky) */}
          <div className="hidden md:flex sticky top-0 w-1/2 h-screen items-center justify-center">
            <div className="relative w-[80%] h-[80%]  overflow-hidden shadow-lg">
              {/* Back layer (used for crossfade) */}
              <div
                ref={imageBackRef}
                className="absolute inset-0 bg-cover bg-center will-change-transform"
                style={{ opacity: 0 }}
              />
              {/* Front layer (shows current image) */}
              <div
                ref={imageFrontRef}
                className="absolute inset-0 bg-cover bg-center will-change-transform"
                style={{ opacity: 1 }}
              />
            </div>
          </div>

          {/* Mobile fallback: show images inline for each service (stacked) */}
          <div className="md:hidden w-full px-6 pb-20">
            {services.map((s, i) => (
              <div key={i} className="mb-12">
                <div
                  className="w-full h-64 bg-cover bg-center rounded-md shadow-md"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
                <div className="mt-4">
                  <p className="text-sm tracking-widest mb-2 text-gray-500">
                    FROM CONCEPT TO CONSTRUCTION
                  </p>
                  <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                  <p className="text-gray-700">{s.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
}
