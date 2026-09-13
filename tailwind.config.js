const { heroui } = require("@heroui/theme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        script: ["var(--font-script)", "cursive"],
      },
      colors: {
        accent: "#ff1744",
        crimson: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
          950: "#4c0519",
          accent: "#ff1744",
          wine: "#800020",
          dark: "#3d0213",
        },
      },
      boxShadow: {
        // Emil Kowalski Craft Shadows: Multi-layered, subtle contact + diffuse ambient occlusion
        "craft-subtle": "0 1px 2px 0 rgba(0, 0, 0, 0.04)",
        "craft-sm": "0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.03)",
        "craft-card": "0 1px 2px 0 rgba(0, 0, 0, 0.03), 0 6px 16px -2px rgba(0, 0, 0, 0.05)",
        "craft-card-hover": "0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 16px 32px -4px rgba(0, 0, 0, 0.08)",
        "craft-elevated": "0 2px 6px 0 rgba(0, 0, 0, 0.04), 0 20px 36px -4px rgba(0, 0, 0, 0.08)",
        "craft-float": "0 4px 12px 0 rgba(0, 0, 0, 0.05), 0 32px 64px -8px rgba(0, 0, 0, 0.12)",
        "craft-inner": "inset 0 1px 0 0 rgba(255, 255, 255, 0.9), 0 1px 2px 0 rgba(0, 0, 0, 0.04)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-100%, 0, 0)" },
        },
      },
      animation: {
        marquee: "marquee 35s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
};
