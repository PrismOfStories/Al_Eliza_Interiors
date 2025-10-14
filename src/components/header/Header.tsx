"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const isMobile = useMediaQuery("(max-width: 768px)");
  const menuRef = useRef<HTMLDivElement>(null);

  const logoSize = isMobile ? 100 : 150;

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
      className={`absolute top-0 w-full z-50 px-4 md:px-12 transition-all duration-300 ease-in-out pt-4`}
    >
      <div className="flex items-center justify-between">
        <Link href="/" className="">
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
          className="flex items-center justify-center mb-10 relative"
          ref={menuRef}
        >
          <motion.div
            className="bg-[#161616] absolute right-0 top-0 overflow-hidden"
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
          />
        </div>
      </div>
    </div>
  );
}
