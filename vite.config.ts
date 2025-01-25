import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import autoprefixer from "autoprefixer";
import tailwindcss from '@tailwindcss/vite'
import { join } from "path";

// https://vite.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [autoprefixer],
    },
  },
  plugins: [react(), tailwindcss(),],
  resolve: {
    alias: {
        'pages': join(__dirname, "./src/pages"),
        'assets': join(__dirname, "./src/assets"),
        'constants': join(__dirname, "./src/constants"),
        'components': join(__dirname, "./src/components"),
    },
  },
})
