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
  const downloadElements = document.querySelectorAll('#download a[data-os]')
  if (downloadElements.length > 0) {
    const os = getOS()
    downloadElements.forEach(item => {
      if (item.getAttribute('data-os') === os) {
        item.style.display = 'flex'
      } else {
        item.style.display = 'none'
      }
    })
  }

  const navElement = document.getElementById('oled-nav')
  if (navElement) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 20) {
        navElement.classList.add('oled-nav--pin')
      } else {
        navElement.classList.remove('oled-nav--pin')
      }
    })
  }
})()
