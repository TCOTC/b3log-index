/**
 * UI-16 微交互：涟漪、按压反馈、页眉滚动态
 */
;(function () {
  const RIPPLE_SELECTOR = '.mic-btn, .mic-card--press, .mic-download__card, .mic-community__card, .mic-pricing__plan'

  function createRipple(event, element) {
    const rect = element.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height) * 2
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const wave = document.createElement('span')
    wave.className = 'mic-ripple__wave'
    wave.style.width = `${size}px`
    wave.style.height = `${size}px`
    wave.style.left = `${x}px`
    wave.style.top = `${y}px`

    if (!element.classList.contains('mic-ripple')) {
      element.classList.add('mic-ripple')
    }

    element.appendChild(wave)
    wave.addEventListener('animationend', () => wave.remove())
  }

  document.addEventListener(
    'pointerdown',
    event => {
      const target = event.target.closest(RIPPLE_SELECTOR)
      if (!target || event.button !== 0) {
        return
      }
      createRipple(event, target)
    },
    { passive: true },
  )

  const header = document.querySelector('.mic-header')
  if (header) {
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 8) {
          header.classList.add('mic-header--scrolled')
        } else {
          header.classList.remove('mic-header--scrolled')
        }
      },
      { passive: true },
    )
  }

  document.querySelectorAll('.mic-hero__tag').forEach(tag => {
    tag.addEventListener(
      'pointerdown',
      event => {
        createRipple(event, tag)
      },
      { passive: true },
    )
  })
})()
