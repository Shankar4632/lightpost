/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        asphalt: { DEFAULT: "#1E2327", 700: "#2A3036", 600: "#363D44" },
        concrete: { DEFAULT: "#EEEDEA", 200: "#E2E0DB", 300: "#D3D0C9" },
        steel: { DEFAULT: "#8A949B", dark: "#5E676D" },
        sodium: { DEFAULT: "#F0A630", dark: "#C9821A", light: "#FBD38A" },
        wire: { DEFAULT: "#2F5D50", dark: "#234539" },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', '"Arial Narrow"', "Arial", "sans-serif"],
        body: ["Barlow", "system-ui", "-apple-system", "Segoe UI", "Arial", "sans-serif"],
      },
      maxWidth: { prose: "68ch" },
    },
  },
  plugins: [],
};
