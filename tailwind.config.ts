import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "var(--color-bg)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        border: "var(--color-border)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        "accent-gold": "var(--color-accent-gold)",
        hud: "var(--color-hud)",
        grain: "var(--color-grain)",
      },
      fontFamily: {
        bebas: ["var(--font-bebas)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
        serif: ["var(--font-serif)"],
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, transparent 0%, #0A0A0A 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
