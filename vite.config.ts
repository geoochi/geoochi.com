import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

export default defineConfig({
  base: 'https://singfor-live-9gizzbuc59a85fe6-1314828645.tcloudbaseapp.com/space/',
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  plugins: [
    preact({
      prerender: {
        enabled: true,
        renderTarget: '#root',
      },
    }),
  ],
})
