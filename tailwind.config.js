// eslint-disable-next-line @typescript-eslint/no-var-requires
const plugin = require('tailwindcss/plugin');

/** @type{import('tailwindcss').Config} */
module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
      xxxl: '1680px',
    },
    extend: {
      screens: {
        print: { raw: 'print' },
      },
      colors: {
        'secondary-green': {
          900: 'var(--secondary-green-900)',
        },
        'secondary-emerald': {
          400: 'var(--secondary-emerald-400)',
        },
        'secondary-blue': {
          300: 'var(--secondary-blue-300)',
          900: 'var(--secondary-blue-900)',
        },
        'secondary-red': {
          900: 'var(--secondary-red-900)',
          700: 'var(--secondary-red-700)',
        },
        'secondary-yellow': {
          500: 'var(--secondary-yellow-500)',
          900: 'var(--secondary-yellow-900)',
          950: 'var(--secondary-yellow-950)',
        },
        green: {
          900: 'var(--green-900)',
          700: 'var(--green-700)',
          500: 'var(--green-500)',
          300: 'var(--green-300)',
          100: 'var(--green-100)',
        },
        emerald: {
          900: 'var(--emerald-900)',
          800: 'var(--emerald-800)',
          700: 'var(--emerald-700)',
          500: 'var(--emerald-500)',
          300: 'var(--emerald-300)',
          100: 'var(--emerald-100)',
        },
        blue: {
          900: 'var(--blue-900)',
          700: 'var(--blue-700)',
          500: 'var(--blue-500)',
          300: 'var(--blue-300)',
          200: 'var(--blue-200)',
          100: 'var(--blue-100)',
        },
        red: {
          900: 'var(--red-900)',
          700: 'var(--red-700)',
          500: 'var(--red-500)',
          300: 'var(--red-300)',
          100: 'var(--red-100)',
        },
        yellow: {
          900: 'var(--yellow-900)',
          700: 'var(--yellow-700)',
          500: 'var(--yellow-500)',
          300: 'var(--yellow-300)',
          100: 'var(--yellow-100)',
        },
        gray: {
          900: 'var(--gray-900)',
          700: 'var(--gray-700)',
          500: 'var(--gray-500)',
          400: 'var(--gray-400)',
          300: 'var(--gray-300)',
          200: 'var(--gray-200)',
          100: 'var(--gray-100)',
        },
      },
      borderRadius: {
        2.5: '0.625rem;',
      },
      boxShadow: {
        'feed-card': '0px 8px 24px rgba(0, 0, 0, 0.15)',
        fab: '0px 8px 12px rgba(0, 0, 0, 0.15)',
        'app-panel': '0px 8px 24px rgba(0, 0, 0, 0.25)',
        'common-card': '0px 16px 40px rgba(0, 0, 0, 0.15)',
        'bot-input':
          '0px -0.3px 0.4px rgba(0, 0, 0, 0.03), 0px -1.1px 1.5px -0.3px rgba(0, 0, 0, 0.04), 0px -2.4px 3.2px -0.7px rgba(0, 0, 0, 0.06), 0.1px -5.1px 6.9px -1px rgba(0, 0, 0, 0.08)',
      },
      gridTemplateColumns: {
        'feed-card': '32px 1fr',
        'feed-pills-container':
          'repeat(auto-fill, minmax(var(--pill-width), 1fr))',
        'home-container': 'repeat(12, 1fr)',
        'onboarding-bundle-container':
          'repeat(auto-fill, minmax(min(144px, 100%), 1fr))',
        'onboarding-app-container':
          'repeat(auto-fill, minmax(min(96px,100%),1fr))',
        'app-container': 'repeat(auto-fill, minmax(72px, 1fr))',
      },
      gridColumn: {
        '1/2': '1 / 2',
        '1/3': '1 / 3',
        '1/4': '1 / 4',
        '1/5': '1 / 5',
        '2/9': '2 / 9',
        '2/12': '2 / 12',
        '3/9': '3 / 9',
        '3/11': '3 / 11',
        '3/10': '3 / 10',
        '4/10': '4 / 10',
        '4/-1': '4 / -1',
        '5/-1': '5 / -1',
        '9/11': '9 / 11',
        '9/12': '9 / 12',
        '10/12': '10 / 12',
        '10/-1': '10 / -1',
      },
      height: {
        25: '100px',
        30: '7.5rem',
        'app-header-mobile': '4rem',
        'app-header': '4.5rem',
        'connect-apps': '13.25rem',
        'fixed-height': 'calc(100vh - 4.5rem)',
        'mobile-safe-area': 'calc(100vh - 4rem)',
      },
      width: {
        25: '100px',
        97: '25rem',
        128: '32rem',
        'connect-apps': '23rem',
        'connect-apps-container': '24rem',
        'app-bar-xl': 'min(100%, calc(256px + 704px + 340px))',
        'filter-modal': 'min(36.75rem, 80%)',
        'modal-sm': 'min(300px, 100%)',
        'modal-default': 'min(500px, 100%)',
        'modal-lg': 'min(800px, 100%)',
        'modal-xl': 'min(1140px, 100%)',
        nav: 'var(--side-nav-width)',
        'screen-xl': 'var(--screen-xl)',
        'screen-xxl': 'var(--screen-xxl)',
      },
      flex: {
        'aside-xl': '0 1 340px',
        'aside-lg': '0 1 280px',
        aside: '0 1 212px',
      },
      maxWidth: {
        'modal-max': '25rem',
        'screen-3xl': '1920px',
        'search-bar': '39rem',
      },
      maxHeight: {
        '3/4': '75vh',
        half: '50vh',
        'notification-max': 'calc(100vh - 10rem)',
        'app-panel': '184px',
      },
      minWidth: {
        'rss-label': '2rem',
        6: '1.5rem',
        30: '120px',
      },
      minHeight: {
        'connect-apps': '13.25rem',
        4: '1rem',
        8: '2rem',
        10: '2.5rem',
      },
      inset: {
        34: '136px',
        16.5: '4.5rem',
        21.75: '5.25rem',
        'app-header-mobile': '4rem',
        'app-header': '4.5rem',
      },
      transitionProperty: {
        height: 'height',
      },
      spacing: {
        4.5: '1.125rem',
        20: '4.5rem',
        21: '5rem',
        22: '5.5rem',
        24: '24px',
        58: '3.625rem',
      },
      rotate: {
        360: '360deg',
      },
      animation: {
        'spin-fade': 'spin-fade 8s cubic-bezier(.32,.54,.85,.58) infinite',
      },
      keyframes: {
        'spin-fade': {
          '0%': {
            opacity: 0,
            transform: 'rotate(0deg) scale(0)',
          },
          '50%': {
            opacity: 1,
            transform: 'rotate(180deg) scale(1)',
          },
          '60%': {
            opacity: 0,
          },
          '100%': {
            opacity: 0,
            transform: 'rotate(360deg) scale(0)',
          },
        },
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-bit-xl': {
          fontFamily: 'Inter',
          fontSize: '5rem',
          lineHeight: '5rem',
          fontWeight: 900,
        },
        '.text-bit-lg': {
          fontFamily: 'Inter',
          fontSize: '3.5rem',
          lineHeight: '3.5rem',
          fontWeight: 900,
        },
        '.text-bit-base': {
          fontFamily: 'Inter',
          fontSize: '2.5rem',
          lineHeight: '2.5rem',
          fontWeight: 900,
        },
        '.text-bit-sm': {
          fontFamily: 'Inter',
          fontSize: '1.5rem',
          lineHeight: '1.5rem',
          fontWeight: 900,
        },
        '.headline-xxl-bold': {
          fontSize: '3.3125rem',
          lineHeight: '3.5rem',
          fontWeight: 900,
        },
        '.headline-xxl': {
          fontSize: '3.3125rem',
          lineHeight: '3.5rem',
          fontWeight: 700,
        },
        '.headline-xl-bold': {
          fontSize: '2.4375rem',
          lineHeight: '2.5rem',
          fontWeight: 900,
        },
        '.headline-xl': {
          fontSize: '2.4375rem',
          lineHeight: '2.5rem',
          fontWeight: 700,
        },
        '.headline-lg-bold': {
          fontSize: '1.75rem',
          lineHeight: '2.5rem',
          fontWeight: 900,
        },
        '.headline-lg': {
          fontSize: '1.75rem',
          lineHeight: '2.5rem',
          fontWeight: 700,
        },
        '.headline-normal-bold': {
          fontSize: '1.3125rem',
          lineHeight: '1.75rem',
          fontWeight: 900,
        },
        '.headline-normal': {
          fontSize: '1.3125rem',
          lineHeight: '1.75rem',
          fontWeight: 700,
        },
        '.headline-small-bold': {
          fontSize: '1.125rem',
          lineHeight: '1.5rem',
          fontWeight: 900,
        },
        '.headline-small': {
          fontSize: '1.125rem',
          lineHeight: '1.5rem',
          fontWeight: 700,
        },
        '.headline-xs-bold': {
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
          fontWeight: 900,
        },
        '.headline-xs': {
          fontSize: '0.875rem',
          lineHeight: '1.5rem',
          fontWeight: 700,
        },
        '.body-xxl-bold': {
          fontSize: '2.8125rem',
          lineHeight: '3rem',
          fontWeight: 700,
        },
        '.body-xxl': {
          fontSize: '2.8125rem',
          lineHeight: '3rem',
          fontWeight: 400,
        },
        '.body-xl-bold': {
          fontSize: '2.0625rem',
          lineHeight: '2.5rem',
          fontWeight: 700,
        },
        '.body-xl': {
          fontSize: '2.0625rem',
          lineHeight: '2.5rem',
          fontWeight: 400,
        },
        '.body-lg-bold': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 700,
        },
        '.body-lg': {
          fontSize: '1.5rem',
          lineHeight: '2rem',
          fontWeight: 400,
        },
        '.body-normal-bold': {
          fontSize: '1.125rem',
          lineHeight: '1.5rem',
          fontWeight: 700,
        },
        '.body-normal': {
          fontSize: '1.125rem',
          lineHeight: '1.5rem',
          fontWeight: 400,
        },
        '.body-sm-bold': {
          fontSize: '0.9375rem',
          lineHeight: '1.25rem',
          fontWeight: 700,
        },
        '.body-sm': {
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          fontWeight: 400,
        },
        '.body-xs-bold': {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          fontWeight: 700,
        },
        '.body-xs': {
          fontSize: '0.75rem',
          lineHeight: '1rem',
          fontWeight: 400,
        },
        '.body-xxs': {
          fontSize: '0.625rem',
        },
      };
      addUtilities(newUtilities, {
        variants: ['responsive', 'hover'],
      });
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.btn-secondary': {
          border: '1px solid',
          borderImageSource:
            'linear-gradient(270.86deg, #367D8D 0.52%, #57BE86 153.41%)',
          borderImageSlice: '1',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.min-h-auth-card': {
          minHeight: 'min(43rem , 100vh)',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(function ({ addUtilities, theme }) {
      const colors = theme('colors', {});
      const newUtilities = {
        '.needl-primary-button': {
          backgroundImage: `linear-gradient(270deg, ${colors.emerald[900]} -12.61%, ${colors.green[900]} 153.6%)`,
        },
        '.needl-primary-button-unset': {
          backgroundImage: 'unset',
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(function ({ addUtilities }) {
      const newUtility = {
        '.pill-width': {
          maxWidth: 'var(--pill-width)',
        },
      };

      addUtilities(newUtility);
    }),
    plugin(function ({ addUtilities }) {
      const newUtility = {
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', // Chrome, Safari and Opera
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none', // Firefox
        },
      };
      addUtilities(newUtility);
    }),
    plugin(function ({ addUtilities }) {
      const utility = {
        '.hidden-important': {
          display: 'none !important',
        },
      };
      addUtilities(utility, ['responsive']);
    }),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/container-queries'),
  ],
};
