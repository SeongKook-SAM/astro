// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://helpsns.co.kr',
  integrations: [
    sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: ['/'],
          disallow: ['/admin'],
        },
      ],
    }),
    react(),
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },

  // 새로운 이미지 서비스 설정 방식
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
