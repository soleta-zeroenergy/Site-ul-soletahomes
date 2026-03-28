import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./styles/**/*.css",
  ],
  theme: {
    extend: {
      colors: {
        // ── Canonical Soleta brand tokens ───────────────────────────────────
        soleta: {
          bg:     "#F3EFE9",
          ink:    "#1E1B16",
          accent: "#99775C",
          cream:  "#F7F4EE",
          forest: "#2E3A34",
          gold:   "#BDA180",
        },

        // ── Brand palette — updated to match soleta-accent (#99775C) ────────
        brand: {
          50:  "#faf8f5",
          100: "#f2ede6",
          200: "#e4d9cc",
          300: "#cfc0ad",
          400: "#b59a83",
          500: "#99775C",  // PRIMARY — soleta-accent
          600: "#7d5f47",
          700: "#644b37",
          800: "#453326",
          900: "#271d15",
        },

        // ── sand: warm neutral grey ─────────────────────────────────────────
        sand: {
          50:  "#fafaf9",
          100: "#f5f4f2",
          200: "#ece9e5",
          300: "#dedad5",
          400: "#D5D2CD",
          500: "#b8b4ae",
          600: "#9a9590",
          700: "#7a756f",
          800: "#55524d",
          900: "#302e2b",
        },

        // ── ivory: warm white scale ─────────────────────────────────────────
        ivory: {
          50:  "#ffffff",
          100: "#fdfcfb",
          200: "#faf8f6",
          300: "#F7F4EE",   // ≈ soleta-cream
          400: "#F3EFE9",   // ≈ soleta-bg
          500: "#e0dbd3",
        },

        // ── Semantic text tokens ────────────────────────────────────────────
        text: {
          primary:   "#1E1B16",   // soleta-ink
          secondary: "#4a4440",
          muted:     "#8a837c",
          inverse:   "#F7F4EE",   // soleta-cream
          brand:     "#99775C",   // soleta-accent
        },

        // ── Semantic border tokens ──────────────────────────────────────────
        border: {
          light:   "#ece9e5",
          DEFAULT: "#D5D2CD",
          strong:  "#b0aba5",
        },
      },

      fontFamily: {
        heading:  ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
        subtitle: ["var(--font-inter)",     "Inter", "Helvetica Neue", "system-ui", "sans-serif"],
        body:     ["var(--font-inter)",     "Inter", "Helvetica Neue", "system-ui", "sans-serif"],
        ui:       ["var(--font-inter)",     "Inter", "Helvetica Neue", "system-ui", "sans-serif"],
        sans:     ["var(--font-inter)",     "Inter", "Helvetica Neue", "system-ui", "sans-serif"],
        serif:    ["var(--font-cormorant)", "Cormorant Garamond", "Georgia", "serif"],
      },

      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
        "display-2xl": ["clamp(4rem, 8vw, 7rem)",     { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl":  ["clamp(3rem, 5vw, 5rem)",     { lineHeight: "1.08", letterSpacing: "-0.025em" }],
        "display-lg":  ["clamp(2.25rem, 4vw, 3.5rem)", { lineHeight: "1.1",  letterSpacing: "-0.02em" }],
      },

      spacing: {
        "18":  "4.5rem",
        "22":  "5.5rem",
        "88":  "22rem",
        "112": "28rem",
        "128": "32rem",
        "144": "36rem",
      },

      maxWidth: {
        "site": "1320px",
        "8xl":  "88rem",
        "9xl":  "96rem",
      },

      letterSpacing: {
        widest:  "0.25em",
        display: "-0.03em",
      },

      lineHeight: {
        editorial: "1.7",
        display:   "1.05",
      },

      animation: {
        "fade-up":  "fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in":  "fadeIn 0.5s ease-out forwards",
        "slide-in": "slideIn 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideIn: {
          "0%":   { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
