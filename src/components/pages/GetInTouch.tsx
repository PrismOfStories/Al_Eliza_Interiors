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
    <div className="pt-20">
      <ToastContainer />

      <section
        ref={sectionRef}
        className="bg-background text-center py-24 px-6"
      >
        <p className="text-sm md:text-xl pt-10 tracking-[0.3rem] md:tracking-[0.5rem] mb-3 uppercase font-paragraph font-[300] text-gold">
          CONTACT US
        </p>

        <h1 className="contact-animate tracking-[0.2rem] md:tracking-[0.8rem] leading-[1.3] uppercase font-heading font-bold text-6xl md:text-8xl text-white mb-6">
          GET IN TOUCH
        </h1>

        <p className="contact-animate font-paragraph tracking-[0.2rem] font-[300] text-base md:text-lg text-silver max-w-2xl mx-auto mb-12">
          Reach out to start the conversation, schedule a consultation, or ask
          any questions.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6">
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full  text-silver hover:text-gold transition-all duration-300"
          >
            <FaInstagram className="h-10 w-10" />
          </Link>
          <Link
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full  text-silver hover:text-gold transition-all duration-300"
          >
            <FaXTwitter className="h-10 w-10" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full text-silver hover:text-gold transition-all duration-300"
          >
            <FaLinkedinIn className="h-10 w-10" />
          </Link>
          <Link
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 flex items-center justify-center rounded-full text-silver hover:text-gold transition-all duration-300"
          >
            <FaFacebookF className="h-10 w-10" />
          </Link>
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
        <div className="relative z-10 w-full max-w-2xl bg-white p-5 sm:p-10 exclusive-text rounded-xl sm:rounded-2xl ">
          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="border-b border-background pb-2">
              <label className="block text-sm text-background mb-1 font-paragraph font-[300]">
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
              <label className="block text-sm text-background mb-1 font-paragraph font-[300]">
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
              <label className="block text-sm font-paragraph font-[300] text-background mb-1">
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
              <label className="block text-sm font-paragraph font-[300] text-background mb-1">
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
                className="group w-full justify-center cursor-pointer inline-flex bg-gold hover:bg-gold-dark text-white px-8 py-3 text-lg font-heading tracking-[0.2rem] transition-colors duration-300 [transform:skewX(-20deg)]"
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
        <p className="text-sm font-paragraph tracking-[0.3rem] font-[400] text-silver mt-14 mb-4">
          OUR LOCATIONS
        </p>

        {/* Main Title */}
        <h1 className=" text-4xl lg:text-6xl font-heading tracking-[0.25rem] md:text-8xl text-gold mb-8 leading-[1.5]">
          VISIT US
        </h1>

        {/* Subtext */}
        <p className="text-base md:text-lg font-paragraph tracking-[0.2rem] leading-[1.5] text-silver max-w-2xl mx-auto mb-12">
          Visit us at one of our conveniently located studios, where our team is
          ready to discuss your design goals and explore possibilities for your
          space.
        </p>
      </section>

      <section className="bg-background pb-10 sm:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6 lg:px-12 items-center">
          {/* Left Side: Office Details (1/3) */}
          <div className="flex flex-col justify-center relative md:col-span-1">
            <div className="pl-6 space-y-12">
              {/* Office Block */}
              <div>
                <h2 className=" font-xl font-deltha font-bold text-gold uppercase tracking-[0.2rem]">
                  Head Office
                </h2>
                <p className="text-white mt-2 text-base sm:text-lg cursor-pointer font-paragraph tracking-[0.2rem] font-[300] hover:text-gold transition-colors duration-300">
                  <Link
                    href="https://maps.app.goo.gl/5GJHZDmpqdpkJmtb7"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Al Eliza Interior, <br />
                    FBL Business Center, <br />
                    Al Mamzar - Dubai - UAE{" "}
                  </Link>
                </p>
              </div>

              {/* Email */}
              <div className="exclusive-text">
                <h2 className="text-xl font-deltha font-bold text-gold uppercase tracking-[0.2rem]">
                  Email
                </h2>
                <Link
                  href="mailto:info@alelizainteriors.com"
                  className="block text-white mt-2 text-base sm:text-xl font-paragraph tracking-[0.2rem] font-[300] hover:text-gold transition-colors duration-300"
                >
                  info@alelizainteriors.com
                </Link>
              </div>

              {/* Phone */}
              <div className="exclusive-text">
                <h2 className="text-xl font-deltha font-bold text-gold uppercase tracking-[0.2rem]">
                  Call Us
                </h2>

                <div className="mt-2 space-y-1">
                  <Link
                    href="tel:+971522889300"
                    className="block text-white text-base sm:text-xl font-paragraph tracking-[0.2rem] font-[300] hover:text-gold transition-colors duration-300"
                  >
                    +971 522 889 300
                  </Link>
                  <Link
                    href="tel:+971543783000"
                    className="block  text-white text-base sm:text-xl font-paragraph tracking-[0.2rem] font-[300] hover:text-gold transition-colors duration-300"
                  >
                    +971 54 378 3000
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Office Image (2/3) */}
          <div className="relative w-full max-w-2xl ml-auto h-[350px] md:h-[450px] lg:h-[500px] md:col-span-2 rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.46651462006213!2d55.35785207844792!3d25.28860235409731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d931d237c6d%3A0xc429f45c56e9c88!2sAl%20Eliza%20interior!5e0!3m2!1sen!2sae!4v1753894309606!5m2!1sen!2sae"
              loading="lazy"
              title="Al Eliza Interior Location"
              className="text-center w-full h-full"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
