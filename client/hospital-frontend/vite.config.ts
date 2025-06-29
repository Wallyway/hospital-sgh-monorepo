import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@icons": path.resolve(__dirname, "src/assets/icons"),
      "@images": path.resolve(__dirname, "src/assets/images"),
      "@styles": path.resolve(__dirname, "src/assets/styles"),
      "@components": path.resolve(__dirname, "src/components"),
      "@db": path.resolve(__dirname, "src/db"),
      "@contexts": path.resolve(__dirname, "src/contexts"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@views": path.resolve(__dirname, "src/views"),
    },
  },
})
