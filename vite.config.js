import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  base: '/3.Módulo/',
  plugins: [react()],
  server: {
    open: "/index.html",
    watch: {
      usePolling: true
    }
  },
})
