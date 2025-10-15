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

  return (
    <>
      <ToastContainer />

      <section className="relative w-full min-h-screen flex items-center justify-center">
        {/* Background Image */}
        <Image
          src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760026091/IMG_6632_sibdtf.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col items-center sm:items-end text-center sm:text-right">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
            className="font-heading text-white font-bold leading-[1.1] uppercase tracking-[0.08em]
        text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
          >
            About <br />
            Al Eliza
          </motion.h1>
        </div>
      </section>

      <section className="w-full py-20 px-6 md:px-12 mt-14 lg:mt-48 ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start mb-18 lg:mb-48">
            <div className="col-span-1 flex items-center gap-2">
              <span className="w-3 h-3 bg-gold"></span>
              <span className="font-deltha tracking-[0.4rem] sm:tracking-[0.5rem]  uppercase text-sm font-semibold  text-white">
                Our Mission
              </span>
            </div>

            <div className="col-span-2 text-left">
              <h2 className="leading-[1.8] sm:leading-[1.5] font-paragraph font-[200] tracking-[0.2rem] sm:tracking-[0.5rem] text-xl md:text-3xl text-silver">
                At AL Eliza, we transform spaces with{" "}
                <span className="font-[200]">thoughtful design and care</span>{" "}
                <span className="font-[200] text-white">
                  creating spaces that inspire, nurture, and reflect your unique
                  way of living.
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="flex  flex-col justify-between">
              <h3 className="text-6xl sm:text-right font-bold text-gold">
                <Counter to={98} />%
              </h3>
              <div className="sm:text-right mt-10">
                <p className="text-lg font-paragraph tracking-[0.2rem] font-medium text-white mb-2">
                  Customer Satisfaction Rate
                </p>
                <p className="text-base font-paragraph tracking-[0.2rem] text-silver">
                  Our clients consistently rate their experience as excellent.
                </p>
              </div>
            </div>

            <hr className="bg-gold h-0.5 sm:hidden" />

            <div className="flex flex-col justify-between">
              <h3 className="text-6xl sm:text-right font-bold text-gold">
                <Counter to={250} />+
              </h3>
              <div className="sm:text-right mt-10">
                <p className="text-lg font-paragraph tracking-[0.2rem] font-medium text-white mb-2">
                  Projects Completed
                </p>
                <p className="text-base font-paragraph tracking-[0.2rem] text-silver">
                  Our clients consistently rate their experience as excellent.
                </p>
              </div>
            </div>

            <hr className="bg-gold h-0.5 sm:hidden" />

            <div className="flex flex-col justify-between">
              <h3 className="text-6xl sm:text-right font-bold text-gold">
                <Counter to={64} />%
              </h3>
              <div className="sm:text-right mt-10">
                <p className="text-lg font-paragraph tracking-[0.2rem] font-medium text-white mb-2">
                  Repeat Client Rate
                </p>
                <p className="text-base font-paragraph tracking-[0.2rem] text-silver">
                  A majority of our clients trust us again for new projects.
                </p>
              </div>
            </div>

            <hr className="bg-gold h-0.5 sm:hidden" />
          </div>
        </div>
      </section>

      <section className="sm:py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto text-left mb-10 lg:mb-20">
          <h2 className="font-deltha text-center sm:text-left text-[clamp(1.5rem,5vw,3rem)] font-medium text-gold tracking-[0.4rem] sm:tracking-[0.5rem]">
            Meet Our Team
          </h2>
          <p className="text-silver font-paragraph tracking-[0.2rem] mt-4  text-sm lg:text-lg">
            Get to know the people turning ideas into inspiring homes and
            gardens.
          </p>
        </div>

        <div className="hidden sm:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {team.map((member, index) => (
            <div
              key={index}
              className="relative group overflow-hidden shadow-lg aspect-[2/3]"
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start transform translate-y-12 hover:translate-y-0">
                <div className="bg-background w-full p-4 uppercase">
                  <h3 className="text-gold font-[300] text-lg font-paragraph tracking-[0.25rem] ">
                    {member.name}
                  </h3>
                  <p className="text-white text-sm font-paragraph font-[300] tracking-[0.25rem] mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="sm:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 pt-10">
          {team.map((member, index) => (
            <div key={index} className="group">
              {/* Image Container */}
              <div className="relative h-[380px] w-full overflow-hidden shadow-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-fit transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              {/* Text Content Below Image */}
              <div className="exclusive-text mt-4 text-center">
                <h3 className="text-gold font-[300] text-lg font-paragraph tracking-[0.25rem] ">
                  {member.name}
                </h3>
                <p className="text-white text-sm font-paragraph font-[300] tracking-[0.25rem] mt-1">
                  {member.role}
                </p>
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
              className="font-heading tracking-[0.5rem] leading-[1.8] sm:leading-[1.5] text-center  w-full text-[clamp(1rem,5vw,3rem)] font-medium text-gold mb-10 lg:mb-20"
            >
              OUR PRESTIGIOUS CLIENTS
            </motion.p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-8 lg:gap-12 items-center">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="group flex items-center justify-center p-4  transition-all duration-300 rounded-lg"
              >
                <div className="relative w-full h-20 sm:h-28">
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

      <section className="bg-background text-white py-10 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col justify-between">
            <h2 className="font-heading tracking-[0.3rem] flex items-center text-xl lg:text-3xl font-[300]">
              <span className="w-6 h-6 bg-gold [transform:skewX(-20deg)] mr-3"></span>
              Get in Touch
            </h2>
            <div className="flex flex-col items-left mt-4 gap-2">
              <p className="text-white font-paragraph tracking-[0.2rem] font-[300] text-xl">
                <Link href="tel:206-339-2947" className=" hover:text-gold">
                  206-339-2947
                </Link>
              </p>
              <p className="text-2xl font-paragraph tracking-[0.2rem] md:text-3xl font-[300]">
                <Link
                  href="mailto:info@aleliza.com"
                  className=" hover:text-gold"
                >
                  info@aleliza.com
                </Link>
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col exclusive-text justify-between space-y-8"
          >
            <div>
              <label className="block text-sm mb-2 font-paragraph font-[300]">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-background border-b border-[fbfbfb] focus:border-[fbfbfb] outline-none py-2 font-paragraph font-[300]"
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-paragraph font-[300]">
                Email*
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-background border-b border-[fbfbfb] focus:border-[fbfbfb] outline-none py-2 font-paragraph font-[300]"
                required
              />
            </div>
            <div>
              <label className="block text-sm mb-2 font-paragraph font-[300]">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Enter your subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full bg-background border-b border-[fbfbfb] focus:border-[fbfbfb] outline-none py-2 font-paragraph font-[300]"
                required
              />
            </div>

            <div>
              <label className="block text-sm mb-2 font-paragraph font-[300]">
                Message*
              </label>
              <textarea
                name="message"
                placeholder="Enter your message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-background border-b border-[fbfbfb] focus:border-[fbfbfb] outline-none py-2 font-paragraph font-[300]"
                required
              />
            </div>

            <button className="w-52  justify-center group cursor-pointer inline-flex bg-gold hover:bg-gold-dark text-white px-8 py-4 text-xl font-medium transition-colors duration-300 [transform:skewX(-20deg)]">
              <span className="flex font-deltha tracking-[0.25rem] items-center gap-2 [transform:skewX(20deg)]">
                Submit
              </span>
            </button>
          </form>
        </div>
      </section>

      <section className="bg-background text-white py-10 sm:py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row lg:justify-between gap-10">
          <div className="w-full lg:w-1/2">
            <div className="h-[300px] sm:h-[400px] lg:h-[500px] lg:w-[500px] relative sm:[transform:skewX(-10deg)]">
              <Image
                src="https://res.cloudinary.com/dxhmpdgqj/image/upload/v1760376136/IMG_1583_jswnlj.jpg"
                alt="Let's Chat"
                fill
                className="w-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center w-full lg:w-1/2">
            <h2 className="text-4xl font-deltha sm:text-7xl lg:text-9xl font-bold leading-none tracking-[0.3rem] text-gold">
              Let&apos;s Chat
            </h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
