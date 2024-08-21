/**
 * @format
 * @type {import('tailwindcss').Config}
 */

const flowbite = require("flowbite/plugin"); // Correctly import flowbite

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
  darkMode: "class",
};
