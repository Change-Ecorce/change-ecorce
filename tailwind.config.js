/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Comfortaa', ...defaultTheme.fontFamily.sans],

        'comfortaa': ['Comfortaa', 'sans-serif'],
        'hk-grotesk': ['HK Grotesk', 'sans-serif'],
        'tt-milks': ['TT Milks Script', 'cursive'],
      },
      colors: {
        'brand-primary': '#1a202c',  // Exemple pour la première couleur
        'brand-secondary': '#CA5A47', // Deuxième couleur
        'brand-accent': '#0F3551',    // Troisième couleur
        'brand-neutral': '#DCEAE8',   // Quatrième couleur
        'brand-info': '#63b3ed',      // Cinquième couleur
        'brand-success': '#38a169',   // Sixième couleur

        'tarawera': '#0F3551',
        'provincial': '#F2E2D6',
        'cedar': '#CA5A47',
        'terra-cota': '#E8755E',
        'tranquil': '#DCEAE8',
        'bermuda': '#92CBC3',
      },
    },
    colors: {

      'tarawera': '#0F3551',
      'provincial': '#F2E2D6',
      'cedar': '#CA5A47',
      'terra-cota': '#E8755E',
      'tranquil': '#DCEAE8',
      'bermuda': '#92CBC3',

      // ...
    }
  },
  plugins: [],
}
