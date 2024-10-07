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
// import withMT from "@material-tailwind/react/utils/withMT";
 
// export default withMT({
//   content: [
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage:{
//                  "gradient-to-c":"radial-gradient(var(--tw-gradient-stops))"
//                }
//     },
//   },
//   plugins: [],
// });