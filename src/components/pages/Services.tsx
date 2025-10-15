"use client";

import React from "react";
import { services as servicePage } from "@/lib/static-data/home";
import ServiceCard from "../common/ServiceCard";

export default function ServicesCombined() {
  return (
    <div className="bg-background text-white mb-8">
      <section className="flex flex-col items-center justify-center min-h-screen px-6">
        <p className="text-sm tracking-widest mb-6">OUR SERVICES</p>
        <div className="text-[clamp(2rem,6vw,5rem)] font-deltha text-center">
          <h1 className="font-extrabold">DESIGN</h1>
          <h1 className="font-extrabold">SOLUTIONS</h1>
        </div>
      </section>

      <ServiceCard type="page" projects={servicePage} />

      <section className="max-w-6xl mx-auto mt-28 px-6  lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-18">
          <div className="col-span-1 flex items-center gap-2">
            <span className="w-3 h-3 bg-gold"></span>
            <span className="font-deltha tracking-[0.4rem] uppercase text-sm font-semibold  text-white">
              Our Services
            </span>
          </div>

          <div className="col-span-2 text-left">
            <h2 className="leading-[1.8] sm:leading-[1.5] font-paragraph font-[200] tracking-[0.2rem] sm:tracking-[0.5rem] text-xl md:text-3xl text-silver">
              At Al Eliza Services, we deliver solutions with{" "}
              <span className="font-[200]">dedication, skill and care</span>{" "}
              <span className="font-[200] text-white">
                providing services that support, empower, and match your unique
                way of living.
              </span>
            </h2>
          </div>
        </div>
      </section>

      <section className="bg-background text-center py-8 px-4">
        <p className="text-sm font-paragraph font-[400] tracking-[0.2rem] text-silver mt-10 mb-4">
          START BUILDING
        </p>
        <h1 className="font-deltha text-6xl md:text-8xl font-extrabold text-gold mb-8 leading-none">
          LET&lsquo;S DESIGN
        </h1>
        <p className="text-base font-paragraph font-[300] tracking-[0.15rem] md:text-lg text-silver max-w-2xl mx-auto mb-12">
          Ready to bring your vision to life? Whether it’s a home, a workspace,
          or a public space, we’re here to design environments that inspire,
          function, and endure. Let’s start your project together.
        </p>
      </section>

      {/* <RotatingGallery /> */}
    </div>
  );
}
