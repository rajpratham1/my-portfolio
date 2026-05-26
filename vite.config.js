import { defineConfig } from 'vite';

export default defineConfig({
  // Use relative base path to ensure all assets are linked relatively (starts with ./)
  // This allows the build directory to work in any folder/repo on GitHub Pages!
  base: './',
  build: {
    outDir: 'dist',
    minify: 'esbuild',
    sourcemap: false
  }
});
