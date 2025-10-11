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
  const menuRef = useRef(null);

  // Calculate logo size - keep it stable
  const logoSize = isMobile ? 80 : isScrolled ? 80 : 110;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
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
    <div className="fixed top-4 left-4 right-4 z-50 px-4 md:px-12">
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
            className="rounded-[25px] bg-[#161616] absolute right-0 top-0"
            animate={{
              width: isActive ? (isMobile ? "90vw" : "380px") : "100px",
              height: isActive ? (isMobile ? "65vh" : "430px") : "40px",
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

          <Button
            isActive={isActive}
            toggleMenu={() => setIsActive(!isActive)}
          />
        </div>
      </div>
    </div>
  );
}
