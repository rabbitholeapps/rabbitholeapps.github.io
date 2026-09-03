import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from './src/lib/rehypeHeadingIds';

// Standalone site (own GitHub repo / org Pages / custom domain).
// After the repo exists, set `site` to the real Pages URL if it differs.
export default defineConfig({
  site: 'https://rabbitholeapps.github.io',
  base: '/',
  trailingSlash: 'always',
  markdown: {
    rehypePlugins: [rehypeHeadingIds],
  },
});
