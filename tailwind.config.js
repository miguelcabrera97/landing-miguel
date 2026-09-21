/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    extend: {
      colors: {
        bg: "#0c0f13",
        surface: "#12161c",
        "surface-2": "#19202a",
        "surface-3": "#222b37",
        line: "rgba(181,195,208,0.09)",
        "line-strong": "rgba(181,195,208,0.18)",
        ink: "#e6ebf0",
        "ink-2": "#9aa6b2",
        "ink-3": "#7c8794",
        accent: "#28abe1",
        "accent-ink": "#04182a",
        signal: "#faa93d",
        danger: "#f2a48c",
      },
      fontFamily: {
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        sans: ["Geist", "system-ui", "sans-serif"],
        mono: ["Geist Mono", "ui-monospace", "monospace"],
      },
      borderRadius: { btn: "6px", box: "14px" },
      maxWidth: { page: "1240px" },
      zIndex: { header: "40", overlay: "50", skip: "60" },
      boxShadow: {
        warm: "0 1px 0 rgba(181,195,208,0.04) inset, 0 24px 48px -24px rgba(2,10,20,0.8)",
      },
    },
  },
  plugins: [],
};