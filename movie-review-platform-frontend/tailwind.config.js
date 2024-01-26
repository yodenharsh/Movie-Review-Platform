/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bg": "#001C30",
        "secondary-bg": "#176B87",
        primary: "#DAFFFB",
        secondary: "#64CCC5",
        "button-primary-bg": "rgb(233, 138, 144)",
      },
      fontFamily: {
        "olive-village": ["olive-village", "cursive"],
      },
    },
  },

  plugins: [],
};
