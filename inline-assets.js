import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs'
import { resolve, dirname, join } from 'path'

const distDir = resolve('dist')

function findHtmlFiles(dir) {
  const files = []
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) {
      files.push(...findHtmlFiles(full))
    } else if (entry.endsWith('.html')) {
      files.push(full)
    }
  }
  return files
}

for (const htmlPath of findHtmlFiles(distDir)) {
  let html = readFileSync(htmlPath, 'utf-8')

  // Inline CSS: <link rel="stylesheet" crossorigin href="./assets/main-xxx.css">
  html = html.replace(
    /<link\s+rel="stylesheet"\s+crossorigin\s+href="([^"]+)"[^>]*>/g,
    (match, href) => {
      const cssPath = resolve(dirname(htmlPath), href)
      try {
        const css = readFileSync(cssPath, 'utf-8')
        return `<style>${css}</style>`
      } catch {
        return match
      }
    }
  )

  // Inline JS: <script type="module" crossorigin src="./assets/main-xxx.js"></script>
  html = html.replace(
    /<script\s+type="module"\s+crossorigin\s+src="([^"]+)"[^>]*><\/script>/g,
    (match, src) => {
      const jsPath = resolve(dirname(htmlPath), src)
      try {
        const js = readFileSync(jsPath, 'utf-8')
        return `<script>${js}</script>`
      } catch {
        return match
      }
    }
  )

  writeFileSync(htmlPath, html)
  console.log(`Inlined: ${htmlPath}`)
}
