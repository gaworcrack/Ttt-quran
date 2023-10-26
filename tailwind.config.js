/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dq-black': '#333',
        'dq-border': 'rgba(0,0,0,.05)',
      },
      fontFamily: {
        'lpmq': ['LPMQ'],
      },
    },
  },
  plugins: [],
}

