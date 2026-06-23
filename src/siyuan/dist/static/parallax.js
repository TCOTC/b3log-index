/**
 * Parallax Storytelling — UI-31
 * 滚动驱动多层视差、故事章节渐入
 */
;(function () {
  'use strict'

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let ticking = false

  /** 根据滚动偏移更新视差层 */
  function updateParallax() {
    const scrollY = window.scrollY

    document.querySelectorAll('[data-plx-layer]').forEach((layer) => {
      const speed = parseFloat(layer.dataset.plxSpeed || '0.3')
      const offset = scrollY * speed
      layer.style.transform = `translate3d(0, ${offset}px, 0)`
    })

    document.querySelectorAll('[data-plx-scene]').forEach((scene) => {
      const rect = scene.getBoundingClientRect()
      const viewH = window.innerHeight
      const progress = Math.max(0, Math.min(1, 1 - rect.top / viewH))
      scene.style.setProperty('--plx-scene-progress', String(progress))
    })

    ticking = false
  }

  function onScroll() {
    if (prefersReduced || ticking) return
    ticking = true
    requestAnimationFrame(updateParallax)
  }

  /** 故事章节进入视口时触发 */
  function initChapterReveal() {
    const chapters = document.querySelectorAll('[data-plx-chapter]:not(.is-visible)')
    if (!chapters.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    )

    chapters.forEach((ch) => observer.observe(ch))
  }

  /** 子页标题随滚动轻微视差 */
  function initPageHeader() {
    const title = document.querySelector('[data-plx-page-title]')
    if (!title || prefersReduced) return

    window.addEventListener(
      'scroll',
      () => {
        const rect = title.getBoundingClientRect()
        const shift = Math.max(-40, Math.min(0, rect.top * 0.15))
        title.style.transform = `translate3d(0, ${shift}px, 0)`
      },
      { passive: true }
    )
  }

  /** 滚动进度条 */
  function initProgress() {
    const bar = document.querySelector('[data-plx-progress]')
    if (!bar || prefersReduced) return

    window.addEventListener(
      'scroll',
      () => {
        const docH = document.documentElement.scrollHeight - window.innerHeight
        const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0
        bar.style.width = `${pct}%`
      },
      { passive: true }
    )
  }

  function init() {
    if (!prefersReduced) {
      window.addEventListener('scroll', onScroll, { passive: true })
      updateParallax()
    }
    initChapterReveal()
    initPageHeader()
    initProgress()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
