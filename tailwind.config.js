/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        sourceSansPro: ['Source Sans Pro', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        titilliumWeb: ['Titillium Web', 'sans-serif'],
        robotoThin: ['Roboto', 'sans-serif', '100'],
        robotoLight: ['Roboto', 'sans-serif', '300'],
        bebas: ['Bebas Neue', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        blackHanSans: ['Black Han Sans', 'sans-serif'],
      },
      animation: {
        slideUpAndDown: 'slideUpAndDown 10s ease-in-out infinite', // Adjusted animation duration to 6s
      },
      keyframes: {
        slideUpAndDown: {
          '0%, 25%, 100%': { transform: 'translateY(100%)', opacity: 0 }, // Element is off-screen for the first 1.5s and last 1.5s
          '50%, 75%': { transform: 'translateY(0%)', opacity: 1 },   // Element is fully visible for the middle 3s
        },
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}
