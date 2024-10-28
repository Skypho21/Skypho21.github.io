import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/skypho21.github.io/',  // Replace with your GitHub repo name
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
