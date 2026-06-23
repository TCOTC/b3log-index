const getOS = () => {
  const appVersion = navigator.appVersion
  if (appVersion.indexOf('Win') !== -1) return 'Windows'
  if (appVersion.indexOf('Mac') !== -1) return 'macOS'
  if (/Android/.test(window.navigator.userAgent)) return 'Android'
  if (appVersion.indexOf('X11') !== -1 || appVersion.indexOf('Linux') !== -1) return 'Linux'
  return 'Windows'
}

;(function () {
  const downloadBtns = document.querySelectorAll('#download [data-os]')
  if (downloadBtns.length > 0) {
    const os = getOS()
    downloadBtns.forEach((btn) => {
      btn.style.display = btn.getAttribute('data-os') === os ? 'inline-flex' : 'none'
    })
  }
})()
