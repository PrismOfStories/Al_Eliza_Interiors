"use client";

import { useEffect, useRef, useState } from "react";
import Logo from "@public/images/logo.webp";
import { motion, useAnimation } from "framer-motion";
import Button from "./Button";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const logoSize = isMobile ? 100 : 150;
  const menuRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const lastScrollY = useRef(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      console.log(isScrollingDown);

      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        // ↓ Scroll down — hide
        if (!isScrollingDown) {
          setIsScrollingDown(true);
          controls.start({
            y: -150,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          });
        }
      } else if (currentScrollY < lastScrollY.current) {
        // ↑ Scroll up — show
        if (isScrollingDown) {
          setIsScrollingDown(false);
          controls.start({
            y: 0,
            transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
          });
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [controls, isScrollingDown]);

  useEffect(() => {
    if (!isActive) return;

    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsActive(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isActive]);

  return (
    <motion.div
      animate={controls}
      initial={{ y: 0 }}
      className="fixed left-0 top-0 z-50 w-full  px-4 pt-1 transition-transform duration-500 md:px-12"
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="">
          <Image
            src={Logo}
            alt="Al Eliza Interior Logo"
            width={logoSize}
            height={logoSize}
            className="transition-all duration-300"
            priority
          />
        </Link>

        {/* Menu Button + Nav */}
        <div
          ref={menuRef}
          className="relative mb-10 flex items-center justify-center"
        >
          <motion.div
            className="absolute right-0 top-0 overflow-hidden bg-[#161616]"
            animate={{
              width: isActive ? (isMobile ? "80vw" : "340px") : "100px",
              height: isActive ? (isMobile ? "60vh" : "410px") : "40px",
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
                  ? "h-full w-full [transform:skewX(20deg)]"
                  : "h-full w-full"
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
          />
        </div>
      </div>
    </motion.div>
  );
}
