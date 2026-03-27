/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#213A2C',
        secondary: {
          '50': '#f5f8f5',
          '100': '#e9efe9',
          '200': '#d3dfd3',
          '300': '#afc6b0',
          '400': '#84a486',
          '500': '#628564',
          DEFAULT: '#4e6c50',
          '700': '#3f5641',
          '800': '#354636',
          '900': '#2d3a2e',
          '950': '#151e16',
        },
        textPrimary: '#EDE4D3',
        textSecondary: '#CABFAB',
      },
      fontFamily: {
        averia: ['var(--font-averia-serif-libre)', 'Arial', 'serif'],
        darumadrop: ['var(--font-darumadrop-one)', 'Arial', 'serif'],
      },
      aspectRatio: {
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '4/3': '4 / 3',
        '4/5': '4 / 5',
      },
      animation: {
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        breathe: {
          '0%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1.1)' },
        }
      }
    },
  },
  plugins: [],
};