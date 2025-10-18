"use client";
import { motion } from "framer-motion";

type ButtonProps = {
  isActive: boolean;
  toggleMenu: () => void;
};

export default function Button({ isActive, toggleMenu }: ButtonProps) {
  return (
    <motion.div
      className="absolute right-0 top-0 cursor-pointer overflow-hidden [transform:skewX(-20deg)]"
      animate={{
        width: "100px",
        height: "40px",
      }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <motion.div
        className="relative h-full w-full"
        animate={{ top: isActive ? "-100%" : "0%" }}
        transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <div
          onClick={toggleMenu}
          className="bg-gold group relative flex h-full w-full items-center justify-center overflow-hidden"
        >
          <div className="[transform:skewX(20deg)]">
            <PerspectiveText label="Menu" />
          </div>
        </div>

        <div
          onClick={toggleMenu}
          className="bg-gold group relative flex h-full w-full items-center justify-center overflow-hidden"
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
      className="transform-style-preserve-3d group-hover:rotate-x-90 flex h-full w-full flex-col items-center justify-center transition-transform duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.p
        className={`pointer-events-none transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${textColor} font-poppins uppercase tracking-widest group-hover:-translate-y-full group-hover:opacity-0`}
        animate={{
          fontSize: "0.875rem",
        }}
        transition={{ duration: 0.3 }}
      >
        {label}
      </motion.p>

      <motion.p
        className={`-rotate-x-90 pointer-events-none absolute bottom-0 translate-y-[9px] transform opacity-0 transition-all duration-[750ms] ease-[cubic-bezier(0.76,0,0.24,1)] ${textColor} font-poppins uppercase tracking-widest group-hover:opacity-100`}
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
