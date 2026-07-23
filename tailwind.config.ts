import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1B33",
        paper: "#F5F7FA",
        accent: {
          DEFAULT: "#155EEF",
          dark: "#0D3FB0",
          light: "#EEF2FF",
        },
        success: "#22C55E",
        slate: {
          950: "#0F172A",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      backgroundImage: {
        "ribbon-grid":
          "radial-gradient(circle at 1px 1px, rgba(11,27,51,0.08) 1px, transparent 0)",
      },
      keyframes: {
        "count-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "wave-draw": {
          "0%": { strokeDashoffset: "1400" },
          "100%": { strokeDashoffset: "0" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "count-up": "count-up 0.6s ease-out forwards",
        "wave-draw": "wave-draw 2s ease-out forwards",
        "fade-up": "fade-up 0.7s ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
