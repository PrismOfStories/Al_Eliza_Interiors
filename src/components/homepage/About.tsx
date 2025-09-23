"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import { motion, Transition, useInView } from "framer-motion";

export default function About() {
  const [order, setOrder] = useState(initialOrder);

  // ref for the entire section
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const inView = useInView(sectionRef, { amount: 0.7, once: true }); // easier trigger
  // Only start shuffling while in view
  useEffect(() => {
    if (!inView) return; // pause when not in view
    const timeout = setTimeout(() => setOrder(shuffle(order)), 1500);
    return () => clearTimeout(timeout);
  }, [order, inView]);

  return (
    <section
      ref={sectionRef}
      className="bg-background py-24  px-4 md:px-8 lg:px-16 min-h-screen flex flex-col justify-center"
    >
      <div className="w-full max-w-[90rem] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* TEXT */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}} // only animate when in view
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="space-y-4"
            >
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight">
                <span className="text-brown">YOUR </span>
                <span className="text-gold italic">DREAMS</span>
                <span className="text-brown">,</span>
                <br />
                <span className="text-brown">OUR </span>
                <span className="text-gold italic">EXPERTISE</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="space-y-6 text-gray-700 text-lg leading-relaxed max-w-xl"
            >
              <p>
                <span className="text-amber-600 italic font-medium">
                  Established in 2021
                </span>
              </p>

              <p>
                At{" "}
                <span className="text-amber-600 italic font-medium">
                  Al Eliza Interior Design
                </span>
                , we transform residential and commercial spaces into refined,
                functional environments. Our designs elevate mood, enhance
                utility, and add lasting value. Collaborating closely, we craft{" "}
                <span className="text-amber-600 italic font-medium">
                  elegant yet practical
                </span>{" "}
                interiors that leave remarkable first impressions.
              </p>

              <p>
                Ready to begin?{" "}
                <span className="text-amber-600 italic font-medium">
                  Contact us
                </span>{" "}
                to bring your vision to life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="pt-4"
            >
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-medium transition-colors duration-300 group">
                Tell us about your project
                <svg
                  className="inline-block ml-3 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </motion.div>
          </div>

          {/* IMAGE GRID */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-full"
          >
            <motion.ul
              layout
              className=" hidden lg:flex flex-wrap gap-2 w-[900px] justify-center items-center "
            >
              {order.map((imgUrl) => (
                <motion.li
                  key={imgUrl}
                  layout
                  transition={spring}
                  className="w-[300px] h-[300px] rounded-lg overflow-hidden relative"
                >
                  <Image
                    src={imgUrl}
                    alt="Gallery image"
                    fill
                    className="object-cover"
                  />
                </motion.li>
              ))}
            </motion.ul>

            {/* mobie view */}
            <motion.ul
              layout
              className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full justify-center items-center  lg:hidden"
            >
              {order.map((imgUrl) => (
                <motion.li
                  key={imgUrl}
                  layout
                  transition={spring}
                  className="
                    relative aspect-square w-full 
                    overflow-hidden rounded-lg
                  "
                >
                  <Image
                    src={imgUrl}
                    alt="Gallery image"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw,
                           (max-width: 1024px) 33vw,
                           300px"
                  />
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// helpers
function shuffle([...array]: string[]) {
  return array.sort(() => Math.random() - 0.5);
}

const initialOrder = [
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375128/about_1_zi61v1.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_2_ucqtyb.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/about_3_tp5mmt.webp",
  "https://res.cloudinary.com/dxhmpdgqj/image/upload/v1753375127/img2_oziylz.webp",
];

const spring: Transition = {
  type: "spring",
  damping: 25,
  stiffness: 150,
};
