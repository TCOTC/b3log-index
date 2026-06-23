(function () {
  const wobbleEls = document.querySelectorAll('[data-cha-wobble]')

  wobbleEls.forEach(function (el) {
    const style = window.getComputedStyle(el)
    const transform = style.transform
    if (transform && transform !== 'none') {
      const match = transform.match(/matrix\([^,]+,[^,]+,[^,]+,[^,]+,[^,]+,[^)]+\)/)
      if (match) {
        const values = transform.split(',')
        const a = parseFloat(values[0].replace('matrix(', ''))
        const b = parseFloat(values[1])
        const rot = Math.round(Math.atan2(b, a) * (180 / Math.PI))
        el.style.setProperty('--cha-rot', rot + 'deg')
      }
    }

    el.addEventListener('mouseenter', function () {
      el.classList.add('cha-wobble-active')
    })

    el.addEventListener('animationend', function () {
      el.classList.remove('cha-wobble-active')
    })
  })
})()
