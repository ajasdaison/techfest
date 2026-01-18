// @ts-check
import 'dotenv/config';
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

export default defineConfig({
  output: "server",
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
    plugins: [tailwindcss()],
  },

  adapter: node({
    mode: 'standalone',
  }),
});

