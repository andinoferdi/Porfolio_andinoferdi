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
        black_primary: "#000000", // Warna hitam untuk menggantikan merah utama
        black_secondary: "#4D4D4D", // Warna hitam lebih terang untuk aksen
      },
      backgroundImage: {
        primaryLinear: "linear-gradient(180deg, #000000 0%, #4D4D4D 100%)", // Gradasi hitam
      },
      dropShadow: {
        primary: "-5px 35px 40px rgba(0, 0, 0, 0.9)", // Efek drop shadow hitam
      },
      boxShadow: {
        neon: "0 0 5px rgba(0, 0, 0, 0.8), 0 0 10px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 0, 0, 0.4)", // Efek neon hitam
      },
    },
  },
  plugins: [],
};
