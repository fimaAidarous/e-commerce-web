/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF", //  Deep Blue
        secondary: "#64748B", // Cool Gray
        accent: "#F59E0B", // Amber for highlights
        danger: "#DC2626", // Red for errors
        success: "#16A34A", // Green for success
        warning: "#D97706", // Orange for warnings
        info: "#2563EB", //  Blue for informational messages
        light: "#F3F4F6", // Light gray for backgrounds
        dark: "#111827", // Dark gray for text or backgrounds
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: "3rem",
          // lg: "4rem",
          // xl: "5rem",
          // "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
};
