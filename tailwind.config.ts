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
        // Brand palette — warm neutrals, timber tones, Scandinavian restraint
        stone: {
          50:  "#fafaf9",
          100: "#f5f5f4",
          200: "#e7e5e4",
          300: "#d6d3d1",
          400: "#a8a29e",
          500: "#78716c",
          600: "#57534e",
          700: "#44403c",
          800: "#292524",
          900: "#1c1917",
        },
        timber: {
          50:  "#fdf8f0",
          100: "#f7edd8",
          200: "#edd9b0",
          300: "#dfc080",
          400: "#cfa050",
          500: "#b8832e",
          600: "#956520",
          700: "#714b18",
          800: "#4e3210",
          900: "#2c1c09",
        },
        sage: {
          50:  "#f4f7f4",
          100: "#e5ede5",
          200: "#c8d9c8",
          300: "#a3bfa3",
          400: "#789f78",
          500: "#567a56",
          600: "#425f42",
          700: "#334733",
          800: "#243024",
          900: "#161e16",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "1rem" }],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "88": "22rem",
        "128": "32rem",
      },
      maxWidth: {
        "8xl": "88rem",
        "9xl": "96rem",
      },
      letterSpacing: {
        widest: "0.25em",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
