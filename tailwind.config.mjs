/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,vue,svelte,md,mdx}'],
  theme: {
    extend: {
      colors: {
        // Driven by CSS variables in global.css so Dark / Light / Evening
        // themes can swap the whole palette at runtime.
        ink: {
          DEFAULT: 'rgb(var(--ink) / <alpha-value>)',
          muted: 'rgb(var(--ink-muted) / <alpha-value>)',
          faint: 'rgb(var(--ink-faint) / <alpha-value>)',
        },
        base: {
          DEFAULT: 'rgb(var(--bg) / <alpha-value>)',
          900: 'rgb(var(--bg) / <alpha-value>)',
          800: 'rgb(var(--bg-800) / <alpha-value>)',
          700: 'rgb(var(--bg-700) / <alpha-value>)',
          600: 'rgb(var(--bg-600) / <alpha-value>)',
        },
        // Brand lime (button fills, selection) — stays vivid across themes
        lime: {
          DEFAULT: 'rgb(var(--lime) / <alpha-value>)',
          400: 'rgb(var(--lime-400) / <alpha-value>)',
          600: 'rgb(var(--lime-600) / <alpha-value>)',
        },
        // Text/mark accent — deepens to a readable leaf-green in light mode
        accent: {
          DEFAULT: 'rgb(var(--accent) / <alpha-value>)',
        },
        line: 'var(--line)',
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
