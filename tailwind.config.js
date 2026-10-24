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
        // Brand: deep navy #16025E and gold #F3C407
        navy: {
          50: '#F1EFFB',
          100: '#DFDAF6',
          600: '#4430B5',
          700: '#2E1A96',
          800: '#210B78',
          900: '#16025E',
          950: '#0D0140'
        },
        gold: {
          50: '#FEF9E1',
          100: '#FCEFB0',
          300: '#F3C407',
          500: '#F3C407',
          800: '#7A6000'
        },
        ink: '#0B0C0C',
        muted: '#505A5F',
        line: '#B1B4B6',
        'line-light': '#E2E5E8',
        surface: '#F4F6FA',
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
