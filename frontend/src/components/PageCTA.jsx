import { Link } from "react-router-dom";

import ScrollReveal from "./ScrollReveal.jsx";

export default function PageCTA({ title, description }) {
  return (
    <section className="editorial-section bg-brand-primary py-16 text-bg-light sm:py-20">
      <ScrollReveal className="section-shell grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
        <div className="max-w-3xl">
          <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-gold">
            Precision mapped to progress
          </p>
          <h2 className="mt-3 font-heading text-2xl font-bold leading-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 max-w-2xl font-sans text-sm leading-7 text-bg-light/70">
            {description}
          </p>
        </div>
        <Link className="button-primary justify-self-start sm:justify-self-end" to="/contact">
          Estimate your project <span aria-hidden="true">&rarr;</span>
        </Link>
      </ScrollReveal>
    </section>
  );
}
