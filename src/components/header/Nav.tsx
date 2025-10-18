"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaFacebookF } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";

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
    href: "https://m.facebook.com/p/Al-eliza-design-Studio-100086651834406/",
    icon: <FaFacebookF className="h-7 w-7" />,
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/al_eliza_interiors/",
    icon: <FiInstagram className="h-7 w-7" />,
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/al-eliza-interior-5618aa274/%20",
    icon: <SlSocialLinkedin className="h-7 w-7" />,
  },
];

interface NavProps {
  closeMenu?: () => void;
}

export default function Nav({ closeMenu }: NavProps) {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };
  return (
    <div className="box-border flex h-full flex-col justify-between p-8 sm:px-12">
      <div className="mt-14 flex flex-col gap-4">
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
            <Link
              className={`exclusive-text block text-xl font-semibold tracking-widest no-underline transition-colors duration-300 sm:text-2xl ${
                isActive(link.href) ? "text-gold" : "hover:text-gold text-white"
              }`}
              href={link.href}
              onClick={() => closeMenu?.()}
            >
              {link.title}
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div className="mt-6 flex gap-x-2 gap-y-1  sm:gap-y-2">
        {footerLinks.map((link, i) => (
          <motion.div
            key={i}
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
            className="w-1/2 sm:w-1/4"
          >
            <Link
              href={link.href}
              className="font-poppins hover:text-gold  block text-xl text-white sm:text-2xl"
              onClick={() => closeMenu?.()}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={
                link.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
            >
              {link.icon}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
