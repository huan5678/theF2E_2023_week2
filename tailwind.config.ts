/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1400px',
      },
    },
    fontFamily: {
      sans: ['Noto Sans TC', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        white: {
          DEFAULT: '#fff',
          hover: '#E6E6E6',
          active: '#CCC',
          dark: {
            DEFAULT: '#BFBFBF',
            hover: '#999',
            active: '#737373',
          },
          darker: '#595959',
        },
        black: {
          DEFAULT: '#000',
          light: {
            DEFAULT: '#E6E6E6',
            hover: '#D9D9D9',
            active: '#B0B0B0',
          },
        },
        primary: {
          DEFAULT: '#262E49',
          hover: '#222942',
          active: '#1E253A',
          light: {
            DEFAULT: '#E9EAED',
            hover: '#DEE0E4',
            active: '#BCBEC7',
          },
          dark: {
            DEFAULT: '#1D2337',
            hover: '#171C2C',
            active: '#111521',
          },
          darker: '#0D101A',
        },

        green: {
          DEFAULT: '#84CB98',
          hover: '#77B789',
          active: '#6AA27A',
          light: {
            DEFAULT: '#F3FAF5',
            hover: '#EDF7F0',
            active: '#D9EFDF',
          },
          dark: {
            DEFAULT: '#639872',
            hover: '#4F7A5B',
            active: '#3B5B44',
          },
          darker: '#2E4735',
        },
        blue: {
          DEFAULT: '#8894D8',
          hover: '#7A85C2',
          active: '#6D76AD',
          light: {
            DEFAULT: '#F3F4FB',
            hover: '#EDEFF9',
            active: '#DADEF3',
          },
          dark: {
            DEFAULT: '#666FA2',
            hover: '#525982',
            active: '#3D4361',
          },
          darker: '#30344C',
        },
        brown: {
          DEFAULT: '#DFA175',
          hover: '#C99169',
          active: '#B2815E',
          light: {
            DEFAULT: '#FCF6F1',
            hover: '#FAF1EA',
            active: '#F5E2D4',
          },
          dark: {
            DEFAULT: '#A77958',
            hover: '#866146',
            active: '#644835',
          },
          darker: '#4E3829',
        },
      },
      keyframes: {
        'accordion-down': {
          from: {height: 0},
          to: {height: 'var(--radix-accordion-content-height)'},
        },
        'accordion-up': {
          from: {height: 'var(--radix-accordion-content-height)'},
          to: {height: 0},
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
