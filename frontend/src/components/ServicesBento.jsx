import { motion, useReducedMotion } from "framer-motion";
import { Link } from "react-router-dom";

import ScrollReveal from "./ScrollReveal.jsx";

const services = [
  {
    number: "01",
    title: "Topographic & Route Survey",
    description:
      "We conduct complete topographic surveys to identify terrain levels, natural features, obstacles, elevations, and road alignment options. This survey helps in route planning, design optimization, and determining the safest and most cost-effective road path.",
    image: "https://terralineinfra.com/assets/images/about/icon/report.png",
    alt: "Survey report icon",
    layout:
      "bg-text-dark text-bg-light lg:col-span-7 lg:min-h-[25rem]",
    secondaryText: "text-bg-light/70",
    imagePanel: "bg-bg-light/10",
  },
  {
    number: "02",
    title: "Traffic & Pavement Condition Survey",
    description:
      "Our team performs traffic volume surveys, axle load studies, and pavement condition surveys to evaluate road performance. This includes surface damage identification, rutting, cracking, roughness measurement, and traffic pattern analysis to support better road maintenance decisions.",
    image: "https://terralineinfra.com/assets/images/service/icons/traffic.png",
    alt: "Traffic survey icon",
    layout:
      "border border-text-dark/10 bg-bg-light text-text-dark lg:col-span-5 lg:min-h-[25rem]",
    secondaryText: "text-text-dark/70",
    imagePanel: "bg-brand-gold/10",
  },
  {
    number: "03",
    title: "Drone & GIS Mapping Services",
    description:
      "Using drone-based surveying and GIS mapping tools, we capture high-resolution imagery, 3D terrain models, and real-time mapping data. This enables faster, safer, and more accurate assessment of large road stretches, hills, and remote areas.",
    image: "https://terralineinfra.com/assets/images/service/icons/drone.png",
    alt: "Drone mapping icon",
    layout:
      "bg-brand-primary text-bg-light md:col-span-2 lg:col-span-12 lg:flex-row lg:items-center lg:gap-12",
    secondaryText: "text-bg-light/70",
    imagePanel: "bg-brand-gold/10",
  },
];

export default function ServicesBento() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="services-heading"
      className="editorial-section scroll-mt-20 bg-bg-light py-20 sm:py-28"
      id="services"
    >
      <ScrollReveal className="section-shell">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">Survey expertise, clearly delivered</p>
          <h2
            className="mt-4 font-heading text-3xl font-bold leading-tight text-text-dark sm:text-5xl"
            id="services-heading"
          >
            Accurate &amp; reliable road survey services.
          </h2>
          <p className="mt-5 font-sans leading-7 text-text-dark/70">
            Before any road or infrastructure project begins, precise
            surveying is essential. At Terraline, we specialize in delivering
            high-accuracy road surveys using modern equipment, GPS mapping,
            drone technology, and professional surveying practices. Our
            detailed reports help engineers, contractors, and authorities make
            informed decisions, reduce project risks, and ensure smooth
            execution from start to finish.
          </p>
        </div>

        <div
          className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5"
          id="technology"
        >
          {services.map((service, index) => (
            <motion.article
              className={`group relative flex min-h-[24rem] flex-col overflow-hidden rounded-2xl border border-brand-gold/10 p-6 shadow-card transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgb(20_47_30_/_0.16)] sm:rounded-3xl sm:p-8 lg:p-10 ${service.layout}`}
              key={service.number}
              initial={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 24,
                clipPath: prefersReducedMotion
                  ? "inset(0 0 0 0)"
                  : "inset(0 0 12% 0)",
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                clipPath: "inset(0 0 0 0)",
              }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.55,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full border border-brand-gold/15 transition-transform duration-700 group-hover:scale-125 sm:h-72 sm:w-72"
              />
              <div className="relative z-10 flex items-start justify-between">
                <span
                  className={`grid h-14 w-14 place-items-center rounded-sm p-3 ${service.imagePanel}`}
                >
                  <img
                    alt={service.alt}
                    className="h-full w-full object-contain"
                    decoding="async"
                    loading="lazy"
                    src={service.image}
                  />
                </span>
                <span className="font-heading text-sm font-bold text-brand-gold">
                  {service.number}
                </span>
              </div>

              <div className="relative z-10 mt-8 flex flex-1 flex-col lg:mt-auto">
                <h3 className="max-w-xl font-heading text-xl font-bold leading-snug sm:text-2xl">
                  {service.title}
                </h3>
                <p
                  className={`mt-4 max-w-3xl font-sans text-sm leading-6 ${service.secondaryText}`}
                >
                  {service.description}
                </p>
                <Link
                  className="mt-6 inline-flex min-h-11 items-center gap-2 self-start font-sans text-xs font-semibold uppercase tracking-[0.12em] text-brand-gold transition-[gap,color] hover:gap-3 hover:text-bg-light"
                  to="/contact"
                >
                  Discuss this service <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  );
}
