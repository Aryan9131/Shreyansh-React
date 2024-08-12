import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import {BASE_URL} from './src/api/userApi'
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: `https://effective-fortnight-9wg4jggv5rqh7rw-8000.app.github.dev`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
