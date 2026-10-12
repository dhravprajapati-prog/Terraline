import { motion, useReducedMotion } from "framer-motion";

import ScrollReveal from "./ScrollReveal.jsx";

export default function MissionVisionSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-label="Our mission and vision"
      className="editorial-section bg-bg-light py-20 sm:py-28"
    >
      <ScrollReveal className="section-shell">
        <div className="section-panel grid border-brand-gold/15 bg-bg-dark lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-72 bg-brand-primary sm:min-h-[30rem]">
            <img
              alt="Terraline's vision for accurate, reliable infrastructure development"
              className="absolute inset-0 h-full w-full object-cover"
              decoding="async"
              loading="lazy"
              src="https://terralineinfra.com/assets/images/vision/vision.jpg"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-bg-dark/75 via-bg-dark/10 to-transparent"
            />
            <p className="absolute bottom-6 left-6 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-bg-light">
              Mapping the way forward
            </p>
          </div>

          <div className="p-7 sm:p-10 lg:p-14">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
              The principles behind every survey
            </p>
            <div className="mt-8 grid gap-8">
              <motion.article
                initial={{
                  opacity: prefersReducedMotion ? 1 : 0,
                  y: prefersReducedMotion ? 0 : 16,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
              >
                <h2 className="font-heading text-2xl font-bold text-bg-light">
                  Our Mission
                </h2>
                <p className="mt-4 font-sans text-sm leading-7 text-bg-light/70">
                  Our mission is to provide high-quality surveying services
                  that combine accuracy, efficiency, and transparency. We are
                  committed to understanding every project&apos;s unique needs
                  and delivering clear, actionable survey results that support
                  better planning and execution. Through continuous innovation,
                  skilled expertise, and strong client relationships, we ensure
                  that our surveys contribute to safer, faster, and more
                  reliable infrastructure development.
                </p>
              </motion.article>

              <div className="h-px bg-brand-gold/25" />

              <motion.article
                initial={{
                  opacity: prefersReducedMotion ? 1 : 0,
                  y: prefersReducedMotion ? 0 : 16,
                }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  delay: prefersReducedMotion ? 0 : 0.08,
                }}
              >
                <h2 className="font-heading text-2xl font-bold text-bg-light">
                  Our Vision
                </h2>
                <p className="mt-4 font-sans text-sm leading-7 text-bg-light/70">
                  To shape the future of infrastructure with precise,
                  trustworthy survey intelligence — helping every project move
                  forward with safer routes, smarter planning, and enduring
                  results.
                </p>
              </motion.article>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
