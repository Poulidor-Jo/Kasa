import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // Assurez-vous que le port est défini ici
    open: true, // Cette option ouvre automatiquement le navigateur
  },
})
