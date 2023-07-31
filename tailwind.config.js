/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,php}", "./src/**/*.{html,php}"],
  theme: {
    extend: {
      colors: {
        body: "#F0F2F9",
        main: "#00BCF1",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
