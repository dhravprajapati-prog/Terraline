import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";

import ScrollReveal from "./ScrollReveal.jsx";

const projects = [
  {
    number: "01",
    title: "Sanand Road Survey",
    location: "Sanand, Gujarat",
    description:
      "A detailed topographic and alignment survey conducted for road planning and infrastructure expansion in the Sanand region.",
  },
  {
    number: "02",
    title: "Dholera Road Survey",
    location: "Dholera SIR",
    description:
      "Comprehensive road survey executed to support upcoming development projects within the Dholera SIR zone, ensuring accurate route mapping.",
  },
  {
    number: "03",
    title: "Bagodara Road Survey",
    location: "Bagodara, Gujarat",
    description:
      "High-precision road survey carried out in Bagodara for future connectivity planning, terrain analysis, and infrastructure improvement.",
  },
  {
    number: "04",
    title: "Tarapur Road Survey",
    location: "Tarapur, Gujarat",
    description:
      "Complete road survey performed in Tarapur to assist in road widening, layout design, and accurate engineering assessment.",
  },
];

function ProjectFeatureImage() {
  const imageFrameRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: imageFrameRef,
    offset: ["start end", "end start"],
  });
  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? [1, 1] : [1.12, 1],
  );
  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    prefersReducedMotion ? ["0%", "0%"] : ["-4%", "4%"],
  );

  return (
    <div
      className="section-panel relative mt-10 h-64 bg-brand-primary sm:h-80"
      ref={imageFrameRef}
    >
      <motion.img
        alt="Road infrastructure project surveyed by Terraline"
        className="absolute inset-0 h-full w-full object-cover"
        decoding="async"
        loading="lazy"
        src="https://terralineinfra.com/assets/images/latestproject/latestproject.jpg"
        style={{ scale: imageScale, y: imageY }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-bg-dark/75 via-transparent to-transparent"
      />
      <p className="absolute bottom-5 left-5 font-sans text-xs font-semibold uppercase tracking-[0.16em] text-bg-light">
        Gujarat road network
      </p>
    </div>
  );
}

export default function ProjectsSection() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="projects-heading"
      className="editorial-section scroll-mt-20 bg-bg-light py-20 sm:py-28"
      id="projects"
    >
      <ScrollReveal className="section-shell">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <div>
            <p className="eyebrow">Latest projects</p>
            <h2
              className="mt-4 max-w-xl font-heading text-3xl font-bold leading-tight text-text-dark sm:text-5xl"
              id="projects-heading"
            >
              Latest road survey projects.
            </h2>
            <p className="mt-5 max-w-lg font-sans leading-7 text-text-dark/65">
              Survey work supporting road planning, development, and better
              connectivity across Gujarat.
            </p>

            <ProjectFeatureImage />
          </div>

          <div className="border-t border-text-dark/10">
            {projects.map((project, index) => (
              <motion.article
                className="group grid gap-4 border-b border-text-dark/10 py-6 transition-colors sm:grid-cols-[3rem_1fr] sm:gap-6 sm:py-8 sm:hover:border-brand-gold/60"
                key={project.number}
                initial={{
                  opacity: prefersReducedMotion ? 1 : 0,
                  x: prefersReducedMotion ? 0 : 18,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.45,
                  delay: prefersReducedMotion ? 0 : index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <span className="font-heading text-sm font-bold text-brand-gold">
                  {project.number}
                </span>
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
                    <h3 className="font-heading text-xl font-bold text-text-dark transition-colors group-hover:text-brand-primary sm:text-2xl">
                      {project.title}
                    </h3>
                    <span className="font-sans text-xs font-medium uppercase tracking-[0.1em] text-brand-primary">
                      {project.location}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl font-sans text-sm leading-6 text-text-dark/65">
                    {project.description}
                  </p>
                </div>
              </motion.article>
            ))}
            <Link
              className="button-primary mt-7"
              to="/contact"
            >
              Plan a road survey <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
