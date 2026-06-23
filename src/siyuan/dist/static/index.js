const type = () => {
  const typeElement = document.querySelector('#slogan')
  let texts
  if (typeof lang !== 'undefined' && 'zh' === lang) {
    texts = [
      '按下按钮，涟漪即刻扩散',
      '悬停卡片，微妙起伏回应指尖',
      '切换状态，过渡动画丝滑连贯',
      '拖拽块级，实时反馈位置变化',
      '保存瞬间，轻弹确认操作完成',
      '同步进度，动态指示连接状态',
      '每一次交互，都有恰到好处的回应',
      '思源有云，往来随心',
    ]
  } else {
    texts = [
      'Press a button, ripples spread instantly',
      'Hover a card, subtle lift responds to touch',
      'Switch states with silky smooth transitions',
      'Drag blocks with real-time position feedback',
      'Save with a gentle bounce confirming success',
      'Sync progress shown with dynamic indicators',
      'Every interaction gets the right response',
      'SiYuan has a cloud, communicate freely',
    ]
  }
  let time = 0
  texts.forEach((text, i) => {
    for (let j = 0; j < text.length; j++) {
      time += 150
      setTimeout(() => {
        typeElement.innerHTML =
          text.substr(0, j + 1) +
          `<span class="mic-slogan__caret" style="${j === text.length - 1 ? 'animation-name:mic-flash' : ''}"></span>`
      }, time)
    }
    if (i !== texts.length - 1) {
      time += 2000
      for (let k = 0; k < text.length; k++) {
        time += 50
        setTimeout(() => {
          typeElement.innerHTML =
            typeElement.textContent.substr(0, typeElement.textContent.length - 1) +
            '<span class="mic-slogan__caret"></span>'
        }, time)
      }
    } else {
      setTimeout(() => {
        document.querySelector('.mic-slogan__caret').style.animationName = 'mic-flash'
      }, time + 1)
    }
  })
}

const hasClosestByClassName = (element, className) => {
  let isClosest = false
  while (element && !isClosest && !element.classList.contains('mic-nav')) {
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

  const navElement = document.querySelector('.mic-nav')
  if (!navElement) {
    return
  }

  const observer = new IntersectionObserver(
    e => {
      e.forEach(item => {
        if (item.isIntersecting) {
          item.target.classList.add('mic-animate--in')
        } else {
          item.target.classList.remove('mic-animate--in')
        }
      })
    },
    {
      rootMargin: '-0% 0% -30% 0%',
      threshold: 0,
    },
  )

  document.querySelectorAll('.mic-animate, .mic-animate--left, .mic-animate--right').forEach(item => {
    observer.observe(item)
  })

  navElement.addEventListener('click', event => {
    const itemElement = hasClosestByClassName(event.target, 'mic-nav__item')
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
      navElement.classList.add('mic-nav--pin')
    } else {
      navElement.classList.remove('mic-nav--pin')
    }

    document.querySelectorAll('.mic-nav__item').forEach(item => {
      item.classList.remove('mic-nav__item--active')
    })

    const features = ['feature1', 'feature2', 'feature3', 'feature4', 'feature5']
    for (let i = features.length - 1; i >= 0; i--) {
      const el = document.getElementById(features[i])
      if (el && top >= el.offsetTop - 80) {
        const navItem = navElement.querySelector(`.mic-nav__item[data-id="${features[i]}"]`)
        if (navItem) {
          navItem.classList.add('mic-nav__item--active')
        }
        break
      }
    }

    if (blockImgElement && block1Element && block2Element) {
      const staticBase = (() => {
        const link = document.querySelector('link[href*="micro.css"]')
        if (link) {
          return link.href.replace(/micro\.css$/, '')
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
