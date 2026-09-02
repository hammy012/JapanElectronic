/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#0066FF",
          "blue-hover": "#0052CC",
          "blue-light": "#EBF3FF",
          dark: "#0F172A",
          charcoal: "#1E293B",
          heading: "#0B0F19",
          body: "#475569",
          muted: "#94A3B8",
          surface: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0"
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 102, 255, 0.05)',
        'premium': '0 20px 40px -15px rgba(15, 23, 42, 0.07)',
        'card-hover': '0 25px 50px -12px rgba(0, 102, 255, 0.12)',
        'glow': '0 0 25px rgba(0, 102, 255, 0.35)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 2.5s infinite',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 15px rgba(37, 211, 102, 0.5), 0 0 30px rgba(37, 211, 102, 0.3)' },
          '50%': { boxShadow: '0 0 25px rgba(37, 211, 102, 0.8), 0 0 50px rgba(37, 211, 102, 0.5)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      }
    },
  },
  plugins: [],
}
