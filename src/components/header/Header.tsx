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

  // Menu motion variants responsive
  // const menuVariants = {
  //   open: {
  //     width: isMobile ? "90vw" : "480px",
  //     height: isMobile ? "80vh" : "650px",
  //     top: isMobile ? "5vh" : "-25px",
  //     right: isMobile ? "5vw" : "-25px",
  //     transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  //   },
  //   closed: {
  //     width: "100px",
  //     height: "40px",
  //     top: "0px",
  //     right: "0px",
  //     transition: {
  //       duration: 0.75,
  //       delay: 0.35,
  //       type: "tween" as const,
  //       ease: [0.76, 0, 0.24, 1],
  //     },
  //   },
  // };

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
      <div className={"flex items-start justify-end gap-4 relative mt-3 "}>
        <motion.div
          className="rounded-[25px] bg-[#161616] w-hidden relative"
          animate={{
            width: isActive ? (isMobile ? "90vw" : "480px") : "100px",
            height: isActive ? (isMobile ? "80vh" : "650px") : "40px",
            top: isActive ? (isMobile ? "5vh" : "-25px") : "0px",
            right: isActive ? (isMobile ? "5vw" : "-25px") : "0px",
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
