/** 编辑杂志风格 — 下载页 OS 快捷入口 */
(function () {
  const getOS = () => {
    const appVersion = navigator.appVersion
    if (appVersion.indexOf('Win') !== -1) return 'Windows'
    if (appVersion.indexOf('Mac') !== -1) return 'macOS'
    if (/Android/.test(window.navigator.userAgent)) return 'Android'
    if (appVersion.indexOf('X11') !== -1 || appVersion.indexOf('Linux') !== -1) return 'Linux'
    return 'Windows'
  }

  const quickCards = document.querySelectorAll('[data-os]')
  if (quickCards.length === 0) return

  const os = getOS()
  quickCards.forEach((card) => {
    card.hidden = card.getAttribute('data-os') !== os
  })
})()
