"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
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
    <footer className="w-full bg-[#161616] py-16 text-neutral-300">
      <div
        className="
          mx-auto 
          flex 
          max-w-7xl 
          flex-col 
          items-center 
          justify-center 
          px-8   /* ✅ Added balanced side padding */
          gap-10 /* ✅ Reduced center spacing for mobile */
          sm:items-start 
          md:flex-row 
          md:justify-between 
          md:gap-8 /* ✅ Reduced desktop spacing */
        "
      >
        {/* Services */}
        <div className="order-1 flex flex-col items-center space-y-3 text-center md:order-none md:items-start md:text-left">
          <h3 className="text-silver font-paragraph mb-2 text-lg font-semibold uppercase tracking-[0.3rem]">
            Services
          </h3>
          <ul className="space-y-1 text-sm uppercase">
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
        <div className="order-2 flex flex-col items-center space-y-1 text-center md:order-none md:min-w-[230px] md:items-start md:text-left">
          <h2 className="text-silver font-paragraph mb-2 text-lg font-semibold uppercase tracking-[0.3rem]">
            Contact
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            Al Eliza Interior, FBL Business Center,
            <br /> Al Mamzar - Dubai - United Arab Emirates
          </p>
          <div>
            <Link
              href="tel:+971522889300"
              className="hover:text-gold block py-1 text-sm text-neutral-400"
            >
              +971 522 889 300
            </Link>
            <Link
              href="tel:+971543783000"
              className="hover:text-gold block py-1 text-sm text-neutral-400"
            >
              +971 54 378 3000
            </Link>
          </div>
          <Link
            href="mailto:info@alelizainteriors.com"
            className="hover:text-gold block text-sm text-neutral-400"
          >
            info@alelizainteriors.com
          </Link>
        </div>

        {/* Logo (last on mobile) */}
        <div className="order-3 flex flex-col items-center space-y-3 text-center md:order-none md:min-w-[220px] md:items-start md:text-left">
          <Image
            src="/images/logo.webp"
            alt="Al Eliza Logo"
            width={180}
            height={180}
            className="h-32 w-auto object-contain"
            crossOrigin="anonymous"
            referrerPolicy="no-referrer"
          />
          <p className="max-w-[220px] text-sm leading-relaxed text-neutral-400">
            Transforming spaces into timeless works of art where creativity
            meets craftsmanship.
          </p>
        </div>
      </div>
    </footer>
  );
}
