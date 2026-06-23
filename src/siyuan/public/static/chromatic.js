(function () {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  document.querySelectorAll('.chr-rgb-text').forEach((el) => {
    if (reducedMotion) return
    document.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      const dx = (e.clientX - (rect.left + rect.width / 2)) / rect.width
      const offset = Math.max(-5, Math.min(5, dx * 10))
      el.style.setProperty('--chr-rgb-offset', `${Math.abs(offset)}px`)
    })
  })

  const bars = document.querySelectorAll('.chr-hero__bar')
  if (bars.length && !reducedMotion) {
    bars.forEach((bar, i) => {
      bar.style.animationDelay = `${i * 0.12}s`
    })
  }
})()
