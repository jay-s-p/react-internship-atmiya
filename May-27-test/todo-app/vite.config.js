import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: ["localhost", "192.168.1.244", "192.168.1.243"],
    port: 80,
  },
})
