/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class", // Enable dark mode
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      maxHeight: {
        "1/2": "50%",
        "3/4": "75%",
        "4/5": "80%",
        "9/10": "90%",
      },
    },
  },
  plugins: [],
};
