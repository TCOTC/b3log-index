import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.resolve(__dirname, '..')
const pagesDir = path.join(root, 'pages')
const partialsDir = path.join(root, 'partials')

const PLACEHOLDERS = {
  '@@STATIC@@': '/static',
  '@@SITE_URL@@': 'https://b3log.org/siyuan',
  '@@SITE_HOME@@': 'https://b3log.org/siyuan',
  '@@SIYUAN_VERSION@@': '3.6.5',
  '@@SIYUAN_VERSION_V@@': 'v3.6.5',
  '@@RELEASE_CDN@@': 'https://release.liuyun.io/siyuan',
  '@@GITHUB_RELEASE@@': 'https://github.com/siyuan-note/siyuan/releases/download/v3.6.5',
}

function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<include[^>]*>/gi, '')
    .replace(/<\/include>/gi, '')
    .replace(/@@[A-Z_]+@@/g, (m) => PLACEHOLDERS[m] ?? m)
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|h[1-6]|li|div|tr|pre)>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&emsp;/g, '  ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\{\{ title \}\}/g, '')
    .replace(/\{\{ headerClass \}\}/g, '')
    .replace(/[ \t]+\n/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function extractLinks(html) {
  const links = []
  const re = /<a[^>]+href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi
  let m
  while ((m = re.exec(html))) {
    const text = stripHtml(m[2]).replace(/\s+/g, ' ').trim()
    links.push({ href: m[1], text: text || m[1] })
  }
  return links
}

function walkHtml(dir, base = '') {
  const out = []
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const rel = path.join(base, ent.name)
    const full = path.join(dir, ent.name)
    if (ent.isDirectory()) out.push(...walkHtml(full, rel))
    else if (ent.name.endsWith('.html')) out.push(rel)
  }
  return out.sort()
}

function parseTexts(block) {
  return [...block.matchAll(/'([^']*)'/g)].map((m) => m[1])
}

const site = JSON.parse(fs.readFileSync(path.join(root, 'site.json'), 'utf8'))
const pages = walkHtml(pagesDir)
const partials = fs.readdirSync(partialsDir).filter((f) => f.endsWith('.html')).sort()

const staticFiles = fs
  .readdirSync(path.join(root, 'public/static'))
  .filter((f) => !f.startsWith('.'))
  .sort()

let md = '# 思源笔记官网内容归档\n\n'
md += '> 提取自 `src/siyuan/pages/`、`partials/`、`public/static/index.js`、`site.json`。\n'
md += '> 用途：网站重设计前的完整内容清单，避免遗漏既有文案、链接与页面。\n\n'
md += '## 目录\n\n'
md += '1. [站点配置](#站点配置-sitejson)\n'
md += '2. [页面路由](#页面路由清单)\n'
md += '3. [全局 SEO 与导航](#全局-seo-与导航)\n'
md += '4. [首页打字机文案](#首页打字机文案)\n'
md += '5. [静态资源](#静态资源-publicstatic)\n'
md += '6. [各页面正文](#各页面正文)\n'
md += '7. [全站外链汇总](#全站外链汇总)\n'
md += '8. [重设计时注意](#重设计时注意)\n\n'

md += '## 站点配置 (site.json)\n\n'
md += '```json\n' + JSON.stringify(site, null, 2) + '\n```\n\n'

md += '## 页面路由清单\n\n'
md += '| 源文件 | 构建输出 |\n| --- | --- |\n'
for (const p of pages) {
  md += `| pages/${p} | ${p} |\n`
}
md += '\n'

md += '## 全局 SEO 与导航\n\n'
md += '### 中文 head 默认标题/描述 (partials/head-zh.html)\n\n'
md += '- 标题模板：`{页面标题前缀}思源笔记 - 隐私优先的个人知识管理系统，支持 Markdown 排版、块级引用和双向链接`\n'
md += '- og:site_name：`{页面标题前缀}思源笔记`\n'
md += '- Twitter：@b3logos\n'
md += '- 图标：https://b3log.org/images/brand/siyuan-128.png\n\n'

md += '### 英文 head 默认标题/描述 (partials/head-en.html)\n\n'
md += '- 标题模板：`{页面标题前缀}SiYuan - Privacy-first personal knowledge management system that supports Markdown, block-level ref, and bidirectional links`\n'
md += '- og:site_name：`{页面标题前缀}SiYuan`\n\n'

md += '### 中文顶栏 (partials/header-zh.html)\n\n'
md += stripHtml(fs.readFileSync(path.join(partialsDir, 'header-zh.html'), 'utf8')) + '\n\n'
md += '导航链接：GitHub、下载、定价、社区、指南 (https://siyuan-cn.b3log.org)、English (en/?lang=en)\n\n'

md += '### 英文顶栏 (partials/header-en.html)\n\n'
const headerEn = fs.readFileSync(path.join(partialsDir, 'header-en.html'), 'utf8').trim()
if (!headerEn) {
  md += '**当前源文件为空**。英文页面构建后无顶栏导航（仅页脚链接可用）。重设计时需补全或从中文版翻译。\n\n'
} else {
  md += stripHtml(headerEn) + '\n\n'
}

md += '### 中文页脚 (partials/footer-zh.html)\n\n'
md += stripHtml(fs.readFileSync(path.join(partialsDir, 'footer-zh.html'), 'utf8')) + '\n\n'

md += '### 英文页脚 (partials/footer-en.html)\n\n'
md += stripHtml(fs.readFileSync(path.join(partialsDir, 'footer-en.html'), 'utf8')) + '\n\n'

md += '### 语言跳转 (partials/script-redirect-zh.html)\n\n'
md += '中文首页：若浏览器语言非中文且 URL 无 `lang` 参数，自动跳转到 `en/`。\n\n'

const js = fs.readFileSync(path.join(root, 'public/static/index.js'), 'utf8')
md += '## 首页打字机文案\n\n'
const zhMatch = js.match(/if \(typeof lang[\s\S]*?texts = \[([\s\S]*?)\]\s*\n\s*\} else/)
const enMatch = js.match(/\} else \{[\s\S]*?texts = \[([\s\S]*?)\]\s*\n\s*\}/)
if (zhMatch) {
  md += '### 中文\n\n'
  for (const t of parseTexts(zhMatch[1])) md += `- ${t}\n`
  md += '\n'
}
if (enMatch) {
  md += '### 英文\n\n'
  for (const t of parseTexts(enMatch[1])) md += `- ${t}\n`
  md += '\n'
}

md += '## 静态资源 (public/static)\n\n'
md += '页面引用的图片/SVG/脚本（重设计时如需保留视觉素材可参考）：\n\n'
for (const f of staticFiles) md += `- ${f}\n`
md += '\n'

md += '## 各页面正文\n\n'

const allLinks = new Map()
for (const p of pages) {
  const html = fs.readFileSync(path.join(pagesDir, p), 'utf8')
  const titleMatch = html.match(/locals='\{"title":"([^"]*)"\}'/)
  const title = titleMatch ? titleMatch[1] : ''

  md += `### pages/${p}\n\n`
  if (title) md += `- 标题前缀：\`${title}\`\n\n`

  md += stripHtml(html) + '\n\n'

  const links = extractLinks(html)
  if (links.length) {
    md += '**本页链接：**\n\n'
    for (const l of links) md += `- [${l.text}](${l.href})\n`
    md += '\n'
  }

  for (const l of links) {
    const key = `${l.href} || ${l.text}`
    if (!allLinks.has(key)) allLinks.set(key, { ...l, pages: new Set() })
    allLinks.get(key).pages.add(p)
  }

  md += '---\n\n'
}

md += '## 全站外链汇总\n\n'
const sorted = [...allLinks.values()].sort((a, b) => a.href.localeCompare(b.href))
for (const l of sorted) {
  const pageList = [...l.pages].sort().map((x) => `pages/${x}`).join(', ')
  md += `- ${pageList}：[${l.text}](${l.href})\n`
}
md += '\n'

md += '## 重设计时注意\n\n'
md += '1. **中英文内容不对等**：中文隐私政策为完整长文；英文 privacy 为简短声明（更新日期也不同）。\n'
md += '2. **英文首页 feature5 第二段**：标题为 “Mobile server”，但配图与中文 “隐私安全靠的不是承诺” 段不同，疑似文案错位。\n'
md += '3. **定价页差异**：中文为「年付订阅 ￥148/年」；英文 PRO 订阅写为 $148 Lifetime，且无「定时微信提醒」对比行。\n'
md += '4. **下载页差异**：中文版含鸿蒙 NEXT、华为/小米应用市场、酷安、百度网盘；英文版含 Insider 仓库，无鸿蒙与部分国内渠道。\n'
md += '5. **社区页差异**：中文为链滴+微博；英文为 LiuYun+Twitter。\n'
md += '6. **仅中文页面**：`pages/distributors/lizhi.html`（数码荔枝授权证明）。\n'
md += '7. **header-en.html 为空**：英文子站当前无顶栏，需在新设计中处理。\n'

const outPath = path.join(root, 'SITE-CONTENT-ARCHIVE.md')
fs.writeFileSync(outPath, md)
console.log(`Wrote ${outPath} (${fs.statSync(outPath).size} bytes)`)
