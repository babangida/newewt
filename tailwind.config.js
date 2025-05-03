/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      colors: {
        primary: '#2E4A3D',
        background: '#F9F5EF',
        olive: '#A3B49C',
        accent: '#D9B47C',
        lightgreen: '#C9D6C1',
        border: '#D1D5DB',
        text: '#2E4A3D',
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
        playfair: ['var(--font-playfair)'], // ✅ добавили Playfair
      },
    },
  },
  plugins: [],
};