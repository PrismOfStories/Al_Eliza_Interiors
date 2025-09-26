"use client";
import { motion } from "framer-motion";

type ButtonProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

export default function Button({ isActive, toggleMenu }: ButtonProps) {
  return (
    <div className="absolute top-0 right-0 w-[100px] h-[40px] cursor-pointer rounded-[25px] overflow-hidden">
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        {/* Menu Element */}
        <div
          onClick={toggleMenu}
          className="w-full h-full bg-[#b48c37] flex justify-center  items-center relative overflow-hidden group  "
        >
          <PerspectiveText label="Menu" />
        </div>

        {/* Close Element */}
        <div
          onClick={toggleMenu}
          className="w-full h-full bg-gold flex justify-center items-center relative overflow-hidden group"
        >
          <PerspectiveText label="Close" textColor="text-white" />
        </div>
      </motion.div>
    </div>
  );
}

type PerspectiveTextProps = {
  label: string;
  textColor?: string;
};

function PerspectiveText({
  label,
  textColor = "text-white",
}: PerspectiveTextProps) {
  return (
    <div
      className="flex flex-col justify-center items-center h-full w-full transform-style-preserve-3d transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:rotate-x-90"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* First Text */}
      <p
        className={`transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]  pointer-events-none ${textColor} uppercase group-hover:-translate-y-full group-hover:opacity-0 font-michroma tracking-widest`}
      >
        {label}
      </p>

      {/* Second Text */}
      <p
        className={`absolute bottom-0 transform -rotate-x-90 translate-y-[9px] opacity-0  transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${textColor} uppercase group-hover:opacity-100 font-michroma tracking-widest`}
      >
        {label}
      </p>
    </div>
  );
}
