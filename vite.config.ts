import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    // Expose RAWG_* variables (e.g. RAWG_API_KEY) to client code, alongside the default VITE_*
    envPrefix: ['VITE_', 'RAWG_'],
})
