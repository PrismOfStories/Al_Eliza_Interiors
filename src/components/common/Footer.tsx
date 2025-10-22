"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === href;
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
    { title: "Residential & Commercial Designs" },
    { title: "Design Consultancy" },
    { title: "Virtual Reality 360° Designs" },
    { title: "Fit out Approvals" },
    { title: "Turnkey Fit out Projects" },
    { title: "Landscaping" },
    { title: "Maintenance" },
  ];

  return (
    <footer className="w-full bg-[#161616] py-20 text-neutral-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-center gap-12 px-6 sm:items-start md:flex-row md:flex-wrap md:justify-between">
        {/* Logo */}
        <div className="flex flex-col items-center space-y-4 text-center md:min-w-[250px] md:items-start md:text-left">
          <Image
            src="/images/logo.webp"
            alt="Al Eliza Logo"
            width={200}
            height={200}
            className="h-40 w-auto object-contain"
          />
          <p className="max-w-[220px] text-sm leading-relaxed text-neutral-400">
            Transforming spaces into timeless works of art where creativity
            meets craftsmanship.
          </p>
        </div>

        {/* Menu */}
        <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
          <h3 className="text-silver font-heading mb-2 text-lg font-medium uppercase tracking-[0.3rem]">
            Menu
          </h3>
          <ul className="space-y-2 text-sm uppercase">
            {menu.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`${
                    isActive(item.href) ? "text-gold" : "text-silver"
                  } hover:text-gold`}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col items-center space-y-4 text-center md:items-start md:text-left">
          <h3 className="text-silver font-heading mb-2 text-lg font-medium uppercase tracking-[0.3rem]">
            Services
          </h3>
          <ul className="space-y-2 text-sm uppercase">
            {services.map((item) => (
              <li key={item.title}>
                <Link href="/expertise" className="text-silver hover:text-gold">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col items-center space-y-4 text-center md:min-w-[250px] md:items-start md:text-left">
          <h2 className="text-silver font-heading mb-2 text-lg font-medium uppercase tracking-[0.3rem]">
            Contact
          </h2>
          <p className="text-sm text-neutral-400">
            Al Eliza Interior, FBL Business Center,
            <br /> Al Mamzar - Dubai - United Arab Emirates
          </p>
          <div>
            <Link
              href="tel:+971522889300"
              className="hover:text-gold block text-neutral-400"
            >
              +971 522 889 300
            </Link>
            <Link
              href="tel:+971543783000"
              className="hover:text-gold block text-neutral-400"
            >
              +971 54 378 3000
            </Link>
          </div>
          <Link
            href="mailto:info@alelizainteriors.com"
            className="hover:text-gold block text-neutral-400"
          >
            info@alelizainteriors.com
          </Link>
        </div>
      </div>
    </footer>
  );
}
