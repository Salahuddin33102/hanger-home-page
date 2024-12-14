/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        "Inter" : ["Inter", "sans-serif"]
      },
      colors:{
        "blue":"#00AEEF",
        "grey":"#9D9D9DE0",

      }
    },
  },
  plugins: [],
}

