/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{ts,tsx}",
  "./components/**/*.{ts,tsx}",
  "./app/**/*.{ts,tsx}",
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const prefix = "";
export const theme = {
  fontFamily: {
    lex: ["Lexend", "sans-serif"],
    cuba: ["Playwrite CU", "cursive"],
  },
  colors: {
    ggSilver: "#D0D9D4",
    ggPurple: "#594058",
    ggBlue: "#0388A6",
    ggBrownLight: "#8C5637",
    ggBrownDark: "#402718",
    ggWhite: "#F9F9F9",
    ggTransparent: "rgba(0,0,0,0)",
  },
};
export const extend = {
  backgroundImage: {
    "grassBG": "url('/images/backgrounds/grass.svg')",
    "footer-texture": "url('/img/footer-texture.png')",
  },
};
export const plugins = [import("tailwindcss"), import("autoprefixer")];
