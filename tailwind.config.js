/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: '"Roboto", sans-serif',
        poppins: '"Poppins", sans-serif',
      },
      colors: {
        dark: "#242424",
        "blue-250": "#AEBBFD",
        "green-250": "#B2EDD3",
        "orange-250": "#FDCAAE",
        "green-dark": "#232323",
      },
      boxShadow: {
        main: "3px 4px 0px 0px",
      },
      borderWidth: {
        1.5: "1.5px",
      },
    },
  },
  plugins: [],
};
