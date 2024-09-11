/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true, // Center the container
        padding: '3rem', // Add padding inside the container
      },
    },
  },
  plugins: [],
}