module.exports = {
  content: ["./**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0b0966",

          "secondary": "#ffffff",

          "accent": "#0b0966",

          "neutral": "#606060",

          "base-100": "#2e2e2e",


        },
      },
    ],
  },
  plugins: [require('daisyui')],
}