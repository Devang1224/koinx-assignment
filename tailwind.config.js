/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-heat": "linear-gradient(to right, red, orange, #74d955)",
        "gradient-primary":"linear-gradient(135deg, hsla(168, 100%, 50%, 0.828) 2%, hsla(217, 99%, 45%, 0.88) 93%)",
        "gradient-secondry":"linear-gradient(135deg, hsla(21, 92%, 61%, 1) 0%, hsla(6, 94%, 62%, 1) 80%)"
      },
      screens:{
        'sm-2':'400px',
        'md':'772px',
        'sm':'500px',
      },
      
    },
  },
  plugins: [],
};