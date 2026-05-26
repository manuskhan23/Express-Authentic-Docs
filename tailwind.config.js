/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0B0B10',
          card: '#111118',
          primary: '#7C3AED',
          accent: '#A78BFA',
          text: '#E5E7EB',
          muted: '#9CA3AF',
          border: '#1f1f2a',
        },
        light: {
          bg: '#F8FAFC',
          card: '#FFFFFF',
          primary: '#2563EB',
          accent: '#60A5FA',
          text: '#0F172A',
          muted: '#64748B',
          border: '#E2E8F0',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgb(124 58 237 / 0.4)' },
          '100%': { boxShadow: '0 0 20px rgb(124 58 237 / 0.8)' },
        }
      }
    },
  },
  plugins: [],
}