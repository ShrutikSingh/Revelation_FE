/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Kiwi-Maru", "serif"],
        playfair: ["Playfair Display", "serif"],
      },
    },
  },
  corePlugins: {
    preflight: true, // Disable Tailwind's default CSS reset
  },
  plugins: [],
};
