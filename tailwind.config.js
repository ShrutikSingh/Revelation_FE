/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Kiwi-Maru", "serif"],
        playfair: ["Playfair Display", "serif"],
        stencil: ["Big Shoulders Stencil", "sans-serif"], 
        tektur : ["Tektur", "sans-serif"]
      },
    },
  },
  corePlugins: {
    preflight: true, // Disable Tailwind's default CSS reset if needed
  },
  plugins: [],
};
