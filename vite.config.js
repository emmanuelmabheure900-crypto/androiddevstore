import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
    root: '.',
    build: {
        outDir: 'dist',
        rollupOptions: {
            // 📡 REGISTER BOTH OF YOUR TOP-LEVEL ROOT HTML FILES
            input: {
                main: resolve(__dirname, 'index.html'),
                mainscreen: resolve(__dirname, 'mainscreen.html')
            }
        }
    },
    server: {
        port: 3000
    }
});
