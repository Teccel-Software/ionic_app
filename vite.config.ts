/// <reference types="vitest" />

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@component": path.resolve(__dirname, "./src/components"),
      "@axiosInstance": path.resolve(__dirname, "./src/plugins/axiosInstance"),
      "@router": path.resolve(__dirname, "./src/router/"),
      "@view": path.resolve(__dirname, "./src/views"),
      "@store": path.resolve(__dirname, "./src/store"),
      "@helper": path.resolve(__dirname, "./src/helper"),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom'
  }
})
