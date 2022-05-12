module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: "1.4rem",
    },
    extend: {
      spacing: {
        quarter: "25%",
      },
      fontFamily: {
        sans: "Work Sans, sans-serif",
        cascadia: "CascadiaCode",
      },
      colors: {
        "do-blue-dark": "rgb(8, 27, 75)",
        "do-blue-mediumDark": "#1d274c",
        "do-blue-medium": "rgb(20,86,255)",
        "do-blue-light": "rgb(0,105,255)",
        "do-blue-lighter": "#f9fafe",
      },
      boxShadow: {
        input: "0 5px 1px 0 rgb(0,0,0,0.1)",
        "input-focus": "0 2px 1px 0 rgb(0,0,0,0.1)",
      },
    },
    width:{
      "88":"22rem"
    }
  },
  plugins: [],
};
