"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", menuOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [menuOpen]);

  return (
    <nav
      className={[
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "md:bg-white md:backdrop-blur-md text-3xl md:text-4xl"
          : "bg-transparent text-3xl md:text-5xl",
      ].join(" ")}
    >
      <div className="mx-auto max-w-[110rem] px-6 py-4">
        <div className="flex items-start justify-between text-brown font-bebas-neue">
          <p>Logo</p>

          {/* Desktop links */}
          <ul
            className={[
              "hidden md:flex transition-all duration-300",
              // Home: vertical at top, row after scroll; Other pages: always row
              isHome
                ? scrolled
                  ? "flex-row items-center space-x-8"
                  : "flex-col items-end space-y-4"
                : "flex-row items-center space-x-8",
            ].join(" ")}
          >
            <li className="hover:text-gold">
              <Link href="/">Home</Link>
            </li>
            <li className="hover:text-gold">
              <Link href="/our-story">Our Story</Link>
            </li>
            <li className="hover:text-gold">
              <Link href="/solutions">Solutions</Link>
            </li>
            <li className="hover:text-gold">
              <Link href="/projects">Projects</Link>
            </li>
            <li className="hover:text-gold">
              <Link href="/get-in-touch">Get In Touch</Link>
            </li>
          </ul>

          {/* Mobile menu button (always shown on small screens) */}
          <button
            onClick={() => setMenuOpen(true)}
            className="hover:text-gold text-2xl md:hidden"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </div>

      {/* Overlay / Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              key="overlay"
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 bg-gold/40 z-[60]"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu overlay"
            />
            <motion.div
              key="menu"
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
              className="fixed inset-0 bg-brown z-[70] flex flex-col items-center justify-center text-gold-dark font-bebas-neue text-4xl lg:text-5xl space-y-8"
            >
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-6 right-6 text-3xl"
                aria-label="Close menu"
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
    </nav>
  );
}
