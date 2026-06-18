import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base must match the repo name so assets resolve under
// https://<user>.github.io/M2/
export default defineConfig({
  base: '/M2/',
  plugins: [react()],
})
