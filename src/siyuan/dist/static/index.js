;(function () {
  const downloadRoot = document.querySelector('#download')
  if (!downloadRoot) {
    return
  }

  const ua = navigator.userAgent
  let os = 'Windows'
  if (ua.indexOf('Mac') > -1) {
    os = 'macOS'
  } else if (ua.indexOf('Linux') > -1) {
    os = 'Linux'
  } else if (ua.indexOf('Android') > -1) {
    os = 'Android'
  }

  downloadRoot.querySelectorAll('a[data-os]').forEach((item) => {
    if (item.getAttribute('data-os') === os) {
      item.style.display = 'block'
    }
  })
})()
