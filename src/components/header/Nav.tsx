"use client";
import { motion } from "framer-motion";

const routes = [
  { title: "Home", href: "/" },
  { title: "Our Story", href: "/our-story" },
  { title: "Expertise", href: "/services" },
  { title: "Projects", href: "/Projects" },
  { title: "Contact", href: "/get-in-touch" },
];

const footerLinks = [
  {
    title: "Facebook",
    href: "https://m.facebook.com/p/Al-eliza-design-Studio-100086651834406/",
  },
  { title: "Instagram", href: "https://www.instagram.com/al_eliza_interiors/" },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/al-eliza-interior-5618aa274/%20",
  },
];

export default function Nav() {
  // const perspective = {
  //   initial: { opacity: 0, rotateX: 90, translateY: 80, translateX: -20 },
  //   enter: (i: number) => ({
  //     opacity: 1,
  //     rotateX: 0,
  //     translateY: 0,
  //     translateX: 0,
  //     transition: {
  //       duration: 0.65,
  //       delay: 0.5 + i * 0.1,
  //       ease: [0.215, 0.61, 0.355, 1],
  //     },
  //   }),
  //   exit: {
  //     opacity: 0,
  //     transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
  //   },
  // };

  // const slideIn = {
  //   initial: { opacity: 0, y: 20 },
  //   enter: (i: number) => ({
  //     opacity: 1,
  //     y: 0,
  //     transition: {
  //       duration: 0.5,
  //       delay: 0.75 + i * 0.1,
  //       ease: [0.215, 0.61, 0.355, 1],
  //     },
  //   }),
  //   exit: {
  //     opacity: 0,
  //     transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  //   },
  // };

  return (
    <div className="flex flex-col justify-between h-full p-8 sm:p-12 md:p-16 box-border">
      {/* Main links */}
      <div className="flex flex-col gap-4 md:gap-6">
        {routes.map((link, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              rotateX: 90,
              translateY: 80,
              translateX: -20,
            }}
            animate={{
              opacity: 1,
              rotateX: 0,
              translateY: 0,
              translateX: 0,
              transition: {
                duration: 0.65,
                delay: 0.5 + i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              },
            }}
          >
            <a
              className="text-white text-3xl sm:text-4xl md:text-[46px] font-semibold no-underline block"
              href={link.href}
            >
              {link.title}
            </a>
          </motion.div>
        ))}
      </div>

      {/* Footer links */}
      <motion.div className="flex flex-wrap mt-6 gap-x-2 gap-y-1 sm:gap-x-4 sm:gap-y-2">
        {footerLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.href}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.75 + i * 0.1,
                ease: [0.215, 0.61, 0.355, 1],
              },
            }}
            className="w-1/2 sm:w-1/4 text-base sm:text-xl text-white"
          >
            {link.title}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
}
