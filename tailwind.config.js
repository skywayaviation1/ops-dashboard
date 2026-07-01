/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void:    '#070B12',
        cockpit: '#0D1520',
        surface: '#131F2F',
        horizon: '#1E3358',
        airspace:'#38BDF8',
        beacon:  '#F59E0B',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'monospace'],
        body:    ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
