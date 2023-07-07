/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        background: "#f7fee7",
        text: "#4d7c0f",
      },
    },
  },
  plugins: [],
};
