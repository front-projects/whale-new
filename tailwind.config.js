/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "821px",
      lg: "1025px",
      xl: "1360px",
      "max-h-660": { raw: "(max-height: 660px)" },
    },
    extend: {},
  },
  plugins: [],
};
