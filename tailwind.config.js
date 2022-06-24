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
        
"info": "#8AB1E0",
        
"success": "#18B466",
        
"warning": "#C9A508",
        
"error": "#DC3D32",
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}