// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './content/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      /*
       * One colour system for the whole site. Every pairing used for text
       * meets WCAG 2.2 AA (4.5:1) — gold is only used as text on navy
       * (gold-300) or in its dark shade on white (gold-800).
       */
      colors: {
        navy: {
          50: '#EEF2FA',
          100: '#DCE4F4',
          600: '#24478F',
          700: '#1B3A78',
          800: '#14285A',
          900: '#0B1A3B'
        },
        gold: {
          50: '#FBF6E9',
          100: '#F5EACB',
          300: '#E8C86A',
          500: '#D4A84B',
          800: '#7A5C1E'
        },
        ink: '#0B0C0C',
        muted: '#505A5F',
        line: '#B1B4B6',
        'line-light': '#E2E5E8',
        surface: '#F6F5F2',
        focus: '#FFDD00',
        success: '#00703C',
        error: '#D4351C'
      },
      fontFamily: {
        sans: ['var(--font-body)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        card: '0 1px 2px rgba(11, 26, 59, 0.06), 0 2px 8px rgba(11, 26, 59, 0.05)',
        lift: '0 4px 8px rgba(11, 26, 59, 0.05), 0 24px 48px -12px rgba(11, 26, 59, 0.22)',
        glow: '0 0 0 1px rgba(232, 200, 106, 0.25), 0 30px 60px -20px rgba(0, 0, 0, 0.55)'
      },
      maxWidth: {
        page: '76rem',
        prose: '40rem'
      }
    }
  },
  plugins: []
};
