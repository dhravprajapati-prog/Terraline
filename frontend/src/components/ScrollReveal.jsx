import { motion, useReducedMotion } from "framer-motion";

const revealEase = [0.22, 1, 0.36, 1];

export default function ScrollReveal({ children, className, delay = 0 }) {
  const prefersReducedMotion = useReducedMotion();
  const variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
        visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
      }
    : {
        hidden: { opacity: 0, y: 40, scale: 0.985, filter: "blur(6px)" },
        visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
      };

  return (
    <motion.div
      className={className}
      initial="hidden"
      transition={{
        duration: prefersReducedMotion ? 0 : 0.75,
        delay: prefersReducedMotion ? 0 : delay,
        ease: revealEase,
      }}
      variants={variants}
      viewport={{ once: true, amount: 0.18, margin: "0px 0px -56px 0px" }}
      whileInView="visible"
    >
      {children}
    </motion.div>
  );
}
