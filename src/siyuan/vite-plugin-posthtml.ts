import posthtml from 'posthtml'
// @ts-expect-error posthtml-include 无官方类型
import include from 'posthtml-include'
import type { Plugin } from 'vite'

export interface PosthtmlHtmlPluginOptions {
  root: string
  placeholders: Record<string, string>
}

export function posthtmlHtmlPlugin(options: PosthtmlHtmlPluginOptions): Plugin {
  const { root, placeholders } = options

  const applyPlaceholders = (html: string) => {
    let out = html
    for (const [token, value] of Object.entries(placeholders)) {
      out = out.split(token).join(value)
    }
    return out
  }

  const processHtml = async (html: string, filename: string) => {
    const result = await posthtml([
      include({
        root,
        encoding: 'utf8',
      }),
    ]).process(html, { from: filename } as Parameters<ReturnType<typeof posthtml>['process']>[1])

    return applyPlaceholders(result.html)
  }

  return {
    name: 'vite-plugin-posthtml-html',
    transformIndexHtml: {
      order: 'pre',
      async handler(html, ctx) {
        return processHtml(html, ctx.filename)
      },
    },
  }
}
