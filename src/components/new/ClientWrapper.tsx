"use client";

import { ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "../common/Preloader";
import Header from "../header/Header";
import SmoothScroll from "../common/SmoothScroll";
import Footer from "../common/Footer";

let hasShownPreloader = false;

export default function ClientWrapper({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(!hasShownPreloader);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!hasShownPreloader) {
      const timer = setTimeout(() => {
        setLoading(false);
        hasShownPreloader = true;
        setShowContent(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <Preloader />}</AnimatePresence>

      {showContent && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            <Header />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <SmoothScroll />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {children}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <Footer />
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
