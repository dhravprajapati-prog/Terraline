import { motion, useReducedMotion, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

const MotionRouterLink = motion.create(Link);

export default function MagneticLink({ children, className, href }) {
  const linkRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const isRoute = href.startsWith("/");
  const LinkComponent = isRoute ? MotionRouterLink : motion.a;
  const destinationProps = isRoute ? { to: href } : { href };
  const x = useSpring(0, { stiffness: 180, damping: 18, mass: 0.35 });
  const y = useSpring(0, { stiffness: 180, damping: 18, mass: 0.35 });

  const handlePointerMove = (event) => {
    if (
      prefersReducedMotion ||
      (event.pointerType !== "mouse" && event.pointerType !== "pen") ||
      !linkRef.current
    ) {
      return;
    }

    const bounds = linkRef.current.getBoundingClientRect();
    x.set((event.clientX - bounds.left - bounds.width / 2) * 0.14);
    y.set((event.clientY - bounds.top - bounds.height / 2) * 0.14);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <LinkComponent
      className={`group relative isolate inline-flex min-h-12 items-center justify-center gap-2 overflow-hidden rounded-full border border-brand-gold bg-brand-gold px-6 py-3 font-sans text-sm font-semibold text-bg-dark shadow-[0_0_0_0_rgb(212_175_55_/_0)] transition-[box-shadow,border-color] duration-300 hover:border-brand-gold hover:shadow-[0_0_28px_rgb(212_175_55_/_0.28)] focus-visible:outline-brand-gold ${className || ""}`}
      {...destinationProps}
      onPointerLeave={reset}
      onPointerMove={handlePointerMove}
      ref={linkRef}
      style={{ x, y }}
      whileHover={prefersReducedMotion ? undefined : { scale: 1.025 }}
      whileTap={prefersReducedMotion ? undefined : { scale: 0.98 }}
    >
      <motion.span
        aria-hidden="true"
        className="absolute inset-0 z-0 origin-left bg-bg-light"
        initial={{ scaleX: 0 }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scaleX: 1 }}
      />
      <span className="relative z-10">{children}</span>
    </LinkComponent>
  );
}
