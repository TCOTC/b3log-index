const getOS = () => {
  const appVersion = navigator.appVersion
  if (appVersion.indexOf('Win') !== -1) {
    return 'Windows'
  }
  if (appVersion.indexOf('Mac') !== -1) {
    return 'macOS'
  }
  if (/Android/.test(window.navigator.userAgent)) {
    return 'Android'
  }
  if (appVersion.indexOf('X11') !== -1 || appVersion.indexOf('Linux') !== -1) {
    return 'Linux'
  }
  return 'Windows'
}

;(function () {
  const downloadRoot = document.getElementById('download')
  if (!downloadRoot) {
    return
  }

  const os = getOS()
  downloadRoot.querySelectorAll('[data-os]').forEach((item) => {
    item.style.display = item.getAttribute('data-os') === os ? 'inline-block' : 'none'
  })
})()
