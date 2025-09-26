"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  motion,
  useInView,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import { logos, team } from "@/lib/static-data/about";

function Counter({ from = 0, to }: { from?: number; to: number }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

  // detect when the span is visible
  const isInView = useInView(spanRef, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, to, { duration: 2 });
    }
  }, [isInView, motionValue, to]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (spanRef.current) {
        spanRef.current.textContent = latest.toString();
      }
    });
    return () => unsubscribe();
  }, [rounded]);

  return <span ref={spanRef}>{from}</span>;
}

function About() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <section className="relative w-full h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/about_1_zi61v1.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-end text-right">
          <p className="text-gray-300 text-xl md:text-xl lg:text-2xl mb-6 max-w-2xl">
            We&apos;ve worked with over 120 clients to transform homes, gardens,
            and interiors with care. Our approach blends function, beauty, and
            personal style.
          </p>
          <h1 className="text-white text-5xl md:text-8xl lg:text-[8rem] font-bold leading-tight">
            About Al Eliza
          </h1>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 mt-14 lg:mt-48 ">
        <div className="max-w-7xl mx-auto">
          {/* Mission + Description */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-18 lg:mb-48">
            {/* Left side - OUR MISSION */}
            <div className="col-span-1 flex items-center gap-2">
              <span className="w-3 h-3 bg-gold"></span>
              <span className="uppercase text-sm font-semibold tracking-wider text-[#878787]">
                Our Mission
              </span>
            </div>

            {/* Right side - Description (2/3 width) */}
            <div className="col-span-2 text-left">
              <h2 className="text-xl md:text-4xl font-semibold text-[#878787] leading-snug">
                At AL Eliza, we transform spaces with{" "}
                <span className="font-bold">thoughtful design and care</span> —{" "}
                <span className="text-white">
                  creating spaces that inspire, nurture, and reflect your unique
                  way of living.
                </span>
              </h2>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex flex-col justify-between h-48 p-6">
              <h3 className="text-6xl text-right font-bold text-[#878787]">
                <Counter to={98} />%
              </h3>
              <div className="text-right mt-24">
                <p className="text-xl font-medium text-white mb-2">
                  Customer Satisfaction Rate
                </p>
                <p className="text-lg text-[#878787]">
                  Our clients consistently rate their experience as excellent.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between h-48 p-6">
              <h3 className="text-6xl text-right font-bold text-[#878787]">
                <Counter to={250} />+
              </h3>
              <div className="text-right mt-24">
                <p className="text-xl font-medium text-white mb-2">
                  Projects Completed
                </p>
                <p className="text-lg text-[#878787]">
                  Our clients consistently rate their experience as excellent.
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-between h-48 p-6">
              <h3 className="text-6xl text-right font-bold text-[#878787]">
                <Counter to={64} />%
              </h3>
              <div className="text-right mt-24">
                <p className="text-xl font-medium text-white mb-2 ">
                  Repeat Client Rate
                </p>
                <p className="text-lg text-[#878787]">
                  A majority of our clients trust us again for new projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12  mt-16">
        <div className="max-w-7xl mx-auto text-left mb-10 lg:mb-20">
          <h2 className=" text-7xl lg:text-7xl font-bebas-neue font-medium text-[#878787] ">
            Meet Our Team
          </h2>
          <p className="text-white mt-4 ">
            Get to know the people turning ideas into inspiring homes and
            gardens.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-lg aspect-[2/3]"
            >
              {/* Team Image */}
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-start p-4">
                <div>
                  <h3 className="text-white text-lg font-semibold">
                    {member.name}
                  </h3>
                  <p className="text-gray-200 text-sm">{member.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 lg:mb-16">
            <motion.p
              initial={{ opacity: 0, x: -300 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="text-center  w-full  text-7xl lg:text-7xl font-bebas-neue font-medium text-[#878787] mb-10 lg:mb-20"
            >
              OUR PRESTIGIOUS CLIENTS
            </motion.p>
          </div>

          {/* Logo Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 lg:gap-12 items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4  transition-all duration-300 rounded-lg"
              >
                <div className="relative w-full h-16 sm:h-20">
                  <Image
                    src={logo}
                    alt={`Client ${index + 1}`}
                    fill
                    className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 ease-in-out"
                    sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 20vw, 16vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className="flex flex-col justify-between">
            <h2 className="flex items-center text-3xl font-semibold">
              <span className="w-6 h-6 bg-[#a37e41] [transform:skewX(-20deg)] mr-3"></span>
              Get in Touch
            </h2>

            {/* Phone + Email at bottom aligned with submit */}
            <div className="flex flex-col items-left mt-4 gap-2">
              <p className="text-[#878787] text-xl">206-339-2947</p>
              <p className="text-3xl md:text-4xl font-semibold">
                info@aleliza.com
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-between space-y-8"
          >
            <div>
              <label className="block text-sm mb-2">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border-b border-[fbfbfb] focus:border-[fbfbfb] outline-none py-2"
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Email*</label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border-b border-[fbfbfb] focus:border-[fbfbfb] outline-none py-2"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2">Message*</label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-background border-b border-[fbfbfb] focus:border-[fbfbfb] outline-none py-2"
                required
              />
            </div>

            <button className="w-52  justify-center group cursor-pointer inline-flex bg-gold hover:bg-gold-dark text-white px-8 py-4 text-xl font-medium transition-colors duration-300 [transform:skewX(-20deg)]">
              <span className="flex items-center gap-2 [transform:skewX(20deg)]">
                Submit
              </span>
            </button>
          </form>
        </div>
      </section>

      <section className="bg-background text-white py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between gap-10">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <div className="h-[300px] sm:h-[400px] lg:h-[500px] lg:w-[500px] relative">
              <Image
                src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/about_1_zi61v1.webp"
                alt="Let's Chat"
                fill
                className="w-full rounded-[25px] object-cover"
              />
            </div>
          </div>

          {/* Right Text */}
          <div className="flex items-center w-full lg:w-1/2">
            <h2 className="text-5xl sm:text-7xl lg:text-9xl font-bold leading-none tracking-tight text-[#878787]">
              Let&apos;s Chat
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
