import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  // استبدل 'your-repo-name' باسم مستودعك على قيت هاب بالضبط
  base: '/your-repo-name/', 
})