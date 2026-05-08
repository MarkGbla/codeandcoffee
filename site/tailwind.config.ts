import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#F2F3F3",
          yellow: "#FFEA00",
          yellowDeep: "#EACF00",
          ink: "#0A0A0A",
          muted: "#919191",
          accent: "#0099FF",
          teal: "#484E4E",
          tealDark: "#30403E",
          red: "#F64F50",
          mint: "#E6F2F1",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Manrope", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Bricolage Grotesque", "system-ui", "sans-serif"],
        scribble: ["var(--font-scribble)", "Gloria Hallelujah", "Comic Sans MS", "cursive"],
        inter: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        wrap: "1312px",
      },
      keyframes: {
        "marquee-up": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(0, -50%, 0)" },
        },
        "marquee-down": {
          "0%": { transform: "translate3d(0, -50%, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
        "marquee-left": {
          "0%": { transform: "translate3d(0, 0, 0)" },
          "100%": { transform: "translate3d(-50%, 0, 0)" },
        },
        "marquee-right": {
          "0%": { transform: "translate3d(-50%, 0, 0)" },
          "100%": { transform: "translate3d(0, 0, 0)" },
        },
      },
      animation: {
        "marquee-up": "marquee-up var(--marquee-duration, 40s) linear infinite",
        "marquee-down": "marquee-down var(--marquee-duration, 40s) linear infinite",
        "marquee-left": "marquee-left var(--marquee-duration, 40s) linear infinite",
        "marquee-right": "marquee-right var(--marquee-duration, 40s) linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
