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
        dark: {
          bg: '#080B0A',
          sidebar: '#101512',
          card: '#151C18',
          cardHover: '#1B241F',
          border: '#27322B',
          text: '#F5F7F5',
          muted: '#9CA69E',
        },
        brand: {
          neon: '#39F27A',
          neonLight: '#A3FFBF',
          neonDark: '#21B354',
          accent: '#18D065',
          blue: '#1976D2',
          cyan: '#00E5FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      boxShadow: {
        'neon': '0 0 20px -2px rgba(57, 242, 122, 0.35)',
        'neon-strong': '0 0 30px 2px rgba(57, 242, 122, 0.55)',
        'card-glow': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(57, 242, 122, 0.12), transparent 70%)',
      }
    },
  },
  plugins: [],
}
