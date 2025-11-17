/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./global.css",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#b5ff4d",
          DEFAULT: "#9BFF2A",
          dark: "#6cd41a",
        },
        dark: {
          100: "#2a2a2a",
          200: "#232323",
          300: "#1e1e1e",
          400: "#171717",
          500: "#101010",
        },
        graysoft: {
          50: "#f3f3f3",
          100: "#e7e7e7",
          200: "#dcdcdc",
          300: "#c8c8c8",
        },
        accent: {
          purple: "#B8A6FF",
          mint: "#D4FFEA",
        },
      },
      borderRadius: {
        smooth: "22px",
        xl2: "26px",
        xl3: "32px",
      },
      boxShadow: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.15)",
        card: "0 6px 20px rgba(0, 0, 0, 0.18)",
        neon: "0 0 20px rgba(155, 255, 42, 0.45)",
      },
      fontSize: {
        title: ["26px", { fontWeight: "700" }],
        subtitle: ["18px", { fontWeight: "600" }],
        cardValue: ["32px", { fontWeight: "700" }],
      },
      spacing: {
        card: "18px",
        screen: "22px",
      },
    },
  },
  plugins: [],
};
