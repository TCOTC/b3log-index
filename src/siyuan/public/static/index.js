/** UI-43 页面脚本占位 */
;(function () {
  const path = window.location.pathname
  document.querySelectorAll('.cur-header__link').forEach((link) => {
    const href = link.getAttribute('href')
    if (href && path.endsWith(href)) {
      link.classList.add('cur-header__link--active')
    }
  })
})()
