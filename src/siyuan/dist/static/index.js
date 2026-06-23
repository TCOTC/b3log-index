const type = () => {
  const typeElement = document.querySelector('#slogan')
  let texts
  if (typeof lang !== 'undefined' && 'zh' === lang) {
    texts = [
      '层层透明，思绪清晰可见',
      '透视大纲，一眼洞见全局结构',
      '双链关联，知识脉络无所遁形',
      '块级聚焦，沉浸于当下这一层',
      '加密同步，数据流向完全透明',
      '多层架构，清晰组织你的知识库',
      '透明层叠，洞见全貌',
      '思源有云，往来随心',
    ]
  } else {
    texts = [
      'Layer by layer, thoughts clearly visible',
      'Outline perspective reveals the full structure',
      'Bidirectional links expose knowledge connections',
      'Block focus immerses you in the current layer',
      'Encrypted sync keeps data flow transparent',
      'Multi-layer architecture organizes your knowledge',
      'Transparent layers, see the whole picture',
      'SiYuan has a cloud, communicate freely',
    ]
  }
  let textLength = 0
  let time = 0
  texts.forEach((text, i) => {
    if (i > 0) {
      textLength += text[i - 1].length + 20
    }
    for (let j = 0; j < text.length; j++) {
      time += 150
      setTimeout(() => {
        typeElement.innerHTML =
          text.substr(0, j + 1) +
          `<span class="glass-slogan__caret" style="${j === text.length - 1 ? 'animation-name:glass-flash' : ''}"></span>`
      }, time)
    }
    if (i !== texts.length - 1) {
      time += 2000
      for (let k = 0; k < text.length; k++) {
        time += 50
        setTimeout(() => {
          typeElement.innerHTML =
            typeElement.textContent.substr(0, typeElement.textContent.length - 1) +
            '<span class="glass-slogan__caret"></span>'
        }, time)
      }
    } else {
      setTimeout(() => {
        document.querySelector('.glass-slogan__caret').style.animationName = 'glass-flash'
      }, time + 1)
    }
  })
}

const hasClosestByClassName = (element, className) => {
  let isClosest = false
  while (element && !isClosest && !element.classList.contains('glass-nav')) {
    if (element.classList.contains(className)) {
      isClosest = true
    } else {
      element = element.parentElement
    }
  }
  return isClosest && element
}

const getOS = () => {
  const appVersion = navigator.appVersion
  if (appVersion.indexOf('Win') !== -1) {
    return 'Windows'
  }
  if (appVersion.indexOf('Mac') !== -1) {
    return 'macOS'
  }
  if (/Android/.test(window.navigator.userAgent)) {
    return 'Android'
  }
  if (appVersion.indexOf('X11') !== -1 || appVersion.indexOf('Linux') !== -1) {
    return 'Linux'
  }
  return 'Windows'
}

;(function () {
  const downloadElements = document.querySelectorAll('#download a')
  if (downloadElements.length > 0) {
    const os = getOS()
    downloadElements.forEach(item => {
      if (item.getAttribute('data-os') === os) {
        item.style.display = 'inline-flex'
      } else {
        item.style.display = 'none'
      }
    })
  }

  const navElement = document.querySelector('.glass-nav')
  if (!navElement) {
    return
  }

  const observer = new IntersectionObserver(
    e => {
      e.forEach(item => {
        if (item.isIntersecting) {
          item.target.classList.add('glass-animate--in')
        } else {
          item.target.classList.remove('glass-animate--in')
        }
      })
    },
    {
      rootMargin: '-0% 0% -30% 0%',
      threshold: 0,
    },
  )

  document.querySelectorAll('.glass-animate, .glass-animate--left, .glass-animate--right').forEach(item => {
    observer.observe(item)
  })

  navElement.addEventListener('click', event => {
    const itemElement = hasClosestByClassName(event.target, 'glass-nav__item')
    if (itemElement) {
      const target = document.getElementById(itemElement.getAttribute('data-id'))
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' })
      }
    }
  })

  let initType = false
  const block1Element = document.getElementById('block1')
  const block2Element = document.getElementById('block2')
  const blockImgElement = document.getElementById('blockImg')

  window.addEventListener('scroll', function () {
    const top = document.documentElement.scrollTop

    if (!initType && top > 214) {
      type()
      initType = true
    }

    const feature1 = document.getElementById('feature1')
    if (feature1 && top >= feature1.offsetTop - 58) {
      navElement.classList.add('glass-nav--pin')
    } else {
      navElement.classList.remove('glass-nav--pin')
    }

    document.querySelectorAll('.glass-nav__item').forEach(item => {
      item.classList.remove('glass-nav__item--active')
    })

    const features = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5']
    for (let i = features.length - 1; i >= 0; i--) {
      const el = document.getElementById(features[i])
      if (el && top >= el.offsetTop - 80) {
        const navItem = navElement.querySelector(`.glass-nav__item[data-id="${features[i]}"]`)
        if (navItem) {
          navItem.classList.add('glass-nav__item--active')
        }
        break
      }
    }

    if (blockImgElement && block1Element && block2Element) {
      const staticBase = (() => {
        const link = document.querySelector('link[href*="glass.css"]')
        if (link) {
          return link.href.replace(/glass\.css$/, '')
        }
        return '/static/'
      })()

      blockImgElement.src = staticBase + 'feature3-1.png'
      if (
        top >= block1Element.offsetTop + block1Element.offsetParent.offsetTop + block1Element.clientHeight - 58 &&
        top < block2Element.offsetTop + block2Element.offsetParent.offsetTop + block2Element.clientHeight - 58
      ) {
        blockImgElement.src = staticBase + 'feature3-2.png'
      } else if (top >= block2Element.offsetTop + block2Element.offsetParent.offsetTop + block2Element.clientHeight - 58) {
        blockImgElement.src = staticBase + 'feature3-3.png'
      }
    }
  })
})()
