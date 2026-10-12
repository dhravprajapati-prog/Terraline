import { useAnimationFrame } from "framer-motion";
import Lenis from "lenis";
import { useEffect, useRef } from "react";

export default function SmoothScroll({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const hasFinePointer = window.matchMedia("(pointer: fine)");
    const lenis = new Lenis({
      autoRaf: false,
      smoothWheel: !prefersReducedMotion.matches && hasFinePointer.matches,
      syncTouch: false,
      anchors: true,
    });
    lenisRef.current = lenis;

    const handleVisibilityChange = () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  useAnimationFrame((time) => {
    lenisRef.current?.raf(time);
  });

  return children;
}
