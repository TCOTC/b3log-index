const clayType = () => {
  const el = document.querySelector('#clay-slogan')
  if (!el) return

  const texts = [
    '像揉面团一样整理知识块',
    '柔软的双链，串联每一个灵感',
    '用糖果色标签给笔记分类',
    '闪卡复习，像玩游戏一样轻松',
    '模板捏一捏，格式立刻成型',
    '本地存储，你的陶土永远属于你',
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
          `<span class="clay-slogan__caret"${idx === captured.length - 1 ? ' style="animation-name:clay-blink"' : ''}></span>`
      }, time)
    }
    if (i < texts.length - 1) {
      time += 1800
      for (let k = 0; k < text.length; k++) {
        time += 40
        setTimeout(() => {
          const current = el.textContent || ''
          el.innerHTML = current.substr(0, current.length - 1) + '<span class="clay-slogan__caret"></span>'
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

  if (document.querySelector('#clay-slogan')) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clayType()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(document.querySelector('#clay-slogan'))
  }
})()
