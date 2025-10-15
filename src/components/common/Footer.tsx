"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const menu = [
    { title: "Home", href: "/" },
    { title: "Our Story", href: "/our-story" },
    { title: "Expertise", href: "/expertise" },
    { title: "Portfolio", href: "/portfolio" },
    { title: "Contact", href: "/get-in-touch" },
  ];

  const services = [
    {
      title: "Residential & Commercial Designs",
    },
    {
      title: "Design Consultancy",
    },
    {
      title: "Virtual Reality 360° Designs",
    },
    {
      title: "Fit out Approvals",
    },
    {
      title: "Turnkey Fit out Projects",
    },
    {
      title: "Landscaping",
    },
    { title: "Maintenance" },
  ];

  return (
    <footer className="relative isolate w-full bg-[#161616] text-neutral-300">
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
            className="opacity-10"
          />
        </span>
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-24 pb-16">
        <div className="flex w-full items-center justify-center">
          <div className="text-center">
            <h1 className="select-none text-[2.25rem] tracking-[0.3rem] text-gold">
              <span className="font-semibold font-paragraph">AL ELIZA</span>
            </h1>
            <p className="mt-3 text-lg text-silver font-heading tracking-[0.3rem]">
              INTERIOR DESIGN
            </p>
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-3">
          <div>
            <h2 className="mb-6 text-lg font-medium text-silver tracking-[0.3rem] font-heading uppercase">
              Contact
            </h2>
            <div className="space-y-4 text-lg">
              <p className="max-w-sm text-neutral-400 font-paragraph tracking-[0.12rem]">
                Al Eliza Interior, FBL Business Center, Al Mamzar - Dubai -
                United Arab Emirates
              </p>

              <div className="mt-2 space-y-1">
                <Link
                  href="tel:+971522889300"
                  className="block text-neutral-400 hover:text-gold text-base sm:text-xl font-paragraph tracking-[0.12rem]"
                >
                  +971 522 889 300
                </Link>
                <Link
                  href="tel:+971543783000"
                  className="block  text-neutral-400 hover:text-gold text-base sm:text-xl font-paragraph tracking-[0.12rem]"
                >
                  +971 54 378 3000
                </Link>
              </div>
              <p className="font-paragraph tracking-[0.12rem]">
                <Link
                  href="mailto:info@alelizainteriors.com"
                  className="block text-neutral-400 hover:text-gold mt-2 text-base sm:text-xl"
                >
                  info@alelizainteriors.com
                </Link>
              </p>
            </div>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-medium text-silver font-heading uppercase tracking-[0.3rem]">
              Services
            </h3>
            <ul className="space-y-4 text-md font-paragraph tracking-[0.12rem] uppercase">
              {services.map((item) => (
                <li key={item.title}>
                  <Link
                    href="/expertise"
                    className="text-silver hover:text-gold"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-medium tracking-[0.3rem] text-silver font-heading uppercase">
              Menu
            </h3>
            <ul className="space-y-4 text-md font-paragraph tracking-[0.12rem] uppercase">
              {menu.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className={`inline-block ${
                      isActive(item.href) ? "text-gold" : "text-silver"
                    } hover:text-gold`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
        </div>
      </div>
    </footer>
  );
}
