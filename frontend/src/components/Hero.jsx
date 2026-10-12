import { motion, useReducedMotion } from "framer-motion";

import MagneticLink from "./MagneticLink.jsx";

const revealEase = [0.22, 1, 0.36, 1];

function MagneticQuoteLink() {
  return (
    <MagneticLink
      href="/contact"
      className="min-h-14 min-w-48 px-8"
    >
      Contact Us
      <span aria-hidden="true" className="text-lg leading-none">
        &rarr;
      </span>
    </MagneticLink>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const reveal = (delay) => ({
    initial: { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: prefersReducedMotion
      ? { duration: 0 }
      : { duration: 0.9, delay, ease: revealEase },
  });

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[42rem] w-full items-center overflow-hidden bg-bg-dark text-bg-light sm:min-h-[48rem] lg:h-screen lg:min-h-[44rem]"
      id="home"
    >
      <div className="absolute inset-0" aria-hidden="true">
        {!prefersReducedMotion && (
          <video
            aria-hidden="true"
            autoPlay
            className="absolute inset-0 h-full w-full object-cover object-center"
            loop
            muted
            playsInline
            preload="metadata"
          >
            <source
              src={`${import.meta.env.BASE_URL}terraline-hero.mp4`}
              type="video/mp4"
            />
          </video>
        )}
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(10,19,12,0.72)_0%,rgba(10,19,12,0.46)_40%,rgba(10,19,12,0.06)_78%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(10,19,12,0.34)_0%,transparent_28%,rgba(10,19,12,0.08)_100%)]"
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 bottom-4 top-20 z-[1] rounded-2xl border border-bg-light/10 sm:inset-x-7 sm:bottom-7 sm:top-24 lg:inset-x-10 lg:bottom-10"
      />

      <div className="section-shell relative z-10 flex w-full items-center py-32 sm:py-36">
        <div className="max-w-4xl">
          <motion.p
            {...reveal(0.12)}
            className="mb-5 flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold sm:text-xs"
          >
            <span className="h-px w-8 bg-brand-gold" />
            Delivering accuracy that shapes the future
          </motion.p>

          <div className="overflow-hidden">
            <motion.h1
              id="hero-heading"
              {...reveal(0.24)}
              className="max-w-4xl text-balance font-heading text-[2.65rem] font-normal leading-[1.08] text-bg-light sm:text-6xl md:text-7xl lg:text-[4.8rem]"
            >
              Your trusted partner
              <span className="mt-2 block font-sans text-[0.58em] font-semibold uppercase tracking-[0.07em] text-brand-gold sm:mt-4">
                in road survey excellence
              </span>
            </motion.h1>
          </div>

          <motion.p
            {...reveal(0.38)}
            className="mt-7 max-w-xl font-sans text-sm leading-7 text-bg-light/75 sm:text-base sm:leading-8"
          >
            Accurate terrain mapping and route analysis to help engineers,
            architects, and contractors plan and build with confidence.
          </motion.p>

          <motion.div
            {...reveal(0.52)}
            className="mt-8 flex flex-col gap-3 min-[420px]:flex-row"
          >
            <MagneticQuoteLink />
            <a
              className="inline-flex min-h-14 items-center justify-center gap-2 rounded-full border border-bg-light/40 px-7 font-sans text-sm font-semibold text-bg-light transition-colors hover:border-brand-gold hover:text-brand-gold"
              href="#services"
            >
              Our Services <span aria-hidden="true">&rarr;</span>
            </a>
          </motion.div>
          <motion.div
            {...reveal(0.64)}
            aria-label="Surveying, geospatial, infrastructure"
            className="mt-12 flex flex-wrap items-center gap-2"
          >
            {["Surveying", "Geospatial", "Infrastructure"].map((discipline, index) => (
              <span
                className="flex min-h-8 items-center gap-2 rounded-full border border-bg-light/15 bg-bg-dark/20 px-3 font-sans text-[9px] font-medium uppercase tracking-[0.11em] text-bg-light/65 sm:text-[10px]"
                key={discipline}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    index === 0 ? "bg-brand-gold" : "bg-brand-primary"
                  }`}
                />
                {discipline}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-12 right-10 z-10 hidden items-center gap-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-bg-light/55 lg:flex">
        Gujarat, India <span className="h-px w-10 bg-brand-gold/70" /> 01 / 04
      </div>
    </section>
  );
}
