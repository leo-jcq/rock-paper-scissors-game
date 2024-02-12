import react from '@vitejs/plugin-react-swc';
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    base: '/rock-paper-scissors-game',
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
});
