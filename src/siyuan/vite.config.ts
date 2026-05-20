import { globSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { posthtmlHtmlPlugin } from './vite-plugin-posthtml'
import { zhRootPlugin } from './vite-plugin-zh-root'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const DEV_PORT = 5173

interface SiteInfo {
  version: string
  siteUrl: string
  releaseCdn: string
  githubRepo: string
}

function readSite(root: string): SiteInfo {
  return JSON.parse(readFileSync(path.join(root, 'site.json'), 'utf8'))
}

/** zh/ 页面入口键不含 zh 前缀（与 zhRootPlugin 输出路径一致） */
function discoverPages(root: string): Record<string, string> {
  const input: Record<string, string> = {}
  for (const rel of globSync('{zh,en,distributors}/**/*.html', { cwd: root })) {
    const key = rel.startsWith('zh/')
      ? rel.slice(3).replace(/\.html$/, '')
      : rel.replace(/\.html$/, '')
    input[key] = path.resolve(root, rel)
  }
  return input
}

/** site.json 中的 URL 不要以 / 结尾 */
function createPlaceholders(mode: string, site: SiteInfo) {
  const isProd = mode === 'production'
  const siteUrl = isProd ? site.siteUrl : `http://localhost:${DEV_PORT}`

  return {
    '@@STATIC@@': (isProd ? site.siteUrl : '') + '/static',
    '@@SITE_URL@@': siteUrl,
    '@@SITE_HOME@@': isProd ? siteUrl : '/',
    '@@SIYUAN_VERSION@@': site.version,
    '@@SIYUAN_VERSION_V@@': `v${site.version}`,
    '@@RELEASE_CDN@@': site.releaseCdn,
    '@@GITHUB_RELEASE@@': `${site.githubRepo}/releases/download/v${site.version}`,
  }
}

export default defineConfig(({ mode }) => {
  const site = readSite(__dirname)
  const isProd = mode === 'production'
  const pathname = new URL(site.siteUrl).pathname

  return {
    base: isProd ? (pathname.endsWith('/') ? pathname : `${pathname}/`) : '/',
    publicDir: 'public',
    plugins: [
      posthtmlHtmlPlugin({
        root: __dirname,
        placeholders: createPlaceholders(mode, site),
      }),
      zhRootPlugin(__dirname),
    ],
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input: discoverPages(__dirname),
      },
    },
    server: {
      port: DEV_PORT,
      open: '/index.html',
    },
  }
})
