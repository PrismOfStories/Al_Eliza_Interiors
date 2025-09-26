"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaXTwitter,
} from "react-icons/fa6";
import Image from "next/image";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-animate", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <>
      <section
        ref={sectionRef}
        className="bg-background text-center mt-4 py-24 px-6"
      >
        <p className="contact-animate text-sm tracking-widest text-gray-300 mt-14 mb-4">
          CONTACT US
        </p>

        <h1 className="contact-animate text-6xl md:text-8xl font-extrabold text-white mb-6 leading-none">
          GET IN TOUCH
        </h1>

        <p className="contact-animate text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Reach out to start the conversation, schedule a consultation, or ask
          any questions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-800 transition"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-800 transition"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-800 transition"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:bg-gray-800 transition"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375129/img4_te0upt.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-2xl bg-background p-10 rounded-[25px] ">
          <form className="space-y-8">
            {/* Name */}
            <div className="border-b border-[#fbfbfb] pb-2">
              <label className="block text-sm font-medium text-[#fbfbfb] mb-1">
                NAME
              </label>
              <input
                type="text"
                className="w-full bg-transparent focus:outline-none text-[#fbfbfb]"
              />
            </div>

            {/* Email */}
            <div className="border-b border-gray-300 pb-2">
              <label className="block text-sm font-medium text-[#fbfbfb] mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                className="w-full bg-transparent focus:outline-none text-[#fbfbfb]"
              />
            </div>

            {/* Subject */}
            <div className="border-b border-gray-300 pb-2">
              <label className="block text-sm font-medium text-[#fbfbfb] mb-1">
                SUBJECT
              </label>
              <input
                type="text"
                className="w-full bg-transparent focus:outline-none text-[#fbfbfb]"
              />
            </div>

            {/* Message */}
            <div className="border-b border-gray-300 pb-2">
              <label className="block text-sm font-medium text-[#fbfbfb] mb-1">
                MESSAGE
              </label>
              <textarea
                rows={4}
                className="w-full bg-transparent focus:outline-none text-[#fbfbfb]"
              ></textarea>
            </div>

            {/* Button */}
            <div className="pt-4">
              <button className="group w-full justify-center cursor-pointer inline-flex bg-gold hover:bg-gold-dark text-white px-8 py-3 text-lg font-medium transition-colors duration-300 [transform:skewX(-20deg)]">
                <span className="flex items-center gap-2 [transform:skewX(20deg)]">
                  SEND MESSAGE
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="bg-background text-center py-24 px-6">
        {/* Small Heading */}
        <p className="text-sm tracking-widest text-gray-300 mt-14 mb-4">
          OUR LOCATIONS
        </p>

        {/* Main Title */}
        <h1 className="text-6xl md:text-8xl font-extrabold text-white mb-8 leading-none">
          VISIT US
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-12">
          Visit us at one of our conveniently located studios, where our team is
          ready to discuss your design goals and explore possibilities for your
          space.
        </p>
      </section>

      <section className="bg-[#fbfbfb] py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-12 items-center">
          {/* Left Side: Office Details (1/3) */}
          <div className="flex flex-col justify-center relative md:col-span-1">
            <div className="pl-6 space-y-12">
              {/* Office Block */}
              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-wide">
                  Head Office
                </h2>
                <p className="text-black mt-2 leading-relaxed">
                  Al Eliza Interior, <br />
                  FBL Business Center, <br />
                  Al Mamzar - Dubai - United Arab Emirates
                </p>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-wide">
                  Email
                </h2>
                <p className="text-black mt-2">info@alelizainteriors.com</p>
              </div>

              {/* Phone */}
              <div>
                <h2 className="text-xl font-bold text-black uppercase tracking-wide">
                  Call Us
                </h2>
                <p className="text-black mt-2">+971 522 889 300</p>
                <p className="text-black">+971 54 378 3000</p>
              </div>
            </div>
          </div>

          {/* Right Side: Office Image (2/3) */}
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] md:col-span-2">
            <Image
              src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp"
              alt="Head Office"
              fill
              className="object-cover rounded-[25px]"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
