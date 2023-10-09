/** @type {import('tailwindcss').Config} */
export default {
   content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
   theme: {
      animation: {
         spinning: " spinning 1s linear infinite",
         wiggle: "wiggle 1s ease-in-out infinite",
         fade: "fadeIn .3s ease-in",
         fade5: "fadeIn .3s ease-out",
         move: "move 2.5s ease-out",
         appearLeft: "appearLeft .5s ease-out",
         appearBottom: "appearBottom .5s ease-out",
      },
      keyframes: {
         spinning: {
            "0%": {
               transform: " rotate(0deg)",
            },
            "100%": {
               transform: "rotate(360deg)",
            },
         },

         fadeIn: {
            "0%": {
               opacity: "0",
            },
            "100%": {
               opacity: "1",
            },
         },
         fadeOut: {
            "0%": {
               opacity: "1",
            },
            "100%": {
               opacity: "0",
            },
         },
         move: {
            "0%": {
               transform: "-translate(2rem)",
               opacity: 0,
            },
            "100%": {
               transform: "translate(0)",
               opacity: 100,
            },
         },
         appearLeft: {
            "0%": {
               transform: "translateX(70%)",
               opacity: 0,
            },
            "100%": {
               transform: "translateX(0)",
               opacity: 1,
            },
         },
         appearBottom: {
            "0%": {
               transform: "translateY(70%)",
               opacity: 0,
            },
            "100%": {
               transform: "translateY(0)",
               opacity: 1,
            },
         },
      },
      extend: {
         colors: {
            "main-black": "#212529",
            "main-black2": "#353535",
            "main-grey": "#6c757d",
            "main-grey2": "#adb5bd",
            "main-grey3": "#c7d0da",
            "main-grey4": "#d9d9d9",
            "main-white": "#ffffff",
         },
      },
   },
   plugins: [],
};
