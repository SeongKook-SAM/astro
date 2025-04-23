/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  future: {
    // Tailwind CSS v4 호환성을 위한 설정
    hoverOnlyWhenSupported: true,
  },
};
