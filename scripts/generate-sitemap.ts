#!/usr/bin/env node
import fs from 'fs'
import path from 'path'

// 配置
const SITE_URL = 'https://geoochi.com' // TODO: 可根据实际域名修改
const PAGES_DIR = path.resolve('src/pages')
const OUTPUT_FILE = path.resolve('dist/sitemap.xml')

// 获取自定义子目录参数
const subPages = process.argv.slice(2) // 例如: node scripts/generate-sitemap.js blog docs

// 递归获取所有页面文件
function getPageFiles(dir, baseUrl = '/') {
  let results = []
  const list = fs.readdirSync(dir)
  for (const file of list) {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)
    if (stat && stat.isDirectory()) {
    } else if (file.endsWith('.tsx') && !file.startsWith('_')) {
      // 过滤掉样式和下划线开头的文件
      let url = baseUrl
      if (file !== 'index.tsx') {
        url = path.join(baseUrl, file.replace(/\.tsx$/, ''))
      }
      results.push(url.replace(/\\/g, '/'))
    }
  }
  return results
}
const pages = getPageFiles(PAGES_DIR)

// 新增：把 subPages 里的每个目录都加到 sitemap，并带上 lastmod、changefreq、priority
function getFileLastMod(filePath: string): string {
  try {
    const stat = fs.statSync(filePath)
    return new Date(stat.mtime).toISOString().split('T')[0]
  } catch {
    return new Date().toISOString().split('T')[0]
  }
}

const pageObjs = pages.map(url => {
  // 还原文件路径
  let filePath = path.join(PAGES_DIR, url === '/' ? 'index.tsx' : url.slice(1) + '.tsx')
  // 处理嵌套路径
  filePath = filePath.replace(/\/$/, '')
  if (!fs.existsSync(filePath)) {
    // 可能是目录 index
    filePath = path.join(PAGES_DIR, url.slice(1), 'index.tsx')
  }
  return {
    url,
    lastmod: getFileLastMod(filePath),
    changefreq: 'daily',
    priority: '1.0',
  }
})

const subPageObjs = subPages.map(dir => ({
  url: `/${dir}`,
  lastmod: new Date().toISOString().split('T')[0],
  changefreq: 'daily',
  priority: '1.0',
}))

const allObjs = [...pageObjs, ...subPageObjs]

// 生成 sitemap.xml 内容
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml"
    xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
    xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
${allObjs
  .map(
    obj =>
      `  <url><loc>${SITE_URL}${obj.url}</loc><lastmod>${obj.lastmod}</lastmod><changefreq>${obj.changefreq}</changefreq><priority>${obj.priority}</priority></url>`
  )
  .join('\n')}
</urlset>`

// 写入 dist/sitemap.xml
fs.writeFileSync(OUTPUT_FILE, sitemap, 'utf8')
