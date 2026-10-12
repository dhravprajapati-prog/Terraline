/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        "bg-light": "rgb(var(--color-bg-light-rgb) / <alpha-value>)",
        "text-dark": "rgb(var(--color-text-dark-rgb) / <alpha-value>)",
        "brand-primary": "rgb(var(--color-brand-primary-rgb) / <alpha-value>)",
        "brand-gold": "rgb(var(--color-brand-gold-rgb) / <alpha-value>)",
        "bg-dark": "rgb(var(--color-bg-dark-rgb) / <alpha-value>)",
      },
      fontFamily: {
        heading: ["Merriweather", "Georgia", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 16px 48px rgb(20 47 30 / 0.10)",
      },
      letterSpacing: {
        "eyebrow": "0.16em",
      },
      maxWidth: {
        content: "80rem",
      },
    },
  },
  plugins: [],
};
