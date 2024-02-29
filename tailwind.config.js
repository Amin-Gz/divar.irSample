/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        divar: "rgba(166, 38, 38, 0.56);",
        divarfont: "#0000008F",
        bordercolor: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
