/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "gradient-to-c":"radial-gradient(var(--tw-gradient-stops))"
      }

    },

  },
  plugins: [],
}