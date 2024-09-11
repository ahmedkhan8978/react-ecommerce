/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
    theme: {
      extend: {},
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px', // Ensure this is correctly set
        xl: '1280px',
        '2xl': '1536px',
      },
  
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    ],
}

