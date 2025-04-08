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
        primary: '#2E4A3D',     // Тёмно-зелёный
        background: '#F9F5EF',  // Песочный фон
        olive: '#A3B49C',       // Мягкий оливковый
        accent: '#D9B47C',      // Золотистый акцент
        lightgreen: '#C9D6C1',  // Светлый зелёный
        border: '#D1D5DB',
        text: '#2E4A3D',        // Цвет текста (под основной)
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}