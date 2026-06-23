(function () {
  const header = document.querySelector('.h3d-header')
  if (header) {
    window.addEventListener('scroll', () => {
      header.classList.toggle('h3d-header--scrolled', window.scrollY > 20)
    })
  }

  const currentPage = window.location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.h3d-nav__link').forEach(link => {
    const href = link.getAttribute('href') || ''
    if (href.endsWith(currentPage) || (currentPage === '' && href.endsWith('/'))) {
      link.classList.add('h3d-nav__link--active')
    }
  })

  const revealObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('h3d-reveal--in')
        }
      })
    },
    { rootMargin: '-5% 0% -10% 0%', threshold: 0.1 }
  )
  document.querySelectorAll('.h3d-reveal').forEach(el => revealObserver.observe(el))

  document.querySelectorAll('.h3d-card[data-tilt]').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      card.style.transform = `rotateY(${x * 12}deg) rotateX(${-y * 12}deg) translateZ(10px)`
    })
    card.addEventListener('mouseleave', () => {
      card.style.transform = ''
    })
  })

  const downloadContainer = document.querySelector('#h3d-download')
  if (downloadContainer) {
    const getOS = () => {
      const appVersion = navigator.appVersion
      if (appVersion.indexOf('Win') !== -1) return 'Windows'
      if (appVersion.indexOf('Mac') !== -1) return 'macOS'
      if (/Android/.test(window.navigator.userAgent)) return 'Android'
      if (appVersion.indexOf('X11') !== -1 || appVersion.indexOf('Linux') !== -1) return 'Linux'
      return 'Windows'
    }
    const os = getOS()
    downloadContainer.querySelectorAll('[data-os]').forEach(item => {
      item.style.display = item.getAttribute('data-os') === os ? '' : 'none'
    })
  }
})()
