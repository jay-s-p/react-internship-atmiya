/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}", ],
  theme: {
    extend: {},
  },
  mode:"jit",
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          "base-200": "#ecf1f5",
          "base-300": "#dae3ea",
        },
      },
      "dark"
    ],
  },
  plugins: [require("daisyui")],
}

