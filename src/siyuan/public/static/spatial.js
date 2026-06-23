(function () {
  const scene = document.querySelector('.spc-scene')
  if (!scene) return

  const panels = scene.querySelectorAll('[data-depth]')
  let rafId = 0
  let targetX = 0
  let targetY = 0
  let currentX = 0
  let currentY = 0

  const onMove = (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2
    const y = (event.clientY / window.innerHeight - 0.5) * 2
    targetX = x
    targetY = y
    if (!rafId) rafId = requestAnimationFrame(tick)
  }

  const tick = () => {
    currentX += (targetX - currentX) * 0.06
    currentY += (targetY - currentY) * 0.06

    panels.forEach((panel) => {
      const depth = Number(panel.getAttribute('data-depth')) || 1
      const tx = currentX * depth * 12
      const ty = currentY * depth * 10
      panel.style.transform = `translate3d(${tx}px, ${ty}px, 0)`
    })

    if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
      rafId = requestAnimationFrame(tick)
    } else {
      rafId = 0
    }
  }

  window.addEventListener('pointermove', onMove, { passive: true })

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('spc-panel--visible')
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )

  document.querySelectorAll('.spc-panel--animate').forEach((el) => observer.observe(el))
})()
