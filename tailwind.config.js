/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "social-icon": {
          "0%": {
            opacity: "0",
            transform: "translateX(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "menu-right": {
          "0%": {
            opacity: "0",
            transform: "translateX(100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
        "menu-left": {
          "0%": {
            opacity: "0",
            transform: "translateX(-100%)",
          },
          "100%": {
            opacity: "1",
            transform: "translateX(0)",
          },
        },
      },
      animation: {
        "social-icon": "social-icon 1s ease-in-out",
        "menu-right": "menu-right 0.5s ease-in-out",
        "menu-left": "menu-left 0.5s ease-in-out",
      },
    },
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      dark: "#18181b",
      primary: "#075985",
      secondary: "#07598569",
    },
  },
  plugins: [],
};
