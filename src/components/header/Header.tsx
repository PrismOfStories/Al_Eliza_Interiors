"use client";

import { useRef, useState } from "react";
import Logo from "@public/images/logo.webp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "./Button";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP);

export default function Header() {
  const [isActive, setIsActive] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");
  const logoSize = isMobile ? 100 : 150;
  const menuRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const menuContainerRef = useRef<HTMLDivElement>(null);

  const lastScrollY = useRef(0);
  const tickingRef = useRef(false);

  // GSAP context for scroll animation
  useGSAP(
    () => {
      const handleScroll = () => {
        if (!tickingRef.current) {
          tickingRef.current = true;

          window.requestAnimationFrame(() => {
            const currentScrollY = window.scrollY;

            // Scroll down - hide header
            if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
              gsap.to(headerRef.current, {
                y: -150,
                duration: 0.5,
                ease: "power3.out",
              });
            }
            // Scroll up - show header
            else if (currentScrollY < lastScrollY.current) {
              gsap.to(headerRef.current, {
                y: 0,
                duration: 0.5,
                ease: "power3.out",
              });
            }

            lastScrollY.current = currentScrollY;
            tickingRef.current = false;
          });
        }
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    },
    { scope: headerRef }
  );

  // GSAP context for menu animation
  useGSAP(
    () => {
      gsap.to(menuContainerRef.current, {
        width: isActive ? (isMobile ? "80vw" : "340px") : "100px",
        height: isActive ? (isMobile ? "60vh" : "410px") : "40px",
        top: isActive ? (isMobile ? "-10px" : "-25px") : "0px",
        right: isActive ? (isMobile ? "-10px" : "-25px") : "0px",
        skewX: isActive ? "0deg" : "-20deg",
        backgroundColor: isActive ? "#161616" : "rgba(0,0,0,0)",
        duration: 0.75,
        ease: "power3.inOut",
      });
    },
    { dependencies: [isActive, isMobile], scope: menuContainerRef }
  );

  // Click outside to close
  useGSAP(
    () => {
      if (!isActive) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
          setIsActive(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    },
    { dependencies: [isActive] }
  );

  return (
    <div
      ref={headerRef}
      className="fixed left-0 top-0 z-50 w-full px-4 pt-1 md:px-12"
      style={{ willChange: "transform" }}
    >
      <div className="flex items-center justify-between">
        <Link href="/">
          <Image
            src={Logo}
            alt="Al Eliza Interior Logo"
            width={logoSize}
            height={logoSize}
            className="transition-all duration-300"
            priority
          />
        </Link>

        <div
          ref={menuRef}
          className="relative mb-10 flex items-center justify-center"
        >
          <div
            ref={menuContainerRef}
            className="absolute right-0 top-0 overflow-hidden"
            style={{
              width: "100px",
              height: "40px",
              top: "0px",
              right: "0px",
              backgroundColor: "rgba(0,0,0,0)",
              willChange: "transform, width, height",
            }}
          >
            <div
              className={
                !isActive
                  ? "h-full w-full [transform:skewX(20deg)]"
                  : "h-full w-full"
              }
            >
              {isActive && <Nav closeMenu={() => setIsActive(false)} />}
            </div>
          </div>

          <Button
            isActive={isActive}
            toggleMenu={() => setIsActive(!isActive)}
          />
        </div>
      </div>
    </div>
  );
}
