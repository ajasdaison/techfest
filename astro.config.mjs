// @ts-check
import 'dotenv/config';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  output: 'server',
  adapter: vercel(),

  vite: {
    server: {
      allowedHosts: ['.ngrok-free.app'],
    },
    plugins: [tailwindcss()],
  },
});

