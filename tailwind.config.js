/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4F46E5",    // Indigo – main accent
        secondary: "#06B6D4",  // Cyan – highlights
        background: "#F9FAFB", // Soft light background
        foreground: "#111827", // Deep gray text
        muted: "#6B7280",      // Muted gray text
        card: "#FFFFFF",       // Card background
        highlight: "#FACC15",  // Warm yellow highlight
      },
    },
  },
  plugins: [],
}
