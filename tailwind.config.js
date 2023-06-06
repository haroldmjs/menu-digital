/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 1s infinite'
      },
      colors: {
        primary: '#B06B42',
        primaryBackground: '#B06B42',
        black: '#1E1E1E',
        gray: '#717171',
        grayBackground: '#dbdbdb'
      }
    }
  },
  plugins: []
}
