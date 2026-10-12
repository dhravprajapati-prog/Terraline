import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MagneticLink from "./MagneticLink.jsx";

const MotionRouterLink = motion.create(Link);

const navigation = [
  { label: "Services", href: "/services", number: "01" },
  { label: "Projects", href: "/projects", number: "02" },
  { label: "Tech", href: "/services#technology", number: "03" },
  { label: "About", href: "/about", number: "04" },
];

const menuVariants = {
  closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } },
  open: { transition: { delayChildren: 0.12, staggerChildren: 0.08 } },
};

const linkVariants = {
  closed: { opacity: 0, y: 24 },
  open: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 32);
  });

  useEffect(() => {
    if (!isMenuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
            isScrolled || isMenuOpen
              ? "border-brand-gold/20 bg-bg-dark/90 shadow-[0_8px_30px_rgb(10_19_12_/_0.28)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label="Main navigation"
          className="section-shell flex min-h-[5rem] items-center justify-between gap-6"
        >
          <Link
            aria-label="Terraline Infra home"
            className="relative z-[60] flex min-h-11 shrink-0 items-center gap-2 text-bg-light sm:gap-3"
            to="/"
            onClick={closeMenu}
          >
            <img
              alt="Terraline Infra"
              className="h-10 w-10 rounded-full bg-bg-light p-1 object-contain"
              src={`${import.meta.env.BASE_URL}terraline-symbol.png`}
            />
            <span className="font-heading text-sm font-bold tracking-tight sm:text-lg">
              Terraline <span className="text-brand-gold">Infra</span>
            </span>
          </Link>

          <div className="hidden items-center gap-7 md:flex">
            {navigation.map((item) => (
              <Link
                className="min-h-11 content-center font-sans text-[11px] font-semibold uppercase tracking-[0.12em] text-bg-light/75 transition-colors hover:text-brand-gold"
                to={item.href}
                key={item.href}
              >
                {item.label}
              </Link>
            ))}
            <MagneticLink className="min-h-11 px-5" href="/contact">
              Estimate Project
            </MagneticLink>
          </div>

          <button
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            className="relative z-[60] grid h-11 w-11 shrink-0 place-items-center text-bg-light md:hidden"
            onClick={() => setIsMenuOpen((open) => !open)}
            type="button"
          >
            <span className="flex w-6 flex-col gap-2" aria-hidden="true">
              <motion.span
                animate={
                  isMenuOpen
                    ? { y: 5, rotate: 45 }
                    : { y: 0, rotate: 0 }
                }
                className="h-px w-full bg-current"
                transition={{ duration: 0.2 }}
              />
              <motion.span
                animate={
                  isMenuOpen
                    ? { y: -5, rotate: -45 }
                    : { y: 0, rotate: 0 }
                }
                className="h-px w-full bg-current"
                transition={{ duration: 0.2 }}
              />
            </span>
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-bg-dark px-6 pb-10 pt-28 text-bg-light md:hidden"
            exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -16 }}
            id="mobile-navigation"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -16 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.25,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-5 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-gold">
              Terraline Infra / Navigation
            </p>
            <motion.div
              animate="open"
              className="flex flex-1 flex-col"
              exit="closed"
              initial="closed"
              variants={
                prefersReducedMotion
                  ? { closed: {}, open: {} }
                  : menuVariants
              }
            >
              {navigation.map((item) => (
                <MotionRouterLink
                  className="flex min-h-[4.5rem] items-center gap-4 border-b border-bg-light/15 py-3 font-heading text-3xl font-bold text-bg-light transition-colors active:text-brand-gold"
                  to={item.href}
                  key={item.href}
                  onClick={closeMenu}
                  variants={
                    prefersReducedMotion
                      ? { closed: {}, open: {} }
                      : linkVariants
                  }
                >
                  <span className="font-sans text-xs font-medium text-brand-gold">
                    {item.number}
                  </span>
                  {item.label}
                  <span aria-hidden="true" className="ml-auto text-lg text-brand-gold">
                    &nearr;
                  </span>
                </MotionRouterLink>
              ))}
            </motion.div>
            <MagneticLink
              className="mt-8 min-h-14 w-full text-base"
              href="/contact"
            >
              Estimate Project <span aria-hidden="true">&rarr;</span>
            </MagneticLink>
            <p className="mt-8 font-sans text-xs uppercase tracking-[0.16em] text-bg-light/45">
              Gujarat, India
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
