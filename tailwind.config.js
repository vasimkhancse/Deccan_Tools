/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060c18',
          900: '#0a1428',
          850: '#0d1a34',
          800: '#112244',
          700: '#183160',
          600: '#234482',
        },
        brandRed: {
          50: '#fef2f2',
          100: '#fee2e2',
          200: '#fecaca',
          300: '#fca5a5',
          400: '#f87171',
          500: '#ef4444',
          600: '#dc2626',
          700: '#b91c1c',
          800: '#991b1b',
          900: '#7f1d1d',
          950: '#450a0a',
        },
        charcoal: {
          950: '#0b0f17',
          900: '#111722',
          800: '#192231',
          700: '#253245',
          600: '#34445c',
        },
        steel: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Rajdhani', 'Montserrat', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'industrial': '0 4px 20px -2px rgba(10, 20, 40, 0.15), 0 2px 6px -1px rgba(10, 20, 40, 0.08)',
        'industrial-lg': '0 10px 30px -5px rgba(10, 20, 40, 0.25), 0 8px 10px -6px rgba(10, 20, 40, 0.15)',
        'glow-red': '0 0 25px -3px rgba(220, 38, 38, 0.4)',
        'glow-navy': '0 0 25px -3px rgba(24, 49, 96, 0.5)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(100, 116, 139, 0.15) 1px, transparent 1px)",
        'dark-grid': "radial-gradient(rgba(220, 38, 38, 0.12) 1px, transparent 1px)",
      }
    },
  },
  plugins: [],
}
