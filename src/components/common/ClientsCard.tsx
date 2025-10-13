"use client";

import React from "react";
import { motion } from "framer-motion";
import { logos } from "@/lib/static-data/about";
import Image from "next/image";

export default function ClientsCard() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center w-full text-xl leading-loose lg:text-4xl tracking-widest font-michroma font-medium text-gold-dark mb-10 lg:mb-20"
          >
            OUR PRESTIGIOUS CLIENTS
          </motion.p>
        </div>

        {/* Logo Grid */}
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
  );
}
