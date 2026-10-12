import { Link } from "react-router-dom";

const services = [
  "Road & pavement surveys",
  "Pipeline corridor mapping",
  "Canal & water infrastructure",
];

const technologies = ["Drone LiDAR", "DGPS topography", "Pavement analysis"];
const locations = ["Sanand", "Dholera", "Bagodara"];

export default function Footer() {
  return (
    <footer className="editorial-section bg-bg-dark text-bg-light">
      <div className="section-shell scroll-mt-20 py-16 md:py-20">
        <div className="grid gap-12 border-b border-brand-gold/20 pb-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] lg:gap-8">
          <div className="max-w-sm">
            <Link
              aria-label="Terraline Infra home"
              className="inline-flex min-h-11 items-center"
              to="/"
            >
              <img
                alt="Terraline Infra"
                className="h-28 w-28 rounded-2xl bg-bg-light p-1.5 object-contain"
                loading="lazy"
                src="/terraline-logo.png"
              />
            </Link>
            <p className="mt-5 font-sans text-sm leading-6 text-bg-light/65">
              Precise survey intelligence and geospatial solutions for the
              infrastructure connecting communities and industry.
            </p>
            <p className="mt-5 font-sans text-xs font-medium uppercase tracking-[0.16em] text-brand-gold">
              Gujarat, India
            </p>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
              Useful Links
            </h2>
            <ul className="mt-5 space-y-3">
              {[
                ["About Us", "/about"],
                ["Our Services", "/services"],
                ["Latest Projects", "/projects"],
                ["Contact Us", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    className="font-sans text-sm leading-5 text-bg-light/70 transition-colors hover:text-brand-gold"
                    to={href}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
              Survey Services
            </h2>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li
                  className="font-sans text-sm leading-5 text-bg-light/70"
                  key={service}
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
              Gujarat Footprints
            </h2>
            <ul className="mt-5 space-y-3">
              {locations.map((location) => (
                <li
                  className="flex items-center gap-2 font-sans text-sm text-bg-light/70"
                  key={location}
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 rounded-full bg-brand-gold"
                  />
                  {location}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-sans text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">
              Survey Technology
            </h2>
            <ul className="mt-5 space-y-3">
              {technologies.map((technology) => (
                <li
                  className="font-sans text-sm leading-5 text-bg-light/70"
                  key={technology}
                >
                  {technology}
                </li>
              ))}
            </ul>
            <Link
              className="mt-6 inline-flex font-sans text-sm font-semibold text-brand-gold transition-colors hover:text-bg-light"
              to="/contact"
            >
              Contact us <span aria-hidden="true" className="ml-2">&rarr;</span>
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-6 font-sans text-xs text-bg-light/50 sm:flex-row sm:items-center sm:justify-between">
          <p>Copyright &copy; 2026 Terraline. All Rights Reserved.</p>
          <p>Surveying &bull; Geospatial &bull; Infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
