import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['.trycloudflare.com', 'localhost', '127.0.0.1', '.okva.cc', 'all', 'towards-allied-terminal-bids.trycloudflare.com']
  },
  preview: {
    allowedHosts: ['.trycloudflare.com', 'localhost', '127.0.0.1', '.okva.cc', 'all', 'towards-allied-terminal-bids.trycloudflare.com']
  }
})
