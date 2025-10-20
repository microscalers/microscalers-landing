/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['ui-monospace','SFMono-Regular','Menlo','Monaco','Consolas','"Liberation Mono"','"Courier New"', 'monospace'],
      },
      colors: {
        microscale: {
          bg: "#000B0A",     // midnight black
          green: "#22C55E",  // neon green
          orange: "#F97316", // accent orange
          orangeDark: "#EA580C",
          silver: "#BFC6CA",
        }
      }
    },
  },
  plugins: [],
}
