import fs from 'node:fs'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

function copy404Plugin() {
  return {
    name: 'copy-404',
    closeBundle() {
      try {
        fs.copyFileSync('dist/index.html', 'dist/404.html')
      } catch (err) {
        console.error('Failed to copy 404.html:', err)
      }
    }
  }
}

export default defineConfig({
  base: '/rachit-mangawa/',
  plugins: [
    tailwindcss(),
    react(),
    copy404Plugin(),
  ],
  build: {
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('gsap') || id.includes('lenis')) {
              return 'vendor-animation';
            }
            if (id.includes('@phosphor-icons')) {
              return 'vendor-icons';
            }
          }
        },
      },
    },
  },
})
