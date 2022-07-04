/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./components/**/*.{html,js}"
  ],
  theme: {
    extend: {},
    screens: {

      // 1.33:1 aspect ratios
      "xxs": "800px",   // 800x600 display
      "xs": "1024px",   // 1024x768 display

      // 16:9 aspect ratios
      "sm": "1280px",   // 720p
      "md": "1366px",   // 768p
      "lg": "1600px",   // 900p
      "xl": "1920px",   // 1080p
      "2xl": "2560px",  // 1440p
      "3xl": "3840px",  // 4k display
    },
  },
  plugins: [],
}