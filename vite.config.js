import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: [
      'firebase/app',
      'firebase/auth',
      // ... other Firebase dependencies (add any additional Firebase modules here)
    ],
  },
});
