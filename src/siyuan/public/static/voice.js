/**
 * UI-44 语音优先多模态：波形动画、麦克风 UI、助手对话气质
 */
;(function () {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const mic = document.getElementById('voi-mic')
  const waveform = document.getElementById('voi-waveform')
  const status = document.getElementById('voi-status')
  const input = document.getElementById('voi-input')
  const userBubble = document.getElementById('voi-demo-user')
  const transcript = document.getElementById('voi-demo-transcript')
  const modeButtons = document.querySelectorAll('[data-voi-mode]')

  const DEMO_TEXT = '把下周产品评审的要点整理成大纲，第三点是用户反馈汇总。'
  let listening = false
  let typeIndex = 0
  let typeTimer = null
  let waveFrame = null
  let waveBars = []

  const setListening = (on) => {
    listening = on
    if (mic) {
      mic.classList.toggle('voi-mic--active', on)
      mic.setAttribute('aria-pressed', on ? 'true' : 'false')
      mic.setAttribute('aria-label', on ? '停止语音输入' : '开始语音输入')
    }
    if (waveform) {
      waveform.classList.toggle('voi-waveform--active', on)
    }
    if (status) {
      status.textContent = on ? '正在聆听…' : '点击麦克风开始演示'
    }
    if (input && on) {
      input.placeholder = '聆听中…'
    } else if (input) {
      input.placeholder = '说点什么，或切换到文字输入…'
    }
  }

  const animateWaveform = () => {
    if (!listening || !waveBars.length) return
    waveBars.forEach((bar, i) => {
      const h = 0.15 + Math.random() * 0.85
      bar.style.transform = `scaleY(${h})`
      bar.style.opacity = String(0.4 + h * 0.6)
      bar.style.animationDelay = `${i * 0.04}s`
    })
    waveFrame = requestAnimationFrame(animateWaveform)
  }

  const startWaveform = () => {
    if (!waveform || prefersReducedMotion) return
    waveBars = Array.from(waveform.querySelectorAll('.voi-waveform__bar'))
    cancelAnimationFrame(waveFrame)
    animateWaveform()
  }

  const stopWaveform = () => {
    cancelAnimationFrame(waveFrame)
    waveFrame = null
    waveBars.forEach((bar) => {
      bar.style.transform = 'scaleY(0.2)'
      bar.style.opacity = '0.35'
    })
  }

  const typeDemo = () => {
    if (!transcript || !userBubble) return
    clearTimeout(typeTimer)
    typeIndex = 0
    transcript.textContent = ''
    userBubble.classList.remove('voi-chat__bubble--hidden')

    const tick = () => {
      if (typeIndex < DEMO_TEXT.length) {
        transcript.textContent += DEMO_TEXT.charAt(typeIndex)
        typeIndex += 1
        if (input) input.value = transcript.textContent
        typeTimer = setTimeout(tick, prefersReducedMotion ? 0 : 55)
      } else {
        setListening(false)
        stopWaveform()
        if (status) status.textContent = '转写完成 · 可继续编辑'
      }
    }
    tick()
  }

  const toggleMic = () => {
    if (listening) {
      setListening(false)
      stopWaveform()
      if (status) status.textContent = '已停止聆听'
      clearTimeout(typeTimer)
      return
    }
    setListening(true)
    startWaveform()
    typeDemo()
  }

  if (mic) {
    mic.addEventListener('click', toggleMic)
  }

  modeButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const mode = btn.getAttribute('data-voi-mode')
      modeButtons.forEach((b) => {
        const active = b === btn
        b.classList.toggle('voi-input-bar__mode--active', active)
        b.setAttribute('aria-selected', active ? 'true' : 'false')
      })
      if (!input) return
      if (mode === 'text') {
        input.removeAttribute('readonly')
        input.placeholder = '输入文字，回车发送…'
        if (status) status.textContent = '文字模式 · 可直接键入'
        setListening(false)
        stopWaveform()
        clearTimeout(typeTimer)
        input.focus()
      } else {
        input.setAttribute('readonly', '')
        input.placeholder = '说点什么，或点击麦克风…'
        input.value = ''
        if (transcript) transcript.textContent = ''
        if (userBubble) userBubble.classList.add('voi-chat__bubble--hidden')
        if (status) status.textContent = '语音模式 · 点击麦克风开始'
      }
    })
  })

  if (input) {
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !input.hasAttribute('readonly') && input.value.trim()) {
        if (userBubble && transcript) {
          transcript.textContent = input.value.trim()
          userBubble.classList.remove('voi-chat__bubble--hidden')
        }
        if (status) status.textContent = '已发送文字消息'
      }
    })
  }

  /* 页头脉冲与 CTA 波形在 CSS 中处理；此处仅初始化静态波形高度 */
  if (waveform && !prefersReducedMotion) {
    waveBars = Array.from(waveform.querySelectorAll('.voi-waveform__bar'))
    waveBars.forEach((bar, i) => {
      bar.style.transform = `scaleY(${0.2 + (i % 3) * 0.08})`
    })
  }
})()
