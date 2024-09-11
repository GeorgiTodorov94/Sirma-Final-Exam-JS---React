import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TestEnvironment } from 'jest-environment-jsdom'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom'
  }
})
