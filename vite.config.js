import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import commonjs from 'vite-plugin-commonjs';

export default defineConfig({
  plugins: [react(), commonjs()],
  build: {
    rollupOptions: {
      external: [], // Remove 'file-saver' from external
    },
  },
});
