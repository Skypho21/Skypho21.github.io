import { defineConfig } from 'vite';

export default defineConfig({
  ssr: {
    noExternal: ['@ark-ui/react'],  // Make sure @ark-ui/react is treated as an internal module.
  },
  build: {
    rollupOptions: {
      external: ['@ark-ui/react'],
    },
  },
});
