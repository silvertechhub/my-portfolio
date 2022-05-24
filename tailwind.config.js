module.exports = {
 content:['./index.html'],
  theme: {
    extend: {
      colors:{
        "body" :"#101010",
        "hero": "#D62828",
        "darkTheme": "# #3d3c3c"
      },
      backgroundImage: {
        "hero-bg": "url('/assets/Backgroundsvg.svg')",
        "bg-vh": "url('/assets/Background.png')",
        "mobile-bg": "url('/assets/mobile-bg.png')"
      },
      fontFamily: {
       "domaine": ["domaineDisplay", "sans-serif"]
      },
      backgroundSize: {
        "50": "50%"
      }
    },
  },
  plugins: [],
}
