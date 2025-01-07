/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
      Paprika: "Paprika",
      Inria: "Inria Serif",
    },
    container: {
      center: true,
      padding: "4rem",
    },
    extend: {
      colors: {
        dark_primary: "#000000", // Hitam sebagai warna utama
        bg_light_primary: "#E5E5E5", // Warna background
        gray: "#808080", // Warna abu-abu
        red_primary: "#FF0000", // Warna merah untuk nuansa utama
        red_secondary: "#FF4D4D", // Warna merah lebih terang untuk aksen
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #FF0000 0%, #990000 100%)", // Gradasi merah
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(255, 0, 0, 0.9)", // Efek drop shadow merah
      },
      boxShadow: {
        neon: "0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.6), 0 0 15px rgba(255, 255, 255, 0.4)",
      },
    },
  },
  plugins: [],
};
