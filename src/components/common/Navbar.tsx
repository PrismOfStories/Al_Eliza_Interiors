"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoClose, IoCall, IoMail } from "react-icons/io5";
// import WhatsAppButton from "./WhatsAppButton";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";
import { useScrolled } from "@/lib/hooks/useScrolled";
import { cn } from "@/lib/utils/tailwind";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isHome = pathname === "/";

  const routes = [
    { name: "Home", href: "/" },
    { name: "Our Story", href: "/our-story" },
    { name: "Solutions", href: "/services" },
    { name: "Projects", href: "/Projects" },
    { name: "Get In Touch", href: "/get-in-touch" },
  ];

  const socialLinks = [
    { name: "Facebook", href: "https://facebook.com", icon: FaFacebookF },
    { name: "Instagram", href: "https://instagram.com", icon: FaInstagram },
    { name: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
  ];

  const isMobile = useMediaQuery("(max-width: 768px)");
  const isScrolled = useScrolled(50);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
          isScrolled ? "bg-black backdrop-blur-xs" : "bg-transparent py-2"
        }`}
      >
        <nav className=" mx-auto px-4 md:px-14 ">
          <div
            className={cn(
              "flex justify-between py-2",
              isHome && !isScrolled ? "items-start" : "items-center"
            )}
          >
            <div className="text-white text-xl font-bold">
              <Link href="/">
                <Image
                  src="/images/logo.webp"
                  alt="Al Eliza Interior Logo"
                  width={isScrolled || isMobile ? 60 : 110}
                  height={isScrolled || isMobile ? 60 : 110}
                  className="transition-all duration-300"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation and Buttons */}
            <div className="flex items-center space-x-6">
              <div
                className={cn(
                  "hidden md:flex transition-all duration-300",
                  isHome && !isScrolled
                    ? "flex-col space-y-2 "
                    : "flex-row  space-x-8"
                )}
              >
                {routes.map((route) => (
                  <Link
                    key={route.name}
                    href={route.href}
                    className={cn(
                      "relative cursor-pointer transform transition-all duration-200 ease-in-out group",
                      pathname === route.href ? "text-gold" : "text-white",
                      isScrolled
                        ? "text-lg lg:text-2xl font-bebas-neue tracking-wider"
                        : "text-lg lg:text-5xl font-bebas-neue tracking-wider"
                    )}
                  >
                    {route.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Hamburger Button */}
              <button
                onClick={toggleMenu}
                className="md:hidden text-white focus:outline-none z-60 relative cursor-pointer"
                aria-label="Toggle menu"
              >
                <HiOutlineMenuAlt3 className="w-8 h-8" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu with Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Mobile Menu Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-[#0d111a] bg-opacity-70 z-40 md:hidden"
              onClick={closeMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                duration: 0.5,
              }}
              className="fixed top-0 left-0 right-0 bg-[#0d111a] bg-opacity-95 backdrop-blur-md z-50 md:hidden"
            >
              <div className="flex justify-between items-center p-6 border-b border-gray-700">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.3 }}
                  className="text-white text-xl font-bold"
                >
                  <Image
                    src="/images/logo.webp"
                    alt="Al Eliza Interior Logo"
                    width={120}
                    height={120}
                    priority
                    className="h-16 w-16"
                  />
                </motion.div>

                <motion.button
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.3, duration: 0.3 }}
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={closeMenu}
                  className="text-white focus:outline-none p-2 cursor-pointer"
                  aria-label="Close menu"
                >
                  <IoClose className="h-8 w-8" />
                </motion.button>
              </div>

              <div className="flex flex-col px-6 py-4 h-full">
                {/* Routes Links Section */}
                <div className="flex-1 flex flex-col">
                  {routes.map((route, index) => (
                    <motion.div
                      key={route.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.4 + index * 0.1,
                        duration: 0.4,
                        type: "spring",
                        stiffness: 300,
                      }}
                      whileHover={{
                        x: 8,
                        scale: 1.02,
                        transition: {
                          type: "spring",
                          stiffness: 400,
                          damping: 10,
                        },
                      }}
                    >
                      <Link
                        href={route.href}
                        onClick={closeMenu}
                        className={`relative text-white text-2xl py-4 border-b border-gray-700 transition-all duration-200 ease-in-out block ${
                          pathname === route.href ? "text-gray-300" : ""
                        }`}
                      >
                        <span className="ml-2">{route.name}</span>

                        {pathname === route.href && (
                          <motion.span
                            initial={{ width: 0 }}
                            animate={{ width: "4px" }}
                            transition={{
                              delay: 0.5 + index * 0.1,
                              duration: 0.3,
                            }}
                            className="absolute left-0 top-1/2 transform -translate-y-1/2 h-8 bg-[#c38e24] "
                          />
                        )}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Contact Information Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.4 }}
                  className="px-3 py-8 border-t border-gray-700"
                >
                  <div className="text-white space-y-3">
                    <motion.div
                      whileHover={{ x: 4, scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        key="phone-link"
                        href="tel:+971522889300"
                        className="hover:underline text-white flex items-center space-x-3 text-lg transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        <IoCall className="h-5 w-5" />
                        <span>+971 52 288 9300</span>
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ x: 4, scale: 1.02 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      }}
                    >
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        key="email-link"
                        href="mailto:info@alelizainteriors.com"
                        className="hover:underline text-white flex items-center space-x-3 text-lg transition-colors duration-200"
                        onClick={closeMenu}
                      >
                        <IoMail className="h-5 w-5" />
                        <span>info@alelizainteriors.com</span>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Social Media Section - Bottom */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="px-3 py-6 border-t border-gray-700 mt-auto"
                >
                  <h3 className="text-white text-lg font-semibold mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-6">
                    {socialLinks.map((link, index) => {
                      const IconComponent = link.icon;
                      return (
                        <motion.div
                          key={link.name}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            delay: 1.0 + index * 0.1,
                            duration: 0.3,
                            type: "spring",
                            stiffness: 300,
                          }}
                          whileHover={{
                            scale: 1.2,
                            rotate: 10,
                            transition: {
                              type: "spring",
                              stiffness: 400,
                              damping: 10,
                            },
                          }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Link
                            href={link.href}
                            target="_blank"
                            onClick={closeMenu}
                            className="text-white text-2xl transition-all duration-200 ease-in-out"
                            aria-label={link.name}
                          >
                            <IconComponent />
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* WhatsApp Floating Button */}
      {/* <WhatsAppButton /> */}

      <style jsx>{`
        @keyframes slideInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}
