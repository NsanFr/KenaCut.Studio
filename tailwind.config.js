/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        aura: {
          primary: "#8C72FF",
          sky: "#70B9FE",
          flare: "#FFA99F",
          lemon: "#F3FFAA",
          dark: "#0B0D17",
          darker: "#06070D",
          surface: "rgba(255, 255, 255, 0.06)",
          border: "rgba(255, 255, 255, 0.14)",
          textMuted: "#94A3B8"
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-reverse': 'floatReverse 7s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'aurora-mesh': 'auroraMove 15s ease infinite alternate',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.9', transform: 'scale(1.05)' },
        },
        auroraMove: {
          '0%': { transform: 'scale(1) translate(0%, 0%)' },
          '50%': { transform: 'scale(1.2) translate(-5%, 5%)' },
          '100%': { transform: 'scale(1) translate(5%, -5%)' },
        }
      },
      boxShadow: {
        'aurora': '0 0 50px -10px rgba(140, 114, 255, 0.3)',
        'aurora-glow': '0 0 35px rgba(112, 185, 254, 0.45)',
        'card-glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backdropBlur: {
        'glass': '20px',
      }
    },
  },
  plugins: [],
}
