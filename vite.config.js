import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
<<<<<<< HEAD
  server: {
    port: 3000,
=======
  root: '.', // 프로젝트 루트 디렉토리
  build: {
    outDir: 'dist',
>>>>>>> 252a2d8 (fix: use relative path for index.jsx)
  },
});
