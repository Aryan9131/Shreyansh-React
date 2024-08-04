import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {BASE_URL} from './src/api/userApi'
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `https://improved-space-carnival-j9pwqpp6q7q357jq-8000.app.github.dev`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
