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
        background: "var(--background)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        textPrimary: "var(--textPrimary)",
        textSecondary: "var(--textSecondary)",
      },
      fontFamily: {
        averia: ['var(--font-averia-serif-libre)', 'Arial', 'serif'],
        darumadrop: ['var(--font-darumadrop-one)', 'Arial', 'serif'],
      },
    },
  },
  plugins: [],
};
