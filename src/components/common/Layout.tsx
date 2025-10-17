"use client";

import { Fragment, ReactNode, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Preloader from "../common/Preloader";
import Header from "../header/Header";
import Footer from "../common/Footer";
import SmoothScrollProvider from "../common/SmoothScroll";

let hasShownPreloader = false;

export default function Layout({ children }: { children: ReactNode }) {
  const [loading, setLoading] = useState(!hasShownPreloader);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (!hasShownPreloader) {
      const timer = setTimeout(() => {
        setLoading(false);
        hasShownPreloader = true;
        setShowContent(true);
      }, 1500); // Preloader visible for 1s
      return () => clearTimeout(timer);
    } else {
      // If already shown, skip instantly
      setShowContent(true);
    }
  }, []);

  return (
    <Fragment>
      <AnimatePresence mode="wait">
        {loading && <Preloader key="preloader" />}
      </AnimatePresence>

      {showContent && (
        <motion.div
          key="main-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <SmoothScrollProvider>
            <Header />
            {children}
            <Footer />
          </SmoothScrollProvider>
        </motion.div>
      )}
    </Fragment>
  );
}
