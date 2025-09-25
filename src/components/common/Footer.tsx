"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative isolate w-full bg-[#1f1f1f] text-neutral-300">
      {/* Watermark “S” on the right */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 flex items-center justify-end pr-10"
      >
        <span className="select-none font-serif text-[28rem] leading-none text-black/30">
          <Image
            src="/images/logo.webp"
            alt="Watermark S"
            width={450}
            height={450}
            className="opacity-30"
          />
        </span>
      </div>

      {/* Centered brand block */}
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="flex w-full items-center justify-center">
          <div className="text-center">
            <h1 className="select-none text-[2.25rem] tracking-[0.35em] text-neutral-200">
              {/* <span className="font-light">AL</span>{" "} */}
              <span className="font-semibold text-white">AL ELIZA</span>
            </h1>
            <p className="mt-3 text-xs tracking-[0.45em] text-neutral-400">
              INTERIOR DESIGN
            </p>
          </div>
        </div>
      </div>

      {/* Link columns */}
      <div className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          {/* Navigation */}
          <div>
            <h3 className="mb-6 text-lg font-medium tracking-wide text-neutral-400">
              Navigation
            </h3>
            <ul className="space-y-4 text-lg">
              <li>
                <Link
                  href="/"
                  className="inline-block text-neutral-200 underline underline-offset-4 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/our-story"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-lg font-medium tracking-wide text-neutral-400">
              Services
            </h3>
            <ul className="space-y-4 text-lg">
              <li className="text-neutral-400 hover:text-neutral-200">
                Residential & Commercial Designs
              </li>
              <li className="text-neutral-400 hover:text-neutral-200">
                Design Consultancy
              </li>
              <li className="text-neutral-400 hover:text-neutral-200">
                Virtual Reality 360° Designs
              </li>
              <li className="text-neutral-400 hover:text-neutral-200">
                Fit out Approvals
              </li>
              <li className="text-neutral-400 hover:text-neutral-200">
                Turnkey Fit out Projects
              </li>
              <li className="text-neutral-400 hover:text-neutral-200">
                Landscaping
              </li>
              <li className="text-neutral-400 hover:text-neutral-200">
                Maintenance
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-6 text-lg font-medium tracking-wide text-neutral-400">
              Contact
            </h3>
            <div className="space-y-4 text-lg">
              <p className="max-w-sm text-neutral-400">
                Al Eliza Interior, FBL Business Center, Al Mamzar - Dubai -
                United Arab Emirates
              </p>
              <p className="text-neutral-400">
                +971 522 889 300 <br />
                +971 54 378 3000
              </p>
              <p>
                <a
                  href="mailto:info@sarahbrown-design.com"
                  className="text-neutral-400 hover:text-neutral-200"
                >
                  info@alelizainteriors.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
