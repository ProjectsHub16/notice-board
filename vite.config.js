import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/react-app/",
  plugins: [react()],
  base: "/notice-board1"
})
