const skType = () => {
  const el = document.querySelector('#sk-slogan')
  if (!el) return

  const texts = [
    '翻页之间，知识自然流淌',
    '装订线旁，思绪有序排列',
    '墨水痕迹，记录每一次灵感',
    '块引用如书签，串联每一页',
    '闪卡复习，像翻阅旧日笔记',
    '本地存储，你的笔记本永远属于你',
  ]

  let time = 0
  texts.forEach((text, i) => {
    for (let j = 0; j < text.length; j++) {
      time += 120
      const captured = text
      const idx = j
      setTimeout(() => {
        el.innerHTML =
          captured.substr(0, idx + 1) +
          `<span class="sk-slogan__caret"${idx === captured.length - 1 ? ' style="animation-name:sk-blink"' : ''}></span>`
      }, time)
    }
    if (i < texts.length - 1) {
      time += 1800
      for (let k = 0; k < text.length; k++) {
        time += 40
        setTimeout(() => {
          const current = el.textContent || ''
          el.innerHTML = current.substr(0, current.length - 1) + '<span class="sk-slogan__caret"></span>'
        }, time)
      }
    }
  })
}

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

  if (document.querySelector('#sk-slogan')) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            skType()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(document.querySelector('#sk-slogan'))
  }
})()
