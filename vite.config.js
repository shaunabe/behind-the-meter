import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If deploying to GitHub Pages at https://USERNAME.github.io/REPO-NAME/,
// set base to '/REPO-NAME/'. Default to '/' for Vercel/Netlify/local.
const base = process.env.VITE_BASE || '/';

export default defineConfig({
  plugins: [react()],
  base,
});
