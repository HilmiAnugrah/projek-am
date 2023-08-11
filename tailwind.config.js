/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,php}", "./src/**/*.{html,php}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: ['"Open Sans"'],
      },
      colors: {
        body: "#F0F2F9",
        main: "#00BCF1",
        "main-purple": "#51218E",
        "main-yellow": "#FFBC00",
        "main-orange": "#F48120",
        "main-green": "#77B341",
        "second-blue": "#0397C9",
        "dark-font": "#1F2D3D",
        "main-red": "#FF3912",
        "second-green": "#B1D136",
        "young-blue": "#DAF7FF",
      },
      boxShadow: {
        main: "0px 18.078041076660156px 35.09267044067383px -21.26828384399414px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
