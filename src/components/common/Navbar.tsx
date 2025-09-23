"use client";

import { cn } from "@/lib/utils/tailwind";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <>
      <div
        className={cn(
          "flex justify-between items-start p-6 text-brown w-screen text-3xl md:text-5xl font-bebas-neue fixed top-0 left-0 z-50 transition-colors duration-300",
          scrolled ? "bg-transparent" : "bg-transparent"
        )}
      >
        <p>Logo</p>

        {!scrolled && (
          <ul className="hidden md:flex flex-col items-end space-y-4">
            <li className="hover:text-gold cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <Link href="/our-story">Our Story</Link>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <Link href="/solutions">Solutions</Link>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-gold cursor-pointer">
              <Link href="/get-in-touch">Get In Touch</Link>
            </li>
          </ul>
        )}

        {((scrolled && !menuOpen) || !scrolled) && (
          <p
            className={cn(
              "hover:text-gold cursor-pointer",
              "block md:hidden",
              scrolled ? "md:block" : "md:hidden"
            )}
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </p>
        )}
      </div>

      {/* SLIDING MENU / OVERLAY */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              key="overlay"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-screen h-screen bg-gold/30 z-[60]"
              onClick={() => setMenuOpen(false)}
            />

            <motion.div
              key="menu"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-screen h-screen bg-gold z-[70] flex flex-col items-center justify-center text-brown font-bebas-neue text-4xl lg:text-5xl space-y-8"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-3xl cursor-pointer"
              >
                ✕
              </button>

              <Link
                href="/"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                Home
              </Link>
              <Link
                href="/our-story"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                Our Story
              </Link>
              <Link
                href="/solutions"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                Solutions
              </Link>
              <Link
                href="/projects"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                Projects
              </Link>
              <Link
                href="/get-in-touch"
                onClick={() => setMenuOpen(false)}
                className="hover:text-white"
              >
                Get In Touch
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
