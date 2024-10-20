/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit', // Enable Just-in-Time mode
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', // Paths to all of your template files
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // Customize your theme here
      fontFamily: {
        custom1: ['"TTCommons"', 'TT Commons'], // Add your installed font name here
        custom2: ['"TTCommonsDemiBold"', 'TT Commons DemiBold'], // Add your installed font name here
        custom3: ['"TTCommonsLight"', 'TT Commons Light'], // Add your installed font name here
      },
    },
  },
  variants: {
    extend: {
      // Enable additional variants here
      
    },
  },
  plugins: [],
};
