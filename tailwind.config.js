/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // gradientStart: "#503578",
        // gradientMiddle: "#330573",
        // gradientEnd: "#070315",
        gradientStart: "#6B3FB8",
        gradientMiddle: "#5B00EC",
        gradientEnd: "#000000",
      },
      keyframes: {
        colorCycle: {
          "0%, 100%": { color: "#f00" }, // Very dark shade
          "20%": { color: "#20ff36" },
          "40%": { color: "#eaff08" },
          "60%": { color: "#08ceff" },
          "80%": { color: "#1303ff" },
        },
      },
      animation: {
        "color-loop": "colorCycle 3.5s infinite",
      },
    },
  },
  plugins: [],
};
