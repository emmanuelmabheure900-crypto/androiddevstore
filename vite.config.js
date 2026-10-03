import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            // 📡 TELLS VITE TO COMPILE YOUR MASTER JAVASCRIPT PROFILE AND BOTH MAIN PAGE ENTRY STACKS
            input: {
                main: resolve(__dirname, 'index.html'),
                download: resolve(__dirname, 'download.html'),
                appEngine: resolve(__dirname, 'src/main.js')
            }
        }
    },
    server: {
        port: 3000
    }
});
