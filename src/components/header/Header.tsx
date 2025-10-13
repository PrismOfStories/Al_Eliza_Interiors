"use client";

import { useEffect, useRef, useState } from "react";
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
  const menuRef = useRef<HTMLDivElement>(null);

  const logoSize = isMobile ? (isScrolled ? 60 : 100) : isScrolled ? 80 : 150;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        isActive
      ) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isActive]);

  return (
    <div
      className={`fixed left-0 right-0 z-50 px-4 md:px-12 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "pt-0 py-1 backdrop-blur-md bg-black/30"
          : "pt-4 backdrop-blur-none bg-transparent"
      }`}
    >
      <div className="flex items-start justify-between">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/logo.webp"
            alt="Al Eliza Interior Logo"
            width={logoSize}
            height={logoSize}
            className="transition-all duration-300"
            style={{ width: `${logoSize}px`, height: `${logoSize}px` }}
            priority
          />
        </Link>

        <div
          className="flex items-start justify-end gap-4 relative mt-3"
          ref={menuRef}
        >
          <motion.div
            className="bg-[#161616] absolute right-0 top-0 overflow-hidden"
            animate={{
              width: isActive
                ? isMobile
                  ? "80vw"
                  : "340px"
                : isScrolled
                ? "90px"
                : "100px",
              height: isActive
                ? isMobile
                  ? "60vh"
                  : "410px"
                : isScrolled
                ? "35px"
                : "40px",
              top: isActive ? (isMobile ? "-10px" : "-25px") : "0px",
              right: isActive ? (isMobile ? "-10px" : "-25px") : "0px",
              skewX: isActive ? "0deg" : "-20deg",
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
              skewX: "-20deg",
            }}
          >
            <div
              className={
                !isActive
                  ? "[transform:skewX(20deg)] w-full h-full"
                  : "w-full h-full"
              }
            >
              <AnimatePresence>
                {isActive && <Nav closeMenu={() => setIsActive(false)} />}
              </AnimatePresence>
            </div>
          </motion.div>

          <Button
            isActive={isActive}
            toggleMenu={() => setIsActive(!isActive)}
            isScrolled={isScrolled}
          />
        </div>
      </div>
    </div>
  );
}
