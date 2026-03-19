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
      colors: {
        /* Gold accent palette */
        brand: {
          50: '#fffdf5',
          100: '#fff7db',
          200: '#ffeeb5',
          300: '#ffe08a',
          400: '#f7cc55',
          500: '#e7b73a',
          600: '#d49f21',
          700: '#b88418',
          800: '#946916',
          900: '#775515'
        },

        /* Navy-blue palette */
        navy: {
          50: '#f3f7ff',
          100: '#e8f0ff',
          200: '#cddcff',
          300: '#a8c2ff',
          400: '#7ea2ff',
          500: '#5b81f0',
          600: '#4267d6',
          700: '#3156a3',
          800: '#28407a',
          900: '#22355f',
          950: '#172554'
        },

        /* Supporting gold accent palette */
        accent: {
          50: '#fff9e6',
          100: '#fff0c2',
          200: '#ffe599',
          300: '#ffd866',
          400: '#f7c948',
          500: '#e0a800',
          600: '#b88a00',
          700: '#8c6a00'
        },

        /* Core text colour */
        ink: '#1b1b1d',

        /* Clean white/neutral system */
        church: {
          bg: '#ffffff',
          panel: '#f8fafc',
          border: '#e5e7eb',
          heading: '#1f2937',
          text: '#475569',
          muted: '#64748b'
        }
      },

      boxShadow: {
        soft: '0 12px 30px rgba(0, 0, 0, 0.08)',
        elegant: '0 18px 45px rgba(231, 183, 58, 0.15)',
        navy: '0 18px 45px rgba(37, 99, 235, 0.16)'
      },

      borderRadius: {
        '2xl': '1.25rem'
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },

      backgroundImage: {
        'church-hero-gradient':
          'radial-gradient(circle at top right, rgba(96, 165, 250, 0.16), transparent 28%), radial-gradient(circle at left, rgba(250, 204, 21, 0.06), transparent 20%), linear-gradient(135deg, #172554 0%, #22355f 30%, #28407a 60%, #3156a3 100%)',
        'navy-gradient':
          'linear-gradient(135deg, #5b81f0 0%, #4267d6 32%, #3156a3 68%, #22355f 100%)',
        'soft-blue-gradient':
          'linear-gradient(135deg, rgba(232,240,255,0.95) 0%, rgba(205,220,255,0.75) 35%, rgba(255,255,255,0.95) 100%)'
      }
    }
  },
  plugins: []
};