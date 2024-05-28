/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      padding: {
        "9/16": "56.25%", // This is the aspect ratio for 16:9
      },
    },
  },
  plugins: [],
};
