"use client";

import React, { useRef } from "react";
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
import RevealWrapper from "../common/RevealWrapper";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function GetInTouch() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const ctaSectionRef = useRef<HTMLDivElement | null>(null);
  const locationSectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
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
      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: sectionRef }
  );

  useGSAP(
    () => {
      gsap.from(".ctaContent-animate", {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ctaSectionRef.current,
          start: "top 80%",
        },
      });
      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: ctaSectionRef }
  );

  useGSAP(() => {
    if (locationSectionRef.current) {
      gsap.set(locationSectionRef.current, { y: 100, opacity: 0 });
      ScrollTrigger.create({
        trigger: locationSectionRef.current,
        start: "top 85%",
        onEnter: () => {
          gsap.to(locationSectionRef.current, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
          });
        },
        onLeaveBack: () => {
          gsap.to(locationSectionRef.current, {
            y: 60,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
          });
        },
      });
    }
    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  });

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
    <main className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <ToastContainer />
      <RevealWrapper>
        {/* Hero Section */}
        <section
          ref={sectionRef}
          className="bg-background px-6 py-24 text-center "
          aria-label="Contact us introduction"
        >
          <header>
            <p className="font-paragraph text-gold mb-3 pt-10 text-sm font-[300] uppercase tracking-[0.3rem] md:text-xl md:tracking-[0.5rem]">
              CONTACT US
            </p>

            <h1 className="contact-animate font-heading mb-6 text-6xl font-bold uppercase leading-[1.3] tracking-[0.2rem] text-white md:text-8xl md:tracking-[0.8rem]">
              GET IN TOUCH
            </h1>

            <p className="contact-animate font-paragraph text-silver mx-auto mb-12 max-w-2xl text-base font-[300] tracking-[0.2rem] md:text-lg">
              Reach out to start the conversation, schedule a consultation, or
              ask any questions.
            </p>
          </header>
          {/* Social Media Links */}
          <nav
            className="flex justify-center gap-6"
            aria-label="Social media links"
          >
            <Link
              href="https://www.instagram.com/alelizainteriors?utm_source=qr&igsh=a3drank5cHZka2py"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver hover:text-gold flex h-12 w-12 items-center  justify-center rounded-full transition-all duration-300"
              aria-label="Follow us on Instagram"
            >
              <FaInstagram className="h-10 w-10" aria-hidden="true" />
            </Link>
            <Link
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver hover:text-gold flex h-12 w-12 items-center  justify-center rounded-full transition-all duration-300"
              aria-label="Follow us on X (Twitter)"
            >
              <FaXTwitter className="h-10 w-10" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.linkedin.com/company/al-eliza/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver hover:text-gold flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300"
              aria-label="Connect with us on LinkedIn"
            >
              <FaLinkedinIn className="h-10 w-10" aria-hidden="true" />
            </Link>
            <Link
              href="https://www.facebook.com/share/19JmfS3Q7p/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver hover:text-gold flex h-12 w-12 items-center justify-center rounded-full transition-all duration-300"
              aria-label="Like us on Facebook"
            >
              <FaFacebookF className="h-10 w-10" aria-hidden="true" />
            </Link>
          </nav>{" "}
        </section>
        {/* Contact Form Section */}
        <section
          className="relative flex min-h-screen items-center justify-center px-4"
          aria-label="Contact form"
        >
          {/* Background Image */}
          <Image
            src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760201119/form_vlsyjw.webp"
            alt="Al-Eliza Interiors contact form background"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />

          {/* Black Overlay */}
          <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

          {/* Form Container */}
          <div className="exclusive-text relative z-10 w-full max-w-2xl rounded-xl bg-white p-5 sm:rounded-2xl sm:p-10 ">
            <form
              className="space-y-8"
              onSubmit={handleSubmit}
              aria-label="Contact form"
            >
              <div className="border-background border-b pb-2">
                <label
                  htmlFor="contact-name"
                  className="text-background font-paragraph mb-1 block text-sm font-[300]"
                >
                  NAME
                </label>
                <input
                  name="name"
                  id="contact-name"
                  type="text"
                  required
                  className="text-background w-full bg-transparent focus:outline-none"
                  aria-describedby="name-help"
                />
              </div>

              <div className="border-background border-b pb-2">
                <label
                  htmlFor="contact-email"
                  className="text-background font-paragraph mb-1 block text-sm font-[300]"
                >
                  EMAIL ADDRESS
                </label>
                <input
                  name="email"
                  id="contact-email"
                  type="email"
                  required
                  className="text-background w-full bg-transparent focus:outline-none"
                  aria-describedby="email-help"
                />
              </div>

              <div className="border-background border-b pb-2">
                <label
                  htmlFor="contact-subject"
                  className="font-paragraph text-background mb-1 block text-sm font-[300]"
                >
                  SUBJECT
                </label>
                <input
                  name="subject"
                  id="contact-subject"
                  type="text"
                  required
                  className="text-background w-full bg-transparent focus:outline-none"
                  aria-describedby="subject-help"
                />
              </div>

              <div className="border-background border-b pb-2">
                <label
                  htmlFor="contact-message"
                  className="font-paragraph text-background mb-1 block text-sm font-[300]"
                >
                  MESSAGE
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  rows={4}
                  required
                  className="text-background w-full bg-transparent focus:outline-none"
                  aria-describedby="message-help"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-gold hover:bg-gold-dark font-heading group inline-flex w-full cursor-pointer justify-center px-8 py-3 text-lg tracking-[0.2rem] text-white transition-colors duration-300 [transform:skewX(-20deg)]"
                  aria-label="Send contact message"
                >
                  <span className="flex items-center gap-2 [transform:skewX(20deg)]">
                    SEND MESSAGE
                  </span>
                </button>
              </div>
            </form>
          </div>
        </section>
      </RevealWrapper>
      {/* Visit Us Section */}
      <section
        ref={ctaSectionRef}
        className="bg-background px-6 py-10 text-center sm:py-24"
        aria-label="Visit our locations"
      >
        {/* Small Heading */}
        <p className="ctaContent-animate font-paragraph text-silver mb-4 mt-14 text-sm font-[400] tracking-[0.3rem]">
          OUR LOCATIONS
        </p>

        {/* Main Title */}
        <h2 className="ctaContent-animate font-heading text-gold mb-8 text-4xl leading-[1.5] tracking-[0.25rem] md:text-8xl lg:text-6xl">
          VISIT US
        </h2>

        {/* Subtext */}
        <p className="ctaContent-animate font-paragraph text-silver mx-auto mb-12 max-w-2xl text-base leading-[1.5] tracking-[0.2rem] md:text-lg">
          Visit us at one of our conveniently located studios, where our team is
          ready to discuss your design goals and explore possibilities for your
          space.
        </p>
      </section>
      {/* Office Location Section */}
      <section
        ref={locationSectionRef}
        className="bg-background pb-10 sm:py-20"
        aria-label="Office location and contact details"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-3 lg:px-12">
          {/* Left Side: Office Details (1/3) */}
          <address className="relative flex flex-col justify-center not-italic md:col-span-1">
            <div className="space-y-12 pl-6">
              {/* Office Block */}
              <div>
                <h3 className=" font-xl font-heading text-gold font-bold uppercase tracking-[0.2rem]">
                  Head Office
                </h3>
                <p className="font-paragraph hover:text-gold mt-2 cursor-pointer text-base font-[300] tracking-[0.2rem] text-white transition-colors duration-300 sm:text-lg">
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
                <h3 className="font-heading text-gold text-xl font-bold uppercase tracking-[0.2rem]">
                  Email
                </h3>
                <Link
                  href="mailto:info@alelizainteriors.com"
                  className="font-paragraph hover:text-gold mt-2 block text-base font-[300] tracking-[0.2rem] text-white transition-colors duration-300 sm:text-xl"
                >
                  info@alelizainteriors.com
                </Link>
              </div>

              {/* Phone */}
              <div className="exclusive-text">
                <h3 className="font-heading text-gold text-xl font-bold uppercase tracking-[0.2rem]">
                  Call Us
                </h3>

                <div className="mt-2 space-y-1">
                  <Link
                    href="tel:+971522889300"
                    className="font-paragraph hover:text-gold block text-base font-[300] tracking-[0.2rem] text-white transition-colors duration-300 sm:text-xl"
                    aria-label="Call us at +971 522 889 300"
                  >
                    +971 522 889 300
                  </Link>
                  <Link
                    href="tel:+971543783000"
                    className="font-paragraph  hover:text-gold block text-base font-[300] tracking-[0.2rem] text-white transition-colors duration-300 sm:text-xl"
                    aria-label="Call us at +971 54 378 3000"
                  >
                    +971 54 378 3000
                  </Link>
                </div>
              </div>
            </div>
          </address>

          {/* Right Side: Office Map (2/3) */}
          <div className="relative ml-auto h-[350px] w-full max-w-2xl overflow-hidden rounded-xl md:col-span-2 md:h-[450px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d225.46651462006213!2d55.35785207844792!3d25.28860235409731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d931d237c6d%3A0xc429f45c56e9c88!2sAl%20Eliza%20interior!5e0!3m2!1sen!2sae!4v1753894309606!5m2!1sen!2sae"
              loading="lazy"
              title="Al Eliza Interior Location Map"
              className="h-full w-full text-center"
            ></iframe>
          </div>
        </div>
      </section>{" "}
    </main>
  );
}
