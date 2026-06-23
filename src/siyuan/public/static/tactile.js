const tacType = () => {
  const el = document.querySelector('#tac-slogan')
  if (!el) return

  const texts = [
    '随时随地离线可用，弹性界面不卡顿',
    '端到端加密守护隐私，触感安心',
    '优雅的 Markdown，每一次敲击都有回弹',
    '沉浸在内容构思中，界面随思绪变形',
    '触摸灵感脉络，双链像橡皮筋串联',
    '知识碎片捏成体系，结构弹性重组',
    '挖掘记忆深处的灵犀，轻轻一按即现',
    '思源有云，往来随心，同步如果冻回弹',
  ]

  let time = 0
  texts.forEach((text, i) => {
    for (let j = 0; j < text.length; j++) {
      time += 100
      const captured = text
      const idx = j
      setTimeout(() => {
        el.innerHTML =
          captured.substr(0, idx + 1) +
          `<span class="tac-slogan__caret"${idx === captured.length - 1 ? ' style="animation-name:tac-blink"' : ''}></span>`
      }, time)
    }
    if (i < texts.length - 1) {
      time += 1600
      for (let k = 0; k < text.length; k++) {
        time += 35
        setTimeout(() => {
          const current = el.textContent || ''
          el.innerHTML = current.substr(0, current.length - 1) + '<span class="tac-slogan__caret"></span>'
        }, time)
      }
    }
  })
}

const tacHeroTilt = () => {
  const title = document.querySelector('#tac-hero-title')
  if (!title || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

  document.addEventListener('pointermove', (e) => {
    const rect = title.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / rect.width
    const dy = (e.clientY - cy) / rect.height
    title.style.transform = `perspective(600px) rotateY(${dx * 6}deg) rotateX(${-dy * 4}deg) scale(1.02)`
  })

  document.addEventListener('pointerleave', () => {
    title.style.transform = ''
  })
}

const tacRipple = () => {
  document.querySelectorAll('.tac-btn, .tac-download-btn').forEach((btn) => {
    btn.addEventListener('pointerdown', (e) => {
      const ripple = document.createElement('span')
      ripple.className = 'tac-ripple'
      const rect = btn.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      ripple.style.cssText = `
        position:absolute;width:${size}px;height:${size}px;
        left:${e.clientX - rect.left - size / 2}px;
        top:${e.clientY - rect.top - size / 2}px;
        border-radius:50%;background:rgba(255,255,255,0.4);
        transform:scale(0);animation:tac-ripple-pop 0.5s ease-out forwards;
        pointer-events:none;
      `
      btn.style.position = 'relative'
      btn.style.overflow = 'hidden'
      btn.appendChild(ripple)
      setTimeout(() => ripple.remove(), 500)
    })
  })
}

;(function () {
  const slogan = document.querySelector('#tac-slogan')
  if (slogan) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            tacType()
            observer.disconnect()
          }
        })
      },
      { threshold: 0.5 }
    )
    observer.observe(slogan)
  }

  tacHeroTilt()
  tacRipple()
})()
