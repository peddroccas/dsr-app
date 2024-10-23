const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,tsx,ts}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: "Roboto",
        agdasima: "Agdasima",
        montserrat: "Montserrat",
      },
      colors: {
        "venice-blue": {
          DEFAULT: "#0C4B80",
          50: "#C4E1FA",
          100: "#B2D8F8",
          200: "#8DC5F4",
          300: "#67B2F1",
          400: "#429FED",
          500: "#1D8CEA",
          600: "#1377CB",
          700: "#0F61A5",
          800: "#0C4B80",
          900: "#072D4D",
          950: "#051E33",
        },
        ignara: {
          DEFAULT: "#E4252F",
          50: "#FCE8E9",
          100: "#F9D2D4",
          200: "#F4A9AD",
          300: "#EF7B81",
          400: "#EA535A",
          500: "#E4252F",
          600: "#BF1820",
          700: "#8D1118",
          800: "#5F0C10",
          900: "#2D0608",
          950: "#170304",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
