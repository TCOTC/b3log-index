/** UI-02 新拟态站点交互 */

const neuTypewriter = () => {
  const el = document.querySelector('#slogan')
  if (!el) return

  const texts = [
    '在柔和界面里，思绪缓缓展开',
    '离线书写，像呼吸一样安稳',
    '加密同步，隐私轻柔守护',
    '块与块之间，灵感悄然相连',
    '沉浸编辑，不被工具打断',
    '知识碎片，织成温柔的网络',
    '找到记忆深处的那一缕灵犀',
    '思源有云，往来随心',
  ]

  let time = 600
  let idx = 0

  const tick = () => {
    const text = texts[idx]
    let char = 0

    const typeChar = () => {
      el.innerHTML =
        text.slice(0, char + 1) + '<span class="neu-hero__caret"></span>'
      char++
      if (char < text.length) {
        setTimeout(typeChar, 120)
      } else {
        setTimeout(erase, 2200)
      }
    }

    const erase = () => {
      if (char > 0) {
        char--
        el.innerHTML = text.slice(0, char) + '<span class="neu-hero__caret"></span>'
        setTimeout(erase, 40)
      } else {
        idx = (idx + 1) % texts.length
        setTimeout(tick, 400)
      }
    }

    typeChar()
  }

  tick()
}

const neuDetectOS = () => {
  const items = document.querySelectorAll('#download .neu-download-quick__item')
  if (!items.length) return

  const ua = navigator.appVersion
  let os = 'Windows'
  if (ua.indexOf('Mac') !== -1) os = 'macOS'
  else if (/Android/.test(navigator.userAgent)) os = 'Android'
  else if (ua.indexOf('X11') !== -1 || ua.indexOf('Linux') !== -1) os = 'Linux'

  items.forEach((item) => {
    const match = item.getAttribute('data-os') === os && !item.hasAttribute('data-alt')
    item.setAttribute('data-os-match', match ? '' : null)
    if (match) item.style.display = 'block'
    else if (!item.hasAttribute('data-alt')) item.style.display = 'none'
  })
}

document.addEventListener('DOMContentLoaded', () => {
  neuTypewriter()
  neuDetectOS()
})
