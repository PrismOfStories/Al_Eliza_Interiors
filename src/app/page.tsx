"use client";

import ServiceCard from "@/components/common/ServiceCard";
// import About from "@/components/homepage/About";
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
import Section from "@/components/new/Section";
import Arc from "@/components/new/Arc";
import TestimonialsSection from "@/components/new/Testimonials";
// import HomeServices from "@/components/homepage/Sevices";

export default function Home() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const projects = [
    {
      title: "Residential & Commercial Designs",
      description:
        "We provide tailored interior design solutions for residential and commercial spaces with elegance and functionality.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp",
      url: "https://www.ignant.com/2023/03/25/ad2186-matthias-leidingers-photographic-exploration-of-awe-and-wonder/",
      color: "#000000", // fallback color if needed
    },
    {
      title: "Design Consultancy",
      description:
        "Expert design consultations to turn your vision into reality, from layout planning to final finishes.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img1_crbyqj.webp",
      url: "https://www.ignant.com/2022/09/30/clement-chapillon-questions-geographical-and-mental-isolation-with-les-rochers-fauves/",
      color: "#000000",
    },
    {
      title: "Virtual Reality 360° Designs",
      description:
        "Experience your space before it's built with immersive 360° VR walkthroughs and visualizations.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img5_nsn0nj.webp",
      url: "https://www.ignant.com/2023/10/28/capturing-balis-many-faces-zissou-documents-the-sacred-and-the-mundane-of-a-fragile-island/",
      color: "#000000",
    },
    {
      title: "Fit out Approvals",
      description:
        "We manage and secure fit-out approvals with relevant authorities to ensure smooth project execution.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
      url: "https://www.ignant.com/2019/03/13/a-photographic-series-depicting-the-uncertain-future-of-denmarks-treasured-coastlines/",
      color: "#000000",
    },
    {
      title: "Turnkey Fit out Projects",
      description:
        "From concept to completion we handle every aspect of your project with end-to-end solutions.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/img3_u7qqdu.webp",
      url: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#000000",
    },
    {
      title: "Landscaping",
      description:
        "Transform your outdoor spaces with creative and sustainable landscaping solutions.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp",
      url: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#000000",
    },
    {
      title: "Maintenance",
      description:
        "Comprehensive maintenance services to keep your spaces functional, safe, and beautiful.",
      src: "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp",
      url: "https://www.ignant.com/2023/04/12/mark-rammers-all-over-again-is-a-study-of-regret-and-the-willingness-to-move-forward/",
      color: "#000000",
    },
  ];
  return (
    <main className="">
      {/* Hero Section with Video Background */}
      <Hero />
      {/* Scroll Animation Section */}
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
      {/* <Services /> */}
      <Section />
      <Arc />
      {/* <HomeServices /> */}
      {/* <About /> */}
      <ServiceCard projects={projects} />
      <TestimonialsSection />
    </main>
  );
}
