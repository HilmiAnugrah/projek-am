/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,php}", "./src/**/*.{html,php}"],
  theme: {
    extend: {
      colors: {
        body: "#F0F2F9",
        main: "#00BCF1",
        "main-purple": "#51218E",
        "main-yellow": "#FFBC00",
        "main-orange": "#F48120",
        "main-green" : "#77B341",
        "second-blue": "#0397C9",
        "dark-font"  : "#1F2D3D",
        "main-red"   :  "#FF3912",
        "second-green" : "#B1D136",
        "young-blue" :"#DAF7FF"
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
