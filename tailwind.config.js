/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    fontFamily: {
      Nunito: ["Nunito Sans", "sans-serif"],
    },
    extend: {
      gridTemplateColumns: {
        "auto-cols": "repeat(auto-fit, minmax(264px, 1fr))",
      },
      colors: {
        dark_Blue_Dark_Mode_Elements: "hsl(209, 23%, 22%)",
        Very_Dark_Blue_Dark_Mode_Background: "hsl(207, 26%, 17%)",
        Very_Dark_Blue_Light_Mode_Text: "hsl(200, 15%, 8%)",
        Dark_Gray_Light_Mode_Input: "hsl(0, 0%, 52%)",
        very_Light_Gray_Light_Mode_Background: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
