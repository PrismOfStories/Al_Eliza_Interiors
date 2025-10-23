"use client";
import { motion } from "framer-motion";
import { useState } from "react";

type ButtonProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

export default function Button({ isActive, toggleMenu }: ButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const topLineY = isActive ? 0 : isHovered ? -8 : -5;
  const bottomLineY = isActive ? 0 : isHovered ? 8 : 5;

  return (
    <motion.div
      className="absolute -top-5 right-0 cursor-pointer overflow-hidden [transform:skewX(-20deg)]"
      animate={{ width: "68px", height: "68px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={toggleMenu}
    >
      <div className="group relative flex h-full w-full items-center justify-center bg-transparent [transform:skewX(20deg)]">
        <motion.span
          className="bg-gold absolute left-1/2 top-1/2 h-[3px] w-[36px] -translate-x-1/2"
          animate={{ rotate: isActive ? 45 : 0, y: topLineY }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
        <motion.span
          className="bg-gold absolute left-1/2 top-1/2 h-[3px] w-[36px] -translate-x-1/2"
          animate={{ rotate: isActive ? -45 : 0, y: bottomLineY }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  );
}
