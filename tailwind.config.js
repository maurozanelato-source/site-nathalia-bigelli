/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        naval: {
          50: "#faf2ec",
          100: "#f2dfd0",
          200: "#e6c3a8",
          300: "#d7a47f",
          400: "#c8865c",
          500: "#b66b42",
          600: "#94512f",
          700: "#714026",
          800: "#4a2c1c",
          900: "#301c12",
        },
        mint: {
          50: "#fdf7ec",
          100: "#faeacc",
          200: "#f3d69c",
          300: "#eabd6c",
          400: "#dfa23e",
          500: "#c08a2e",
          600: "#8f5f14",
          700: "#6b4710",
          900: "#3d2909",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
