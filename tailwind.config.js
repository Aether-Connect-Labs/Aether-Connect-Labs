/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'acl-neon': '#00ffcc', // Example neon color
        'acl-dark': '#0a0a0a',
      },
    },
  },
  plugins: [],
}
