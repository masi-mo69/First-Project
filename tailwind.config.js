/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
          "brown": {
            100: "#ECE0D1",
            300: "#DBC1AC",
            600: "#967259",
            900:"#634832"
          }
      },

      boxShadow: {
        'shadow-normal' : '0px 1px 10px 0px rgba(0, 0, 0, 0.05)',
      },

      borderRadius: {
        '4xl' : '2rem'
      },

      fontFamily: {

        "Dana" : "Dana",
        "DanaMedium" : "Dana Medium",
        "DanaDemiBold" : "Dana DemiBold",
        "MorrabaLight" : "Morabba Light",
        "MorrabaMedium" : "Morraba Medium",
        "MorrabaBold" : "Morraba Bold",
      },
      letterSpacing: {
        "tightest": "-0.065em"
      }
    },
  },
  plugins: [],
}