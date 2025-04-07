/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          mining: {
            dark: '#1E293B',
            light: '#F8FAFC',
            gold: '#FFC107',
            copper: '#D97706',
            iron: '#9CA3AF',
            earth: '#78350F',
          },
        },
        fontFamily: {
          sans: ['var(--font-inter)', 'sans-serif'],
          heading: ['var(--font-montserrat)', 'sans-serif'],
        },
        // autres extensions...
      },
    },
    plugins: [],
  }