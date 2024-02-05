import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'remote-app',
      filename: 'remoteEntry.js',
      exposes: {
        './ZalAmin': {
          name: 'ZalAmin',
          import: './src/components/ZalAmin.vue',
        },
      },
      // shared: {
      //   'vue': {},
      // },
      build: {
        // minify: false,
        // target: 'esnext',
        // cssCodeSplit: false,
        rollupOptions: {
          output: {
            format: 'esm',
            entryFileNames: 'assets/[name].js',
            // minifyInternalExports: false,
          },
        },
      },
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
