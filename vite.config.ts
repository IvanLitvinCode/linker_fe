/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import macrosPlugin from 'vite-plugin-babel-macros';
import svgrPlugin from 'vite-plugin-svgr';
import viteTsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [viteTsconfigPaths(), react(), svgrPlugin(), macrosPlugin()],
  resolve: {
    alias: [
      {
        find: './runtimeConfig',
        replacement: './runtimeConfig.browser',
      },
    ],
  },
  server: {
    port: 3000,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setup.ts'],
    testTimeout: 20000,
    passWithNoTests: true,
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'es2020',
    },
  },
});
