/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/blur2.png)",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        gray1: {
          200: "#E1E1E6",
          300: "#C4C4CC",
          400: "#8D8D99",
          500: "#323238",
          600: "#121214",
          700: "#121214",
          800: "#09090A",
        },
        green1: {
          500: "#00B37E",
          600: "#00875F",
          700: "#015F43",
        },
        blueIsh: {
          500: "#81D8F7",
        },
        warning: {
          500: "#FBA94C",
        },
        redError: {
          500: "#F75A68",
        },
      },
    },
  },
  plugins: [],
};
