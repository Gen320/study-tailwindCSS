module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Make sure to include your files
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ebf8ff",
          200: "#90cdf4",
          500: "#4299e1",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".text-bold": {
          fontWeight: "700",
        },
      });
    },
  ],
};
