// Vite configuration for BookBridge React application
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: '/bookbridge/',
  plugins: [
    react(),
    tailwindcss(),
  ],
})