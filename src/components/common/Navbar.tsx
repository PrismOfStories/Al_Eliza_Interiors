"use client";

import { cn } from "@/lib/utils/tailwind";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`flex justify-between p-10 text-brown w-screen text-5xl font-bebas-neue fixed top-0 left-0 z-50 bg-transparent transition-colors duration-300 ${
        scrolled ? "bg-gold" : "bg-transparent"
      }`}
    >
      <p>logo </p>
      {scrolled ? (
        <p className="hover:text-gold cursor-pointer">
          <Link href="/">Menu</Link>
        </p>
      ) : (
        <ul
          className={cn("transition-all duration-300", {
            "flex flex-row space-x-8 space-y-0": scrolled,
            "space-y-2 flex flex-col": !scrolled,
          })}
        >
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
    </div>
  );
}
