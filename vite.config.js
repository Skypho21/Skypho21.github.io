import { defineConfig } from 'vite';
import replace from 'vite-plugin-replace';

export default defineConfig({
  plugins: [
    replace({
      '__vite_ignore__': 'use client',
    }),
  ],
  build: {
    rollupOptions: {
      external: ['@ark-ui/react'],
    },
  },
});
