/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#030712", // Very dark blue/black
        surface: "#111827",    // Slightly lighter for cards
        surfaceHighlight: "#1f2937",
        primary: {
          DEFAULT: "#6366f1", // Indigo
          hover: "#4f46e5",
          glow: "rgba(99, 102, 241, 0.5)"
        },
        secondary: "#ec4899", // Pink for accents
        success: "#10b981",
        text: {
          main: "#f9fafb",
          muted: "#9ca3af"
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Cal Sans', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.00) 100%)',
      }
    },
  },
  plugins: [],
}
