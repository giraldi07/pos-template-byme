/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Use 'class' to control dark mode by adding/removing .dark class
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
          background: 'var(--bg-color)',  // Use CSS variables
          text: 'var(--text-color)',
          border: 'var(--border-color)',
          hover: 'var(--hover-bg-color)',
          primary: 'var(--primary-color)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Arial', 'sans-serif'], // Custom fonts
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out',
        slideIn: 'slideIn 0.4s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(150px, 1fr))',
      },
      screens: {
        xs: '480px', // Additional breakpoint
      },
    },
  },
  plugins: [
    import('@tailwindcss/forms'),
    import('@tailwindcss/typography'),
    import('@tailwindcss/aspect-ratio'),
  ],
};
