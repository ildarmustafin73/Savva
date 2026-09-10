import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        "surface-alt": "rgb(var(--color-surface-alt) / <alpha-value>)",
        text: {
          primary: "rgb(var(--color-text-primary) / <alpha-value>)",
          secondary: "rgb(var(--color-text-secondary) / <alpha-value>)",
        },
        "accent-soft": "rgb(var(--color-accent-soft) / <alpha-value>)",
        wood: "rgb(var(--color-wood) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        olive: "rgb(var(--color-olive) / <alpha-value>)",
        "olive-deep": "rgb(var(--color-olive-deep) / <alpha-value>)",
        "olive-ink": "rgb(var(--color-olive-ink) / <alpha-value>)",
        "on-olive": "rgb(var(--color-on-olive) / <alpha-value>)",
        "on-dark": "rgb(var(--color-on-dark) / <alpha-value>)",
        "on-dark-soft": "rgb(var(--color-on-dark-soft) / <alpha-value>)",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        arabic: ["var(--font-arabic)", "serif"],
      },
      maxWidth: {
        content: "1440px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        widest2: "0.28em",
      },
      transitionTimingFunction: {
        soft: "cubic-bezier(0.22, 1, 0.36, 1)",
        emphasized: "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      boxShadow: {
        depth: "var(--shadow-border)",
        "depth-hover": "var(--shadow-border-hover)",
      },
    },
  },
  plugins: [],
};

export default config;
