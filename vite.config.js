import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/modulo-3-evaluacion-final-16IMA/',
  plugins: [react()],
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
})
