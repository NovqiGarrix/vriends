/** @type import("tailwindcss").Config */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        bg: "#070B0F",
        darkGradient: "#355858",
        clay: "#3ADFDF",
        light: "#EEF7F9",
        p: "#B3B3B3",
        darkRed: "#CA375C",
        dash: "#393939",
        iconColor: "#E5E5E5",
      },
    },
    fontFamily: {
      manrope: ['"Manrope"'],
      monserat: ['"Montserrat"'],
    },
  },
  variants: {
    extend: {
      borderWidth: ["hover", "focus"],
      fontFamily: ["hover", "focus"],
      fontWeight: ["hover", "focus", "group-hover"],
      scale: ["active", "group-hover"],
    },
  },
  plugins: [],
};
