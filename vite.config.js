import reactPlugin from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import * as path from 'node:path';
import { resolve } from 'node:path';

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [reactPlugin()],
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
  },
  resolve: {
    // alias: {'@': path.resolve(__dirname, './src'),},
    alias: [{ find: '@', replacement: resolve(__dirname, '.src')}]
  },
});