import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server:{
    '/api': {
      target: 'https://threads-api-rho.vercel.app',
    },
  },
  plugins: [react()],
})