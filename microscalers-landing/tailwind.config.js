/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./styles/**/*.{css,scss}"
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
        ],
      },
      colors: {
        microscale: {
          bg: "#000B0A",
          green: "#22C55E",
          orange: "#F97316",
          orangeDark: "#EA580C",
          silver: "#BFC6CA",
        },
      },
    },
  },
  plugins: [],
};
