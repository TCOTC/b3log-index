import fs from 'node:fs'
import path from 'node:path'
import type { Plugin } from 'vite'

/** 中文页源码在 zh/，构建产物与 dev 访问路径保持在站点根（URL 不含 /zh） */
export function zhRootPlugin(rootDir: string): Plugin {
  const zhDir = path.join(rootDir, 'zh')

  const resolveZhPage = (pathname: string): string | null => {
    const page = pathname.startsWith('/') ? pathname.slice(1) : pathname
    if (!page || page.includes('..')) {
      return null
    }
    const file = path.join(zhDir, page)
    return file.endsWith('.html') && fs.existsSync(file) ? page : null
  }

  return {
    name: 'vite-plugin-zh-root',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        if (!req.url) {
          next()
          return
        }

        const [pathname, search = ''] = req.url.split('?')
        const query = search ? `?${search}` : ''

        if (pathname === '/' || pathname === '') {
          req.url = `/zh/index.html${query}`
          next()
          return
        }

        const page = resolveZhPage(pathname)
        if (page) {
          req.url = `/zh/${page}${query}`
        }
        next()
      })
    },
    closeBundle() {
      const distDir = path.join(rootDir, 'dist')
      const distZh = path.join(distDir, 'zh')
      if (!fs.existsSync(distZh)) {
        return
      }

      const names = fs.readdirSync(distZh)
      const conflicts = names.filter((name) =>
        fs.existsSync(path.join(distDir, name)),
      )

      if (conflicts.length > 0) {
        throw new Error(
          `[vite-plugin-zh-root] dist/zh 与 dist 根目录第一层同名，已中止构建以避免覆盖：${conflicts.join(', ')}`,
        )
      }

      for (const name of names) {
        fs.renameSync(path.join(distZh, name), path.join(distDir, name))
      }
      fs.rmSync(distZh, { recursive: true })
    },
  }
}
