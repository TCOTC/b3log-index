(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const supportsScrollTimeline = CSS.supports('animation-timeline', 'scroll()')

  /* 滚动进度条（不支持 scroll-timeline 时的回退） */
  const progressBar = document.querySelector('.mot-progress__bar')
  if (progressBar && !supportsScrollTimeline && !prefersReducedMotion) {
    const updateProgress = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const ratio = scrollHeight > 0 ? scrollTop / scrollHeight : 0
      progressBar.style.width = `${ratio * 100}%`
    }
    window.addEventListener('scroll', updateProgress, { passive: true })
    updateProgress()
  }

  /* 入场动画回退（不支持 view-timeline 时） */
  if (!CSS.supports('animation-timeline', 'view()') && !prefersReducedMotion) {
    const reveals = document.querySelectorAll('.mot-reveal')
    if (reveals.length > 0 && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('mot-is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
      )
      reveals.forEach((el) => observer.observe(el))
    } else {
      reveals.forEach((el) => el.classList.add('mot-is-visible'))
    }
  }

  /* 顶栏随滚动隐藏 / 显示 */
  const header = document.querySelector('.mot-header')
  if (header && !prefersReducedMotion) {
    let lastScroll = 0
    window.addEventListener(
      'scroll',
      () => {
        const current = window.scrollY
        if (current > lastScroll && current > 120) {
          header.classList.add('mot-header--hidden')
        } else {
          header.classList.remove('mot-header--hidden')
        }
        lastScroll = current
      },
      { passive: true },
    )
  }

  /* 移动端导航 */
  const toggle = document.querySelector('.mot-header__toggle')
  const nav = document.querySelector('.mot-header__nav')
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('is-open')
    })
  }
})()
