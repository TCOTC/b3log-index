/**
 * UI-45 3D 产品预览 — 拖拽旋转展台
 */
(function () {
  const stage = document.querySelector('.p3d-stage');
  const turntable = document.querySelector('.p3d-turntable');
  if (!stage || !turntable) return;

  let isDragging = false;
  let startX = 0;
  let currentY = 0;
  let autoSpin = true;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!prefersReduced) {
    turntable.classList.add('is-auto');
  }

  function setRotation(yDeg) {
    currentY = yDeg;
    turntable.style.transform = `translate(-50%, -55%) rotateX(-8deg) rotateY(${currentY}deg)`;
  }

  function pauseAuto() {
    if (!autoSpin) return;
    autoSpin = false;
    turntable.classList.remove('is-auto');
    const computed = getComputedStyle(turntable).transform;
    if (computed && computed !== 'none') {
      const values = computed.match(/matrix3d\(([^)]+)\)/);
      if (values) {
        const parts = values[1].split(',').map(Number);
        const angle = Math.round(Math.atan2(parts[8], parts[0]) * (180 / Math.PI));
        currentY = angle;
      }
    }
    turntable.style.transform = `translate(-50%, -55%) rotateX(-8deg) rotateY(${currentY}deg)`;
  }

  function onPointerDown(e) {
    pauseAuto();
    isDragging = true;
    startX = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    stage.classList.add('is-dragging');
    stage.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const x = e.clientX ?? e.touches?.[0]?.clientX ?? 0;
    const delta = x - startX;
    startX = x;
    currentY += delta * 0.5;
    setRotation(currentY);
  }

  function onPointerUp() {
    isDragging = false;
    stage.classList.remove('is-dragging');
  }

  stage.addEventListener('pointerdown', onPointerDown);
  stage.addEventListener('pointermove', onPointerMove);
  stage.addEventListener('pointerup', onPointerUp);
  stage.addEventListener('pointercancel', onPointerUp);

  /* 色板切换 — 改变屏幕主题色 */
  const swatches = document.querySelectorAll('.p3d-swatch');
  const screen = document.querySelector('.p3d-product__screen');

  swatches.forEach((swatch) => {
    swatch.addEventListener('click', () => {
      swatches.forEach((s) => s.classList.remove('p3d-swatch--active'));
      swatch.classList.add('p3d-swatch--active');
      const theme = swatch.dataset.theme;
      if (!screen) return;
      if (theme === 'dark') {
        screen.style.background = 'linear-gradient(145deg, #2a2826 0%, #1a1918 100%)';
      } else if (theme === 'warm') {
        screen.style.background = 'linear-gradient(145deg, #4a4035 0%, #2e2820 100%)';
      } else {
        screen.style.background = 'linear-gradient(145deg, #e8e6e2 0%, #d4d0ca 100%)';
      }
    });
  });
})();
