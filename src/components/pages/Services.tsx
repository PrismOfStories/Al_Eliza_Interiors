"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import RotatingGallery from "../RotatingGallery";

gsap.registerPlugin(ScrollTrigger);


const services = [
  {
    title: "Residential & Commercial Interior Design",
    description:
      "Whether it's a brand new build or a space refresh, we offer full spectrum interior styling services in Dubai, UAE. For new homeowners, we design interiors from the ground up. For clients looking to enhance existing spaces, we expertly rearrange furniture, recommend paint colors, and source new décor tailored to their style.",
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
    title: "360° Virtual Reality Interior Design",
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
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/about_3_tp5mmt.webp",
  },

  {
    title: "Turnkey Fit-Out Solutions",
    description:
      "Our turnkey fit out services in Dubai provide a hassle free, end to end solution for commercial and residential spaces. From concept development to final handover, we deliver fully functional interiors tailored to your needs.",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
  },
  {
    title: "Landscaping & Outdoor Design",
    description:
      "Our landscaping services in Dubai transform outdoor spaces into lush, livable environments. We design and install gardens, courtyards, and terraces that balance natural beauty with function perfect for villas, offices, and commercial properties.",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
  },
  {
    title: "Interior Maintenance Services",
    description:
      "Maintain your property’s value with our comprehensive interior maintenance services in Dubai, UAE. From routine upkeep to urgent fixes, we keep your home or commercial space running smoothly year round.",
    image:
      "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
  },
];

export default function ServicesCombined() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = gsap.utils.toArray<HTMLElement>(".card");

    cards.forEach((card) => {
      card.style.minHeight = "80vh";
      card.style.willChange = "transform, opacity";
      card.style.transformOrigin = "center top";
    });

    // Use yPercent consistently (percent relative to each card's height)
    cards.forEach((card, i) => {
      gsap.set(card, {
        yPercent: i * 4,
        zIndex: cards.length - i,
        opacity: i === 0 ? 1 : 0.95,
        scale: 1,
      });
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${cards.length * window.innerHeight}`,
        scrub: true,
        pin: true,
        pinSpacing: true,
      },
    });

    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;
      tl.to(
        card,
        {
          yPercent: -100,
          opacity: 0,
          duration: 0.8,
        },
        i
      ).to(
        cards[i + 1],
        {
          yPercent: i * 4,
          opacity: 1,
          duration: 0.8,
        },
        i
      );
    });

    ScrollTrigger.refresh();

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      // cleanup inline styles
      if (sectionRef.current) gsap.set(sectionRef.current, { clearProps: "all" });
      cards.forEach((card) => {
        card.style.minHeight = "";
        card.style.willChange = "";
        card.style.transformOrigin = "";
        gsap.set(card, { clearProps: "all" });
      });
    };
  }, []);

  return (
    <div className="bg-black text-white mb-8">
      {/* Intro Section */}
      <section className="flex flex-col items-center justify-center min-h-screen px-6">
        <p className="text-sm tracking-widest mb-6">OUR SERVICES</p>
        <div className="text-center">
          <h1 className="text-[8vw] md:text-[10vw] font-extrabold leading-[1.05]">
            DESIGN
          </h1>
          <h1 className="text-[8vw] md:text-[10vw] font-extrabold leading-[1.05]">
            SOLUTIONS
          </h1>
        </div>
      </section>

      {/* Card Stacking Section */}
      <section
        ref={sectionRef}
        className="relative w-full h-screen flex items-center justify-center overflow-hidden mb-12"
      >
        <div className="relative w-full max-w-5xl h-[80vh]">
          {services.map((service, i) => (
            <div
              key={i}
              className="card absolute top-0 left-0 w-full h-full min-h-[80vh] flex flex-col md:flex-row items-center justify-center bg-white text-black shadow-2xl overflow-hidden"
            >
              {/* Image */}
              <div
                className="w-full md:w-1/2 h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${service.image})` }}
              />

              {/* Text */}
              <div className="p-8 md:w-1/2 flex flex-col justify-center h-full">
                <p className="text-sm tracking-widest mb-2 text-gray-500">
                  FROM CONCEPT TO CONSTRUCTION
                </p>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-700">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-18">
          <div className="col-span-1 flex items-center gap-2">
            <span className="w-3 h-3 bg-yellow-500"></span>
            <span className="uppercase text-sm font-semibold tracking-wider text-[#878787]">
              Our Services
            </span>
          </div>

          <div className="col-span-2 text-left">
            <h2 className="text-xl md:text-4xl font-semibold text-[#878787] leading-snug">
              At Al Eliza Services, we deliver solutions with{" "}
              <span className="font-bold">dedication, skill and care</span> —{" "}
              <span className="text-white">
                providing services that support, empower, and match your unique way of
                living.
              </span>
            </h2>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-black text-center py-8 px-4">
        <p className="text-sm tracking-widest text-gray-300 mt-10 mb-4">
          START BUILDING
        </p>
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-none">
          LET'S DESIGN
        </h1>
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Ready to bring your vision to life? Whether it’s a home, a
          workspace, or a public space, we’re here to design environments that
          inspire, function, and endure. Let’s start your project together.
        </p>
      </section>

      {/* Rotating Gallery */}
      <RotatingGallery />
    </div>
  );
}
