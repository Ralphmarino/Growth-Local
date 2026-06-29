/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Near-black canvas + warm off-white ink + electric lime accent
        ink: {
          DEFAULT: '#F4F4EF',
          muted: '#9B9B93',
          faint: '#6A6A62',
        },
        base: {
          DEFAULT: '#0A0A0B',
          900: '#0A0A0B',
          800: '#0F0F11',
          700: '#161618',
          600: '#1E1E21',
        },
        lime: {
          DEFAULT: '#C7F94E',
          400: '#D4FB6E',
          600: '#A9E020',
        },
        line: 'rgba(244,244,239,0.10)',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        wide: '1600px',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        'marquee-rev': {
          from: { transform: 'translateX(-50%)' },
          to: { transform: 'translateX(0)' },
        },
      },
      animation: {
        marquee: 'marquee 38s linear infinite',
        'marquee-rev': 'marquee-rev 38s linear infinite',
      },
    },
  },
  plugins: [],
};
