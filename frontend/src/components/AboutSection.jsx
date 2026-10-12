import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";

import ScrollReveal from "./ScrollReveal.jsx";

const metrics = [
  { value: 2000, display: "2K+", label: "Survey reports delivered" },
  { value: 20, display: "20+", label: "Major projects surveyed" },
  { value: 10, display: "10+", label: "Years of experience" },
  { value: 10, display: "10+", label: "Road corridors mapped" },
];

function Metric({ value, display, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.7 });
  const count = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const rounded = useTransform(count, (latest) => Math.round(latest));
  const formatted = useTransform(rounded, (latest) =>
    value >= 1000 ? `${(latest / 1000).toFixed(latest === 2000 ? 0 : 1)}K+` : `${latest}+`,
  );

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: prefersReducedMotion ? 0 : 1.6,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [count, isInView, prefersReducedMotion, value]);

  return (
    <motion.div
      className="border-l border-brand-gold/60 pl-4 sm:pl-5"
      initial={{
        opacity: prefersReducedMotion ? 1 : 0,
        y: prefersReducedMotion ? 0 : 16,
      }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <span aria-hidden="true" className="mb-2 block h-7 w-7 text-brand-primary">
        <svg viewBox="0 0 24 24" fill="none" className="h-full w-full">
          <path
            d="M4 19.5h16M6.5 16V9m5.5 7V4.5m5.5 11.5v-5"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
          <path
            d="M4 6.5h4M10 20v-2m5 2v-2m5 2v-2"
            stroke="#D4AF37"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <p
        className="font-heading text-3xl font-bold leading-none text-brand-primary sm:text-4xl"
        ref={ref}
      >
        <motion.span>{isInView ? formatted : display}</motion.span>
      </p>
      <p className="mt-3 max-w-[12rem] font-sans text-xs leading-5 text-text-dark/65 sm:text-sm">
        {label}
      </p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section
      aria-labelledby="about-heading"
      className="editorial-section scroll-mt-20 bg-bg-light py-20 sm:py-28"
      id="about"
    >
      <ScrollReveal className="section-shell">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <p className="eyebrow">Built on reliable data</p>
            <h2
              className="mt-4 max-w-2xl font-heading text-3xl font-bold leading-tight text-text-dark sm:text-5xl"
              id="about-heading"
            >
              Your trusted road survey partner.
            </h2>
            <p className="mt-6 font-sans text-base leading-7 text-text-dark/75">
              At <strong className="font-semibold text-text-dark">Terraline</strong>,
              we specialize in delivering highly accurate road and
              infrastructure survey solutions that form the foundation of every
              successful construction project. With a commitment to precision,
              reliability, and modern technology, we help engineers, architects,
              and contractors make informed decisions through detailed and
              trustworthy survey data. From terrain mapping to route analysis,
              our surveys ensure smoother planning, reduced risks, and better
              project outcomes.
            </p>
          </div>
          <div className="section-panel relative min-h-[19rem] bg-brand-primary sm:min-h-[25rem]">
            <img
              alt="Terraline road and infrastructure survey team at work"
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
              loading="lazy"
              src="https://terralineinfra.com/assets/images/about/aboutbg.jpg"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-bg-dark/5 to-transparent"
            />
            <p className="absolute bottom-6 left-6 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bg-light sm:bottom-8 sm:left-8">
              Precision on every stretch
            </p>
            <span
              aria-hidden="true"
              className="absolute right-5 top-5 h-12 w-12 border-r border-t border-brand-gold sm:right-8 sm:top-8 sm:h-16 sm:w-16"
            />
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-y-9 border-t border-text-dark/10 pt-9 sm:mt-20 sm:grid-cols-4 sm:gap-6 sm:pt-12">
          {metrics.map((metric) => (
            <Metric {...metric} key={metric.label} />
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
