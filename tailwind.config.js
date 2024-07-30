/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E74D11",
        secondary: "#f3f3f3",
        darkPrimary: "#0F0F0F",
        darkSecondary: "#3F3F3F",
      },
    },
  },
  plugins: [],
};
