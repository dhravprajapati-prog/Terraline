import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

export default function Layout() {
  const location = useLocation();
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    if (location.hash) {
      const targetId = decodeURIComponent(location.hash.slice(1));
      const frame = window.requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ block: "start" });
      });
      return () => window.cancelAnimationFrame(frame);
    }

    window.scrollTo(0, 0);
  }, [location.hash, location.pathname]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-brand-gold"
        style={{ scaleX: scrollYProgress }}
      />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          animate={{ opacity: 1, y: 0, scale: 1 }}
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 8,
            scale: prefersReducedMotion ? 1 : 0.995,
          }}
          key={location.pathname}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  );
}
