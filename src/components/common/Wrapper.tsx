"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Preloader from "./Preloader";

interface WrapperProps {
  children: React.ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}
