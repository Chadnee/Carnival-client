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
        // more width font
        bebas: ['Bebas Neue', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
        anton: ['Anton', 'sans-serif'],
        blackHanSans: ['Black Han Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

