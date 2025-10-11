"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const isScrolled = useScrolled(50);
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="fixed top-4 left-4 right-4 z-50 flex items-start justify-between px-4 md:px-12">
      {/* Logo */}
      <Link href="/">
        <Image
          src="/images/logo.webp"
          alt="Al Eliza Interior Logo"
          width={isScrolled || isMobile ? 80 : 110}
          height={isScrolled || isMobile ? 80 : 110}
          className="transition-all duration-300"
          priority
        />
      </Link>

      {/* Menu + Button */}
      <div className="flex items-start justify-end gap-4 relative mt-3">
        <motion.div
          className="rounded-[25px] bg-[#161616] w-hidden relative"
          animate={{
            width: isActive ? (isMobile ? "60vw" : "380px") : "100px",
            height: isActive ? (isMobile ? "55vh" : "430px") : "40px",
            // Only animate position on desktop
            ...(!isMobile && {
              top: isActive ? "-25px" : "0px",
              right: isActive ? "-25px" : "0px",
            }),
            transition: {
              duration: 0.75,
              type: "tween",
              ease: [0.76, 0, 0.24, 1],
            },
          }}
          initial={{
            width: "100px",
            height: "40px",
            top: "0px",
            right: "0px",
          }}
        >
          <AnimatePresence>
            {isActive && <Nav closeMenu={() => setIsActive(false)} />}
          </AnimatePresence>
        </motion.div>

        <Button isActive={isActive} toggleMenu={() => setIsActive(!isActive)} />
      </div>
    </div>
  );
}
