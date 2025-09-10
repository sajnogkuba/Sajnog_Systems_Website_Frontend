import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// @ts-nocheck
export default defineConfig({
    plugins: [react()],
    base: '/',
})
