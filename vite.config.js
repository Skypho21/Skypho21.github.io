import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        '@ark-ui/react/dist/components/file-upload/file-upload-clear-trigger',
        '@ark-ui/react/dist/components/fieldset/use-fieldset-context',
        '@ark-ui/react/dist/components/file-upload/file-upload-context',
        // Add other specific sub-modules that are causing issues
      ],
    },
  },
});
