"use client";

import ServiceCard from "@/components/common/ServiceCard";
import Hero from "@/components/homepage/Hero";
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
  Fade,
} from "react-scroll-motion";
import ParallaxHero from "@/components/homepage/ParallaxHero";
import InteriorDesignHero from "@/components/homepage/InteriorDesignHero";
import Testimonials from "@/components/new/Testimonials";

export default function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const projects = [
    {
      title: "Residential & Commercial Designs",
      description:
        "We provide tailored interior design solutions for residential and commercial spaces with elegance and functionality.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
      url: "/services",
      color: "#000000", // fallback color if needed
    },
    {
      title: "Design Consultancy",
      description:
        "Expert design consultations to turn your vision into reality, from layout planning to final finishes.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      url: "/services",
      color: "#000000",
    },
    {
      title: "Virtual Reality 360° Designs",
      description:
        "Experience your space before it's built with immersive 360° VR walkthroughs and visualizations.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
      url: "/services",
      color: "#000000",
    },
    {
      title: "Fit out Approvals",
      description:
        "We manage and secure fit-out approvals with relevant authorities to ensure smooth project execution.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
      url: "/services",
      color: "#000000",
    },
    {
      title: "Turnkey Fit out Projects",
      description:
        "From concept to completion we handle every aspect of your project with end-to-end solutions.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
      url: "/services",
      color: "#000000",
    },
    {
      title: "Landscaping",
      description:
        "Transform your outdoor spaces with creative and sustainable landscaping solutions.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp",
      url: "/services",
      color: "#000000",
    },
    {
      title: "Maintenance",
      description:
        "Comprehensive maintenance services to keep your spaces functional, safe, and beautiful.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp",
      url: "/services",
      color: "#000000",
    },
  ];
  return (
    <main className="">
      <Hero />
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
          </ScrollPage>
        </ScrollContainer>
      </div>{" "}
      <ParallaxHero />
      <InteriorDesignHero />
      <ServiceCard projects={projects} />
      <Testimonials />
    </main>
  );
}
