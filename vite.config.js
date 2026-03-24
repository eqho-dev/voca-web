import { defineConfig } from 'vite'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root: root,
  base: '/voca-web/',

  build: {
    outDir: outDir,
    emptyOutDir: true,

    rollupOptions: {
      input: {
        index:    resolve(root, 'index.html'),
        about:    resolve(root, 'about.html'),
        services: resolve(root, 'services.html'),
        blog:     resolve(root, 'blog.html'),
        stage:    resolve(root, 'stage.html'),
        contact:  resolve(root, 'contact.html'),
        'th-index':    resolve(root, 'th/index.html'),
        'th-about':    resolve(root, 'th/about.html'),
        'th-services': resolve(root, 'th/services.html'),
        'th-blog':     resolve(root, 'th/blog.html'),
        'th-stage':    resolve(root, 'th/stage.html'),
        'th-contact':  resolve(root, 'th/contact.html'),
      }
    }
  }
})
