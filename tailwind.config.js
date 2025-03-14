/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Kiwi-Maru", "serif"]
      }
    },
  },
  corePlugins: {
    preflight: false, // Disable Tailwind's default CSS reset
  },
  plugins: [],
}

