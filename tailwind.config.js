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
        extend: {
          extend: {
            gridTemplateColumns: {
              'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
              'auto-fill': 'repeat(auto-fit, minmax(0, 1fr))',
            },
            gridTemplateRows: {
              'auto-fit': 'repeat(auto-fit, minmax(0, 1fr))',
              'auto-fill': 'repeat(auto-fit, minmax(0, 1fr))',
            }
          }
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}