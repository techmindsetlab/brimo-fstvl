/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "var(--accent)",
        dark: "var(--dark)",
        indigo: "var(--indigo)",
        light: "var(--light)",
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "tertiary-color": "var(--tertiary-color)",
        "text-dark": "var(--text-dark)",
        textbody: "var(--textbody)",
        "variable-collection-blue-BRI-prioritas":
          "var(--variable-collection-blue-BRI-prioritas)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        sunday: ["Sunday Afternoon", "cursive"], // Regular
        "sunday-italic": ["Sunday Afternoon Italic", "cursive"], // Italic
        "pp-right-grotesk": ["PPRightGrotesk", "sans-serif"], // Regular
        "pp-right-grotesk-medium": ["PPRightGrotesk Medium", "sans-serif"], // Medium
        "pp-right-grotesk-compact-black": [
          "PPRightGrotesk Compact Black",
          "sans-serif",
        ],
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};
