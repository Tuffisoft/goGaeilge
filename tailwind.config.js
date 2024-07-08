/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ggLight: "#D0D9D4",
      ggBlue: "#0388A6",
      ggPurple: "#594058",
      ggBrownDark: "#402718",
      ggBrownLight: "#8C5637",
    },
    fontFamily: {
      lex: ["Lexend", "sans-serif"],
    },

    extend: {},
  },
  plugins: [],
};
