import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// @ts-nocheck
export default defineConfig({
  plugins: [
      tailwindcss(),
      react()
  ],
})
