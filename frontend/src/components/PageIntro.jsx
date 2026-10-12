import { Link } from "react-router-dom";

import ScrollReveal from "./ScrollReveal.jsx";

export default function PageIntro({ eyebrow, title, description, chapter }) {
  return (
    <section className="page-intro relative isolate flex min-h-[27rem] items-end overflow-hidden bg-bg-dark pb-14 pt-32 text-bg-light sm:min-h-[32rem] sm:pb-16">
      <div aria-hidden="true" className="absolute inset-0">
        <div className="hero-topography absolute inset-0" />
        <div className="hero-geometry page-intro-geometry">
          <span className="hero-plane hero-plane-one" />
          <span className="hero-plane hero-plane-two" />
          <span className="hero-plane hero-plane-three" />
          <span className="hero-orbit hero-orbit-one" />
          <span className="hero-orbit hero-orbit-two" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,19,12,0.96)_0%,rgba(10,19,12,0.74)_52%,rgba(10,19,12,0.28)_100%)]" />
        <div className="absolute inset-x-4 bottom-4 top-20 rounded-2xl border border-bg-light/10 sm:inset-x-7 sm:bottom-7 sm:top-24" />
      </div>

      <ScrollReveal className="section-shell grid w-full gap-8 sm:grid-cols-[1fr_auto] sm:items-end">
        <div className="max-w-3xl">
          <p className="mb-5 flex items-center gap-3 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold sm:text-xs">
            <span aria-hidden="true" className="h-px w-8 bg-brand-gold" />
            {eyebrow}
          </p>
          <h1 className="text-balance font-heading text-4xl font-normal leading-[1.1] sm:text-6xl lg:text-7xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl font-sans text-sm leading-7 text-bg-light/75 sm:text-base sm:leading-8">
            {description}
          </p>
          <nav aria-label="Breadcrumb" className="mt-7 font-sans text-xs text-bg-light/50">
            <Link className="transition-colors hover:text-brand-gold" to="/">
              Home
            </Link>
            <span aria-hidden="true" className="px-2 text-brand-gold">
              /
            </span>
            <span aria-current="page" className="text-bg-light/80">
              {chapter}
            </span>
          </nav>
        </div>
        <span className="hidden font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-bg-light/55 sm:block">
          {chapter} <span className="ml-3 text-brand-gold">/ 04</span>
        </span>
      </ScrollReveal>
    </section>
  );
}
