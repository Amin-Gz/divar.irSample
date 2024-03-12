/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        divar: "rgba(166, 38, 38, 0.56);",
        divarFont: "#0000008F",
        divarFontRed: "#a62626",
        borderColor: "#e5e7eb",
      },
    },
  },
  plugins: [],
};
