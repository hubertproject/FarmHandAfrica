/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'],
        yeseva: ['Yeseva One', 'cursive'],
        raleway: ["Raleway", "cursive"],
        aclonica: ["Aclonica", "cursive"],
      },
      colors: {
        primary: "#2a41e8",
        second:"#007bff",
        green: "#008000",
        white: "#FFFFFF",
        lightGreen:"#90EE90",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
