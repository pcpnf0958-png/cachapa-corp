module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    extend: {
      fontFamily: {
        pixel: ['Silkscreen', 'Courier New', 'monospace'],
        term: ['VT323', 'Courier New', 'monospace'],
        mono: ['IBM Plex Mono', 'Courier New', 'monospace'],
        sans: ['IBM Plex Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        beige: {
          DEFAULT: '#d4d0c8',
          light: '#e8e6e1',
          dark: '#b0aca4',
        },
        silver: {
          DEFAULT: '#c0c0c0',
          light: '#dfdfdf',
          dark: '#808080',
        },
        navy: {
          DEFAULT: '#000080',
          light: '#1084d0',
          dark: '#000040',
        },
        teal: {
          DEFAULT: '#008080',
          light: '#00a0a0',
          dark: '#004040',
        },
        crt: {
          DEFAULT: '#0a0a0a',
          green: '#33ff33',
          amber: '#ffb000',
        },
        primary: {
          100: '#E6F6FE',
          200: '#C0EAFC',
          300: '#9ADDFB',
          400: '#4FC3F7',
          500: '#03A9F4',
          600: '#0398DC',
          700: '#026592',
          800: '#014C6E',
          900: '#013349',
        },
        gray: {
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
          950: '#0b0f19',
        },
      },
      lineHeight: {
        hero: '4.5rem',
      },
      boxShadow: {
        bezel: '4px 4px 0 0 rgba(0,0,0,0.45)',
        crt: 'inset 0 0 60px 0 rgba(0,0,0,0.9)',
      },
    },
  },
  plugins: [],
};
