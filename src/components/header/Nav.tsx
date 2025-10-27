"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

gsap.registerPlugin(useGSAP);

const routes = [
  { title: "Home", href: "/" },
  { title: "Our Story", href: "/our-story" },
  { title: "Expertise", href: "/expertise" },
  { title: "Portfolio", href: "/portfolio" },
  { title: "Contact", href: "/get-in-touch" },
];

const footerLinks = [
  {
    title: "Facebook",
    href: "https://www.instagram.com/alelizainteriors?utm_source=qr&igsh=a3drank5cHZka2py",
    icon: <FaFacebookF className="h-7 w-7" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/al_eliza_interiors/",
    icon: <FiInstagram className="h-7 w-7" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/company/al-eliza/",
    icon: <SlSocialLinkedin className="h-7 w-7" />,
  },
];

interface NavProps {
  closeMenu?: () => void;
}

export default function Nav({ closeMenu }: NavProps) {
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  // Master timeline animation
  useGSAP(
    () => {
      const tl = gsap.timeline();
      const links = navLinksRef.current?.children;
      const socials = socialLinksRef.current?.children;

      if (links) {
        tl.fromTo(
          links,
          {
            opacity: 0,
            rotateX: 90,
            y: 80,
            x: -20,
            transformPerspective: 1000,
            transformOrigin: "top center",
          },
          {
            opacity: 1,
            rotateX: 0,
            y: 0,
            x: 0,
            duration: 0.65,
            stagger: 0.1,
            delay: 0.5,
            ease: "expo.out",
          }
        );
      }

      if (socials) {
        tl.fromTo(
          socials,
          {
            opacity: 0,
            y: 20,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.4)",
          },
          "-=0.3" // Overlap with previous animation
        );
      }
    },
    { scope: navRef }
  );

  return (
    <div
      ref={navRef}
      className="box-border flex h-full flex-col justify-between p-8 sm:px-12"
    >
      <div ref={navLinksRef} className="mt-6 flex flex-col gap-4 md:mt-14">
        {routes.map((link, i) => (
          <div key={i} style={{ transformOrigin: "top center" }}>
            <Link
              className={`exclusive-text text-md block font-semibold tracking-widest no-underline transition-colors duration-300 sm:text-2xl ${
                isActive(link.href) ? "text-gold" : "hover:text-gold text-white"
              }`}
              href={link.href}
              onClick={() => closeMenu?.()}
            >
              {link.title}
            </Link>
          </div>
        ))}
      </div>

      <div
        ref={socialLinksRef}
        className="mt-6 flex gap-x-2 gap-y-1 sm:gap-y-2"
      >
        {footerLinks.map((link, i) => (
          <div key={i} className="w-1/2 sm:w-1/4">
            <Link
              href={link.href}
              className="font-poppins hover:text-gold text-md block text-white sm:text-2xl"
              onClick={() => closeMenu?.()}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {link.icon}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
