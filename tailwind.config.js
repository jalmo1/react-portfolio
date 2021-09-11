module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    minHeight: {
      "200px": "200px",
    },
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
