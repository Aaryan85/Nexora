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
        // Light palette
        light: {
          bg: '#FAFAFA',
          surface: '#FFFFFF',
          subtle: '#F3F3F3',
          text: '#171717',
          muted: '#737373',
          border: '#E5E5E5',
          highlight: '#EEEEEE',
        },
        // Dark palette
        dark: {
          bg: '#111111',
          surface: '#1B1B1B',
          subtle: '#242424',
          text: '#F5F5F5',
          muted: '#A3A3A3',
          border: '#333333',
          highlight: '#292929',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.03)',
        'elevated': '0 4px 16px -2px rgba(0, 0, 0, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'dark-subtle': '0 1px 3px rgba(0, 0, 0, 0.5), 0 1px 2px rgba(0, 0, 0, 0.4)',
        'dark-elevated': '0 4px 20px -2px rgba(0, 0, 0, 0.7)',
        'modal': '0 20px 40px -8px rgba(0, 0, 0, 0.2)',
      },
      borderRadius: {
        'xs': '4px',
        'sm': '6px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      }
    },
  },
  plugins: [],
}
