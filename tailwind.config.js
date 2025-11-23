/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["M PLUS Rounded 1c", "sans-serif"], // The craftz.dog font!
        serif: ["M PLUS Rounded 1c", "sans-serif"], // Use same for consistency or keep a serif if needed
        brush: ["M PLUS Rounded 1c", "sans-serif"], // Keep consistent
      },
      colors: {
        paper: "#fcfaf7", // Rice Paper (Warmer)
        ink: "#2b2b2b", // Soft Charcoal Ink (Not pure black)
        cinnabar: "#8c2f25", // Traditional Seal Red (Accent)
        "cinnabar-light": "#b94b40",
        stone: {
          50: "#f9f8f6",
          100: "#f2efeb",
          200: "#e6e0d8",
          300: "#d1c5b8",
          400: "#b0a090",
          500: "#8f7e6d",
          600: "#6e5f50",
          700: "#52463a",
          800: "#3d342b",
          900: "#26201a",
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
      },
    },
  },
  plugins: [],
}
