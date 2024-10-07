/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-image": "url('/public/images/bg.svg')",
        "radial-gradient":
          "radial-gradient(circle, rgba(110, 191, 244, 0.08), rgba(110, 191, 244, 0.1))",
      },
    },
  },
  plugins: [],
};
