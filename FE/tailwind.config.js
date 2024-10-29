/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F95454",
        secondary: "#0D0842",
        blackBG: "F3F3F3",
        Fav: "#F58541",
      },
      fontFamily: {
        primary: ["Monospace", "sans-serif"],
        secondary: ["Nunito Sans", "sans-serif"],
        FavFont: ["Montserrat", "sans-serif"],
        secFavFont: ["Varela Round", "sans-serif"],
        tryFont: ["Playwrite GB S", "cursive"]
      },
    },
  },
  plugins: [],
};
