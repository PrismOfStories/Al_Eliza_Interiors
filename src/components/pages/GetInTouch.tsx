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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const loadingToast = toast.loading("Sending message...");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      toast.dismiss(loadingToast);

      if (result.success) {
        toast.success("Message sent successfully! 🎉");
        form.reset();
      } else {
        toast.error("Failed to send message.");
      }
    } catch {
      toast.dismiss(loadingToast);
      toast.error("Something went wrong!");
    }
  };

  return (
    <>
      <ToastContainer />

      <section
        ref={sectionRef}
        className="bg-background text-center py-24 px-6"
      >
        <p className="contact-animate text-sm tracking-widest text-silver mt-14 mb-4">
          CONTACT US
        </p>

        <h1 className="contact-animate font-deltha text-6xl md:text-8xl font-extrabold text-white mb-6 leading-none">
          GET IN TOUCH
        </h1>

        <p className="contact-animate text-base md:text-lg text-silver max-w-2xl mx-auto mb-12">
          Reach out to start the conversation, schedule a consultation, or ask
          any questions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:text-white hover:bg-gold transition-all duration-300"
          >
            <FaInstagram size={20} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:text-white hover:bg-gold transition-all duration-300"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:text-white hover:bg-gold transition-all duration-300"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full bg-white text-black hover:text-white hover:bg-gold transition-all duration-300"
          >
            <FaFacebookF size={20} />
          </a>
        </div>
      </section>

      <section className="relative min-h-screen flex items-center justify-center px-4">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760201119/form_vlsyjw.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Form Container */}
        <div className="relative z-10 w-full max-w-2xl bg-white p-5 sm:p-10 rounded-xl sm:rounded-2xl ">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="border-b border-background pb-2">
              <label className="block text-sm font-medium text-background mb-1">
                NAME
              </label>
              <input
                name="name"
                type="text"
                required
                className="w-full bg-transparent focus:outline-none text-background"
              />
            </div>

            <div className="border-b border-background pb-2">
              <label className="block text-sm font-medium text-background mb-1">
                EMAIL ADDRESS
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full bg-transparent focus:outline-none text-background"
              />
            </div>

            <div className="border-b border-background pb-2">
              <label className="block text-sm font-medium text-background mb-1">
                SUBJECT
              </label>
              <input
                name="subject"
                type="text"
                required
                className="w-full bg-transparent focus:outline-none text-background"
              />
            </div>

            <div className="border-b border-background pb-2">
              <label className="block text-sm font-medium text-background mb-1">
                MESSAGE
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-transparent focus:outline-none text-background"
              />
            </div>

            <div className="pt-4">
              <button
                type="submit"
                className="group w-full justify-center cursor-pointer inline-flex bg-gold hover:bg-gold-dark text-white px-8 py-3 text-lg font-medium transition-colors duration-300 [transform:skewX(-20deg)]"
              >
                <span className="flex items-center gap-2 [transform:skewX(20deg)]">
                  SEND MESSAGE
                </span>
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="bg-background text-center py-10 sm:py-24 px-6">
        {/* Small Heading */}
        <p className="text-sm tracking-widest text-silver mt-14 mb-4">
          OUR LOCATIONS
        </p>

        {/* Main Title */}
        <h1 className="text-6xl font-deltha md:text-8xl font-extrabold text-gold mb-8 leading-none">
          VISIT US
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg text-silver max-w-2xl mx-auto mb-12">
          Visit us at one of our conveniently located studios, where our team is
          ready to discuss your design goals and explore possibilities for your
          space.
        </p>
      </section>

      <section className="bg-background py-10 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-12 items-center">
          {/* Left Side: Office Details (1/3) */}
          <div className="flex flex-col justify-center relative md:col-span-1">
            <div className="pl-6 space-y-12">
              {/* Office Block */}
              <div>
                <h2 className=" font-xl font-bold text-gold uppercase tracking-wide">
                  Head Office
                </h2>
                <p className="text-white mt-2 leading-relaxed text-base sm:text-xl">
                  Al Eliza Interior, <br />
                  FBL Business Center, <br />
                  Al Mamzar - Dubai - UAE
                </p>
              </div>

              {/* Email */}
              <div>
                <h2 className="text-xl font-bold text-gold uppercase tracking-wide">
                  Email
                </h2>
                <Link
                  href="mailto:info@alelizainteriors.com"
                  className="block text-white mt-2 text-base sm:text-xl"
                >
                  info@alelizainteriors.com
                </Link>
              </div>

              {/* Phone */}
              <div>
                <h2 className="text-xl font-bold text-gold uppercase tracking-wide">
                  Call Us
                </h2>

                <div className="mt-2 space-y-1">
                  <Link
                    href="tel:+971522889300"
                    className="block text-white text-base sm:text-xl"
                  >
                    +971 522 889 300
                  </Link>
                  <Link
                    href="tel:+971543783000"
                    className="block  text-white text-base sm:text-xl"
                  >
                    +971 54 378 3000
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Office Image (2/3) */}
          <div className="relative w-full h-[350px] md:h-[450px] lg:h-[500px] md:col-span-2 ">
            <Image
              src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp"
              alt="Head Office"
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>
        </div>
      </section>
    </>
  );
}
