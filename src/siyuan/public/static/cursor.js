/**
 * UI-43 交互式光标：自定义光标、拖尾、磁吸 hover、卡片放大
 */
;(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const isCoarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches

  if (prefersReducedMotion || isCoarsePointer) {
    return
  }

  const TRAIL_COUNT = 12
  const MAGNETIC_STRENGTH = 0.35
  const SCALE_HOVER = 1.06

  let mouseX = window.innerWidth / 2
  let mouseY = window.innerHeight / 2
  let cursorX = mouseX
  let cursorY = mouseY
  let ringX = mouseX
  let ringY = mouseY
  let isHovering = false
  let isClicking = false
  let isVisible = false

  const html = document.documentElement
  html.classList.add('cur-cursor-active')

  const cursor = document.createElement('div')
  cursor.className = 'cur-cursor cur-cursor--hidden'
  cursor.setAttribute('aria-hidden', 'true')
  cursor.innerHTML =
    '<span class="cur-cursor__ring"></span><span class="cur-cursor__dot"></span>'
  document.body.appendChild(cursor)

  const trailLayer = document.createElement('div')
  trailLayer.className = 'cur-trail'
  trailLayer.setAttribute('aria-hidden', 'true')
  document.body.appendChild(trailLayer)

  const trailDots = []
  const trailPositions = []

  for (let i = 0; i < TRAIL_COUNT; i++) {
    const dot = document.createElement('span')
    dot.className = 'cur-trail__dot'
    trailLayer.appendChild(dot)
    trailDots.push(dot)
    trailPositions.push({ x: mouseX, y: mouseY })
  }

  const magneticElements = () =>
    document.querySelectorAll('.cur-magnetic, .cur-btn, .cur-card, .cur-community-card, .cur-download-tile')

  const hoverScaleElements = () => document.querySelectorAll('.cur-hover-scale, .cur-card')

  const updateHeroSpotlight = (x, y) => {
    const stage = document.querySelector('.cur-hero__stage')
    if (!stage) return
    const rect = stage.getBoundingClientRect()
    const px = ((x - rect.left) / rect.width) * 100
    const py = ((y - rect.top) / rect.height) * 100
    stage.style.setProperty('--cur-spot-x', `${px}%`)
    stage.style.setProperty('--cur-spot-y', `${py}%`)
  }

  const applyMagnetic = (el, x, y) => {
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = x - cx
    const dy = y - cy
    const dist = Math.hypot(dx, dy)
    const maxDist = Math.max(rect.width, rect.height) * 0.9

    if (dist < maxDist) {
      const pull = (1 - dist / maxDist) * MAGNETIC_STRENGTH
      el.style.transform = `translate(${dx * pull}px, ${dy * pull}px)`
    } else {
      el.style.transform = ''
    }
  }

  const resetMagnetic = () => {
    magneticElements().forEach((el) => {
      el.style.transform = ''
    })
  }

  const resetHoverScale = () => {
    hoverScaleElements().forEach((el) => {
      if (!el.matches(':hover')) {
        el.style.transform = ''
      }
    })
  }

  document.addEventListener(
    'mousemove',
    (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      if (!isVisible) {
        isVisible = true
        cursor.classList.remove('cur-cursor--hidden')
      }
      updateHeroSpotlight(mouseX, mouseY)
    },
    { passive: true },
  )

  document.addEventListener('mouseleave', () => {
    isVisible = false
    cursor.classList.add('cur-cursor--hidden')
    resetMagnetic()
    resetHoverScale()
  })

  document.addEventListener(
    'mousedown',
    () => {
      isClicking = true
      cursor.classList.add('cur-cursor--click')
    },
    { passive: true },
  )

  document.addEventListener(
    'mouseup',
    () => {
      isClicking = false
      cursor.classList.remove('cur-cursor--click')
    },
    { passive: true },
  )

  document.addEventListener(
    'mouseover',
    (e) => {
      const target = e.target
      if (!(target instanceof Element)) return
      const interactive = target.closest('a, button, .cur-magnetic, .cur-card, .cur-btn')
      if (interactive) {
        isHovering = true
        cursor.classList.add('cur-cursor--hover')
      }
      const card = target.closest('.cur-card, .cur-community-card, .cur-download-tile')
      if (card instanceof HTMLElement) {
        card.style.transform = `scale(${SCALE_HOVER})`
      }
    },
    { passive: true },
  )

  document.addEventListener(
    'mouseout',
    (e) => {
      const target = e.target
      if (!(target instanceof Element)) return
      const interactive = target.closest('a, button, .cur-magnetic, .cur-card, .cur-btn')
      if (interactive && !interactive.contains(e.relatedTarget)) {
        isHovering = false
        cursor.classList.remove('cur-cursor--hover')
      }
      const card = target.closest('.cur-card, .cur-community-card, .cur-download-tile')
      if (card instanceof HTMLElement && !card.contains(e.relatedTarget)) {
        card.style.transform = ''
      }
    },
    { passive: true },
  )

  const lerp = (a, b, t) => a + (b - a) * t

  const tick = () => {
    cursorX = lerp(cursorX, mouseX, 0.55)
    cursorY = lerp(cursorY, mouseY, 0.55)
    ringX = lerp(ringX, mouseX, isHovering ? 0.18 : 0.28)
    ringY = lerp(ringY, mouseY, isHovering ? 0.18 : 0.28)

    cursor.style.transform = `translate(${ringX}px, ${ringY}px)`

    trailPositions[0].x = cursorX
    trailPositions[0].y = cursorY

    for (let i = TRAIL_COUNT - 1; i > 0; i--) {
      trailPositions[i].x = lerp(trailPositions[i].x, trailPositions[i - 1].x, 0.35)
      trailPositions[i].y = lerp(trailPositions[i].y, trailPositions[i - 1].y, 0.35)
    }

    trailDots.forEach((dot, i) => {
      const pos = trailPositions[i]
      const opacity = (1 - i / TRAIL_COUNT) * 0.65
      const scale = 1 - i / TRAIL_COUNT * 0.6
      dot.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale})`
      dot.style.opacity = String(opacity)
    })

    magneticElements().forEach((el) => {
      if (el instanceof HTMLElement) {
        applyMagnetic(el, mouseX, mouseY)
      }
    })

    requestAnimationFrame(tick)
  }

  requestAnimationFrame(tick)
})()
