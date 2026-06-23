/**
 * Kinetic Typography — UI-30
 * 字母拆分入场、滚动触发文字变形与字号变化
 */
;(function () {
  'use strict'

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  /** 将文本节点拆分为逐字 span.kin-char */
  function splitChars(el, baseDelay) {
    if (!el || el.dataset.kinSplit === 'done') return
    const text = el.textContent.trim()
    el.textContent = ''
    el.dataset.kinSplit = 'done'

    ;[...text].forEach((ch, i) => {
      const span = document.createElement('span')
      span.className = 'kin-char' + (/\p{P}/u.test(ch) ? ' kin-char--punct' : '')
      span.textContent = ch
      if (!prefersReduced) {
        span.style.animationDelay = `${baseDelay + i * 0.04}s`
      }
      el.appendChild(span)
    })
  }

  /** Hero 标题逐字入场 */
  function initHero() {
    document.querySelectorAll('[data-kin-hero]').forEach((line, lineIdx) => {
      splitChars(line, lineIdx * 0.35)
    })
  }

  /** 滚动可见时触发 feature 标题字母 cascade */
  function initFeatureCascade() {
    const features = document.querySelectorAll('.kin-feature[data-kin-reveal]')
    if (!features.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const feature = entry.target
          const title = feature.querySelector('[data-kin-cascade]')
          if (title && title.dataset.kinSplit !== 'done') {
            splitChars(title, 0)
            ;[...title.querySelectorAll('.kin-char')].forEach((ch, i) => {
              ch.style.transitionDelay = `${i * 0.035}s`
            })
          }
          feature.classList.add('is-visible')
          observer.unobserve(feature)
        })
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    )

    features.forEach((f) => observer.observe(f))
  }

  /** 滚动触发 letter-spacing 变形 */
  function initMorph() {
    const morphs = document.querySelectorAll('[data-kin-morph]')
    if (!morphs.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting)
        })
      },
      { threshold: 0.5 }
    )

    morphs.forEach((el) => observer.observe(el))
  }

  /** 滚动触发关键词字号放大 */
  function initScaleText() {
    const scales = document.querySelectorAll('[data-kin-scale]')
    if (!scales.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-expanded', entry.isIntersecting)
        })
      },
      { threshold: 0.6 }
    )

    scales.forEach((el) => observer.observe(el))
  }

  /** 波浪文字延迟 */
  function initWave() {
    document.querySelectorAll('.kin-wave__char').forEach((ch, i) => {
      ch.style.animationDelay = `${i * 0.08}s`
    })
  }

  /** 子页标题滚动视差字号 */
  function initPageHeaderParallax() {
    const header = document.querySelector('[data-kin-page-title]')
    if (!header || prefersReduced) return

    window.addEventListener(
      'scroll',
      () => {
        const rect = header.getBoundingClientRect()
        const progress = Math.max(0, Math.min(1, 1 - rect.top / window.innerHeight))
        const scale = 1 + progress * 0.08
        header.style.transform = `scale(${scale})`
        header.style.transformOrigin = 'center top'
      },
      { passive: true }
    )
  }

  function init() {
    initHero()
    initFeatureCascade()
    initMorph()
    initScaleText()
    initWave()
    initPageHeaderParallax()
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init)
  } else {
    init()
  }
})()
