import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'
import { execSync } from 'child_process'

export default defineConfig({
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
    {
      name: 'generate-sitemap-after-build',
      apply: 'build',
      closeBundle() {
        // 你可以自定义子目录
        const subPages = ['blog', 'gallery']
        try {
          execSync(`bun scripts/generate-sitemap.ts ${subPages.join(' ')}`, { stdio: 'inherit' })
          console.log('Sitemap generated after build.')
        } catch (e) {
          console.error('Failed to generate sitemap:', e)
        }
      },
    },
  ],
})