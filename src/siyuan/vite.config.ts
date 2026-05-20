import { globSync, readFileSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import { posthtmlHtmlPlugin } from './vite-plugin-posthtml'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const DEV_PORT = 5173
const PAGES_DIR = 'pages'

interface SiteInfo {
  version: string
  siteUrl: string
  releaseCdn: string
  githubRepo: string
}

function readSite(root: string): SiteInfo {
  return JSON.parse(readFileSync(path.join(root, 'site.json'), 'utf8'))
}

function discoverPages(pagesRoot: string): Record<string, string> {
  const input: Record<string, string> = {}
  for (const rel of globSync('**/*.html', { cwd: pagesRoot })) {
    const key = rel.replace(/\.html$/, '')
    input[key] = path.resolve(pagesRoot, rel)
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
  const pagesRoot = path.join(__dirname, PAGES_DIR)

  return {
    root: pagesRoot,
    base: isProd ? (pathname.endsWith('/') ? pathname : `${pathname}/`) : '/',
    publicDir: path.join(__dirname, 'public'),
    plugins: [
      posthtmlHtmlPlugin({
        root: __dirname,
        placeholders: createPlaceholders(mode, site),
        enableMinify: true, // 开发环境也压缩，避免与生产环境不一致
      }),
    ],
    build: {
      outDir: path.join(__dirname, 'dist'),
      emptyOutDir: true,
      rollupOptions: {
        input: discoverPages(pagesRoot),
      },
    },
    server: {
      port: DEV_PORT,
      open: '/',
      fs: {
        allow: [__dirname],
      },
    },
  }
})
