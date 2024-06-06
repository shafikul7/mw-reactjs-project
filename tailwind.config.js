/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      primary: "#0060AF",
      secondary: "#00A88E",
      dark: "#333333",
      headerBgSm: "#002B4F",
      headerBgLg: "#333333",
      formBg: "#F9FAFB",
      hoverColor: "#13AF88",
      bannerBg: "#ECF5F8",
      paraColor: "#344054",
      borderColor:
        "linear-gradient(99.09deg, #185F9A 0%, rgba(255, 255, 255, 0) 100%)",
      bgColor: "#F2FBFA",
    },
    extend: {
      container: {
        center: true,
      },
      screens: {
        md: "768px",
        "2xl": "1696px",
      },
      maxWidth: {
        md: "1696px",
        "2xl": "1696px",
      },
    },
  },
  plugins: [],
};

// border-image-source: linear-gradient(99.09deg, #185F9A 0%, rgba(255, 255, 255, 0) 100%);
