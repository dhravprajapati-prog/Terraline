import { motion, useReducedMotion } from "framer-motion";

import ScrollReveal from "./ScrollReveal.jsx";

const phases = [
  {
    number: "01",
    title: "Planning and Design",
    description:
      "We begin with detailed surveys, design approvals, and project planning to ensure the perfect alignment, load capacity, and durability for every road.",
    detail: "Survey • Alignment • Design",
  },
  {
    number: "02",
    title: "Execution & Construction",
    description:
      "With high-grade equipment and expert engineers, we deliver smooth, long-lasting roads with superior workmanship and on-time completion.",
    detail: "Engineering • Construction • Delivery",
  },
];

export default function ConstructionSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="editorial-section bg-brand-primary py-20 text-bg-light sm:py-28">
      <ScrollReveal className="section-shell">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
              Start building with Terraline
            </p>
            <h2 className="mt-4 max-w-xl font-heading text-3xl font-bold leading-tight sm:text-5xl">
              Roads built on a foundation of precision.
            </h2>
          </div>
          <p className="max-w-2xl font-sans leading-7 text-bg-light/75">
            Road construction is more than laying asphalt — it&apos;s a complete
            engineering process that includes surveying, planning, earthwork,
            drainage, paving, and final finishing.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {phases.map((phase) => (
            <motion.article
              className="rounded-2xl border border-bg-light/10 bg-bg-dark/15 p-7 shadow-[0_18px_48px_rgb(10_19_12_/_0.12)] sm:rounded-3xl sm:p-10"
              key={phase.number}
              initial={{
                opacity: prefersReducedMotion ? 1 : 0,
                y: prefersReducedMotion ? 0 : 20,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.55,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex items-center justify-between border-b border-bg-light/15 pb-5">
                <span className="font-heading text-3xl font-bold text-brand-gold">
                  {phase.number}
                </span>
                <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-bg-light/50">
                  {phase.detail}
                </span>
              </div>
              <h3 className="mt-6 font-heading text-xl font-bold sm:text-2xl">
                {phase.title}
              </h3>
              <p className="mt-4 font-sans leading-7 text-bg-light/70">
                {phase.description}
              </p>
            </motion.article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
