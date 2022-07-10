module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
      fontFamily: {
         mon: "Montserrat",
      },
      extend: {
         screens: {
            'super-sm': '380px'
         },
         colors: {
            "body-bg": "#0f0f0f",
            "main-color": "#ff0000",
            "txt-color": "#fff",
            overlay: "rgba($color: #000000, $alpha: 0.6)",
         },
         boxShadow: {
            sm: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
         },
         spacing: {
            header: "8rem",
            "s-header": "5rem",
         },
         borderRadius: {
            default: "30px",
         },
         gridTemplateColumns: {
            auto: (min, max) => {
               return `repeat(auto - fill, minmax(${min}, ${max}))`;
            },
         },
      },
   },
   plugins: [
      require("@tailwindcss/line-clamp"),
      function ({ addComponents }) {
         addComponents({
            ".container": {
               width: "1660px",
               maxWidth: "100%",
               padding: "0 2rem",
               margin: "0 auto",
            },
         });
      },
   ],

   corePlugins: {
      container: false,
   },
};
