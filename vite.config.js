import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Served under /major on the unified domain (Vercel multi-zone).
  base: '/major/',
  plugins: [react()],
  server: { port: 5190 },
});
