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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import RevealWrapper from "../common/RevealWrapper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Counter({ from = 0, to }: { from?: number; to: number }) {
  const spanRef = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(from);
  const rounded = useTransform(motionValue, (latest) => Math.floor(latest));

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
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

  const sectionRef = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;

      const elements = sectionRef.current.querySelectorAll(".story-animate");
      if (elements.length === 0) return;

      // Use ScrollTrigger.batch for scroll-in-view animation
      ScrollTrigger.batch(elements, {
        onEnter: (batch) => {
          gsap.to(batch, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          });
        },
        onLeaveBack: (batch) => {
          gsap.to(batch, {
            y: 100,
            opacity: 0,
            duration: 0.5,
            ease: "power3.in",
            stagger: 0.1,
          });
        },
        start: "top 80%",
        end: "bottom 20%",
        // markers: true, // Uncomment to debug
      });

      // Set initial state for animation
      gsap.set(elements, { y: 100, opacity: 0 });
      // Cleanup on unmount
      return () => {
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    },
    { scope: sectionRef, dependencies: [] }
  );

  const text = "Let's Chat";


  return (
    <main ref={sectionRef}>
      <ToastContainer />

      {/* Hero Section */}
      <section
        className="relative flex min-h-screen w-full items-center justify-center"
        aria-label="About Al-Eliza Interiors hero section"
      >
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761407535/ABOUT_AL_ELIZA_p8zwv9.png"
          alt="Al-Eliza Interiors office space background"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" aria-hidden="true"></div>
        <RevealWrapper>
          {/* Content */}
          <header className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center px-4 text-center sm:items-end sm:px-6 sm:text-center md:px-10">
            {/* Small quote above */}
            <motion.p
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-poppins text-sm uppercase tracking-[0.2em] text-gold sm:text-base"
            >
              “Designing Spaces That Tell Your Story”
            </motion.p>

            {/* Main Heading - single line */}
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: false }}
              className="font-outfit text-3xl font-bold uppercase leading-[1.1] tracking-[0.08em]
      text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl whitespace-nowrap"
            >
              About Aleliza
            </motion.h1>

            {/* One sentence below */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="font-paragraph mt-3 max-w-2xl text-center text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg"
            >
              We create timeless interiors that balance beauty, functionality, and the unique personality of every client we serve.
            </motion.p>
          </header>


        </RevealWrapper>
      </section>

      {/* Mission and Statistics Section */}
      <section
        className="mt-14 w-full px-6 py-20 md:px-12 lg:mt-48"
        aria-label="Our mission and company statistics"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-18 grid grid-cols-1 items-start gap-12 md:grid-cols-3 lg:mb-48">
            <div className="story-animate col-span-1 flex items-center gap-2">
              <span className="bg-gold h-3 w-3" aria-hidden="true"></span>
              <span className=" font-outfit text-sm font-semibold  uppercase tracking-[0.4rem] text-white  sm:tracking-[0.5rem]">
                Our Mission
              </span>
            </div>

            <div className="story-animate col-span-2 text-left">
              <h2 className="font-paragraph text-silver text-xl font-light leading-relaxed tracking-[0.1rem] sm:leading-[1.6] sm:tracking-[0.1rem] md:text-3xl md:tracking-[0.1rem]">
                At AL Eliza, we transform spaces with{" "}
                <span className="font-light">thoughtful design and care</span>{" "}
                <span className="font-light text-white">
                  creating spaces that inspire, nurture, and reflect your unique
                  way of living.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <article className="flex  flex-col justify-between">
              <h3 className="text-gold text-6xl font-bold sm:text-right">
                <Counter to={98} />%
              </h3>
              <div className="story-animate mt-10 sm:text-right">
                <h4 className="font-paragraph mb-2 text-lg font-medium tracking-[0.2rem] text-white">
                  Customer Satisfaction Rate
                </h4>
                <p className="font-paragraph text-silver text-base tracking-[0.2rem]">
                  Our clients consistently rate their experience as excellent.
                </p>
              </div>
            </article>

            <hr className="bg-gold h-0.5 sm:hidden" />

            <article className="flex flex-col justify-between">
              <h3 className="story-animate text-gold text-6xl font-bold sm:text-right">
                <Counter to={250} />+
              </h3>
              <div className="story-animate mt-10 sm:text-right">
                <h4 className="font-paragraph mb-2 text-lg font-medium tracking-[0.2rem] text-white">
                  Projects Completed
                </h4>
                <p className="font-paragraph text-silver text-base tracking-[0.2rem]">
                  Our clients consistently rate their experience as excellent.
                </p>
              </div>
            </article>

            <hr className="bg-gold h-0.5 sm:hidden" />

            <article className="flex flex-col justify-between">
              <h3 className="story-animate text-gold text-6xl font-bold sm:text-right">
                <Counter to={64} />%
              </h3>
              <div className="story-animate mt-10 sm:text-right">
                <h4 className="font-paragraph mb-2 text-lg font-medium tracking-[0.2rem] text-white">
                  Repeat Client Rate
                </h4>
                <p className="font-paragraph text-silver text-base tracking-[0.2rem]">
                  A majority of our clients trust us again for new projects.
                </p>
              </div>
            </article>

            <hr className="bg-gold h-0.5 sm:hidden" />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 sm:py-20 md:px-12" aria-label="Meet our team">
        <div className="mx-auto mb-10 max-w-7xl text-left lg:mb-20">
          <h2 className="story-animate font-outfit text-gold text-center text-[clamp(1.5rem,5vw,3rem)] font-medium tracking-[0.4rem] sm:text-left sm:tracking-[0.1rem]">
            Meet Our Team
          </h2>
          <p className="story-animate text-silver font-paragraph mt-4 text-sm tracking-[0.1rem] lg:text-lg">
            Get to know the people turning ideas into inspiring homes and gardens.
          </p>
        </div>

        {/* Desktop View — 3 in a row, smaller height */}
        <div className="story-animate hidden grid-cols-1 gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member, index) => (
            <article
              key={index}
              className="group relative aspect-[3/4] overflow-hidden shadow-lg"
            >
              <Image
                src={member.image}
                alt={`${member.name} - ${member.role}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 flex translate-y-12 transform items-end justify-start bg-black/40 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <div className="bg-background w-full p-4 uppercase">
                  <h3 className="text-gold font-paragraph text-lg font-[300] tracking-[0.25rem]">
                    {member.name}
                  </h3>
                  <p className="font-paragraph mt-1 text-sm font-[300] tracking-[0.25rem] text-white">
                    {member.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile View — original layout (unchanged) */}
        <div className="story-animate grid grid-cols-1 gap-12 pt-10 sm:hidden sm:grid-cols-2 md:grid-cols-4">
          {team.map((member, index) => (
            <article key={index} className="group">
              {/* Image Container */}
              <figure className="relative h-[380px] w-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-fit transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
                  crossOrigin="anonymous"
                  referrerPolicy="no-referrer"
                />
              </figure>

              {/* Text Content Below Image */}
              <div className="exclusive-text mt-4 text-center">
                <h3 className="text-gold font-paragraph text-lg font-[300] tracking-[0.25rem]">
                  {member.name}
                </h3>
                <p className="font-paragraph mt-1 text-sm font-[300] tracking-[0.25rem] text-white">
                  {member.role}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>




      {/* Clients Section */}
      <section className="py-16 lg:py-24" aria-label="Our prestigious clients">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <header className="mb-12 text-center lg:mb-16">
            <h2 className="story-animate font-outfit text-gold mb-10 w-full text-center  text-[clamp(1rem,5vw,3rem)] font-medium leading-[1.8] tracking-[0.2rem] sm:leading-[1.5] lg:mb-20">
              OUR PRESTIGIOUS CLIENTS
            </h2>
          </header>

          <div className="space-y-10">

            {/* --- ROW 1 : 4 LOGOS --- */}
            <div className="grid grid-cols-4 gap-6">
              {logos.slice(0, 4).map((logo, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center p-2"
                  role="listitem"
                >
                  <figure className="relative h-16 w-full sm:h-20">
                    <Image
                      src={logo}
                      alt={`Client ${index + 1} logo`}
                      fill
                      className="object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </figure>
                </div>
              ))}
            </div>

            {/* --- ROW 2 : 5 LOGOS --- */}
            <div className="grid grid-cols-5 gap-6">
              {logos.slice(4, 9).map((logo, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center p-2"
                  role="listitem"
                >
                  <figure className="relative h-16 w-full sm:h-20">
                    <Image
                      src={logo}
                      alt={`Client ${index + 5} logo`}
                      fill
                      className="object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </figure>
                </div>
              ))}
            </div>

            {/* --- ROW 3 : 4 LOGOS --- */}
            <div className="grid grid-cols-4 gap-6">
              {logos.slice(9, 13).map((logo, index) => (
                <div
                  key={index}
                  className="group flex items-center justify-center p-2"
                  role="listitem"
                >
                  <figure className="relative h-16 w-full sm:h-20">
                    <Image
                      src={logo}
                      alt={`Client ${index + 10} logo`}
                      fill
                      className="object-contain opacity-60 grayscale transition-all duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
                  </figure>
                </div>
              ))}
            </div>

          </div>

        </div>
      </section>
      <section
        className="bg-background px-6 py-10 text-white sm:py-20"
        aria-label="Let's chat call to action"
      >
        <div className="mx-auto flex max-w-7xl flex-col-reverse gap-10 lg:flex-row lg:items-center lg:justify-between">

          {/* IMAGE */}
          <figure className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-[400px] h-[400px]">
              <Image
                src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1761406835/LET_S_CHAT_f8dl1o.png"
                alt="Let's Chat Visual"
                fill
                className="object-contain"
                crossOrigin="anonymous"
                referrerPolicy="no-referrer"
              />
            </div>
          </figure>

          {/* TEXT */}
          <div className="flex w-full lg:w-1/2 overflow-visible">
            <h2 className="font-outfit text-gold text-4xl font-bold leading-none tracking-[0.25rem] sm:text-7xl lg:text-8xl whitespace-nowrap">
              {text.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{
                    delay: i * 0.04,
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </h2>
          </div>

        </div>
      </section>


      {/* Contact Form Section */}
      <section
        className="bg-background px-6 py-10 text-white sm:py-20"
        aria-label="Contact us"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 md:grid-cols-2">
          <div className="flex flex-col justify-between">
            <h2 className="story-animate font-outfit flex items-center text-xl font-[300] tracking-[0.3rem] lg:text-3xl">
              <span
                className="bg-gold mr-3 h-6 w-6 [transform:skewX(-20deg)]"
                aria-hidden="true"
              ></span>
              Get in Touch
            </h2>
            <address className="items-left mt-4 flex flex-col gap-2 not-italic">
              <p className="story-animate font-paragraph text-xl font-[300] tracking-[0.2rem] text-white">
                <Link href="tel:206-339-2947" className="hover:text-gold">
                  206-339-2947
                </Link>
              </p>
              <p className="story-animate font-paragraph text-2xl font-[300] tracking-[0.2rem] md:text-3xl">
                <Link
                  href="mailto:info@aleliza.com"
                  className="hover:text-gold"
                >
                  info@aleliza.com
                </Link>
              </p>
            </address>
          </div>
          <form
            onSubmit={handleSubmit}
            className="story-animate exclusive-text flex flex-col justify-between space-y-8"
            aria-label="Contact form"
          >
            <div>
              <label
                htmlFor="name"
                className="font-paragraph mb-2 block text-sm font-[300]"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                className="bg-background font-paragraph w-full border-b border-[fbfbfb] py-2 font-[300] outline-none focus:border-[fbfbfb]"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="font-paragraph mb-2 block text-sm font-[300]"
              >
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="bg-background font-paragraph w-full border-b border-[fbfbfb] py-2 font-[300] outline-none focus:border-[fbfbfb]"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="font-paragraph mb-2 block text-sm font-[300]"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-background font-paragraph w-full border-b border-[fbfbfb] py-2 font-[300] outline-none focus:border-[fbfbfb]"
                required
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="font-paragraph mb-2 block text-sm font-[300]"
              >
                Message*
              </label>
              <textarea
                name="message"
                id="message"
                placeholder="Enter your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="bg-background font-paragraph w-full border-b border-[fbfbfb] py-2 font-[300] outline-none focus:border-[fbfbfb]"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-gold  hover:bg-gold-dark group inline-flex w-52 cursor-pointer justify-center px-8 py-4 text-xl font-medium text-white transition-colors duration-300 [transform:skewX(-20deg)]"
              aria-label="Submit contact form"
            >
              <span className="font-outfit flex items-center gap-2 tracking-[0.25rem] [transform:skewX(20deg)]">
                Submit
              </span>
            </button>
          </form>
        </div>
      </section>

      {/* Call to Action Section */}

    </main>
  );
}

export default About;
