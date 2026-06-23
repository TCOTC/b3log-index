/** UI-12 扁平化设计 — 下载页 OS 检测 */
;(function () {
  const downloadRoot = document.getElementById('flat-download-quick')
  if (!downloadRoot) return

  const getOS = () => {
    const ua = navigator.userAgent
    if (/Win/.test(navigator.appVersion)) return 'Windows'
    if (/Mac/.test(navigator.appVersion)) return 'macOS'
    if (/Android/.test(ua)) return 'Android'
    if (/Linux/.test(navigator.appVersion)) return 'Linux'
    return 'Windows'
  }

  const os = getOS()
  downloadRoot.querySelectorAll('[data-os]').forEach((el) => {
    el.style.display = el.dataset.os === os ? 'flex' : 'none'
  })
})()
