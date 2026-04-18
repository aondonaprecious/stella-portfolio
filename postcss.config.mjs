/** @type {import('postcss').Config} */
const config = {
  plugins: {
    /**
     * Tailwind CSS v4 uses its own PostCSS plugin.
     * This replaces the old `tailwindcss` and `autoprefixer` pair.
     */
    "@tailwindcss/postcss": {},
  },
};

export default config;
