import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: "/foodMag",
  
  define: {
    'process.env': {} // Это заменяет использование process.env на пустой объект в браузере
  }
})
