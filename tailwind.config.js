/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        baseColor: "#2D2A37",
        historyColor: "#6B6B6B",
        ceColor: "#975DFA",
      },
      fontSize: {
        normal: "2.0rem",
        medium: "2.4rem",
        big: "3.6rem",
      },
    },
  },
  plugins: [],
};
