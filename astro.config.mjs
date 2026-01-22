// @ts-check
import 'dotenv/config';
import { defineConfig } from 'astro/config';
import vercel from "@astrojs/vercel/serverless";

import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';

export default defineConfig({
  output: "server",
  adapter: vercel(),
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

