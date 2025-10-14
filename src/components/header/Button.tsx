"use client";
import { motion } from "framer-motion";

type ButtonProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

export default function Button({ isActive, toggleMenu }: ButtonProps) {
  return (
    <motion.div
      className="absolute top-0 right-0 cursor-pointer overflow-hidden [transform:skewX(-20deg)]"
      animate={{
        width: "100px",
        height: "40px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          onClick={toggleMenu}
          className="w-full h-full bg-gold flex justify-center items-center relative overflow-hidden group"
        >
          <div className="[transform:skewX(20deg)]">
            <PerspectiveText label="Menu" />
          </div>
        </div>

        <div
          onClick={toggleMenu}
          className="w-full h-full bg-gold flex justify-center items-center relative overflow-hidden group"
        >
          <div className="[transform:skewX(20deg)]">
            <PerspectiveText label="Close" textColor="text-white" />
          </div>
        </div>
      </motion.div>
    </motion.div>
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
      <motion.p
        className={`transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${textColor} uppercase group-hover:-translate-y-full group-hover:opacity-0 font-michroma tracking-widest`}
        animate={{
          fontSize: "0.875rem",
        }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.p>

      <motion.p
        className={`absolute bottom-0 transform -rotate-x-90 translate-y-[9px] opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] pointer-events-none ${textColor} uppercase group-hover:opacity-100 font-michroma tracking-widest`}
        animate={{
          fontSize: "0.875rem",
        }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.p>
    </div>
  );
}
