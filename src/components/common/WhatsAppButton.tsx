"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappUrl =
    "https://api.whatsapp.com/send/?phone=971543783000&text&type=phone_number&app_absent=0";

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: 0.2,
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        whileHover={{
          scale: 1.1,
          rotate: 5,
          transition: {
            type: "spring",
            stiffness: 400,
            damping: 10,
          },
        }}
        whileTap={{ scale: 0.95 }}
        aria-label="Contact us on WhatsApp"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#808080] shadow-lg transition-colors duration-200 hover:bg-green-600">
          <FaWhatsapp className="h-10 w-10 text-white" />
        </div>
      </motion.a>
    </motion.div>
  );
}
