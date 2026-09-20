/**
 * GARG HANDLOOM HOME DECOR — FRESH LIGHT LUXURY EXPERIENCE
 */

document.addEventListener('DOMContentLoaded', () => {
  initLightAmbientCanvas();
  initFreshFabricStudio();
  initMobileNavigation();
});

/* ==========================================================================
   0. MOBILE DRAWER NAVIGATION & HAMBURGER
   ========================================================================== */
function initMobileNavigation() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const drawer = document.getElementById('mobileNavDrawer');
  const closeBtn = document.getElementById('drawerCloseBtn');
  const backdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!toggleBtn || !drawer) return;

  function openDrawer() {
    drawer.style.display = 'block';
    drawer.inert = false;
    drawer.removeAttribute('aria-hidden');
    void drawer.offsetWidth; // Force synchronous reflow so CSS transition triggers
    toggleBtn.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    drawer.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    // Release focus from inside drawer before applying aria-hidden to prevent browser warning
    if (document.activeElement && drawer.contains(document.activeElement)) {
      document.activeElement.blur();
      toggleBtn.focus();
    }
    toggleBtn.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    drawer.inert = true;
    drawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (!drawer.classList.contains('is-open')) {
        drawer.style.display = 'none';
      }
    }, 380);
  }

  toggleBtn.addEventListener('click', () => {
    if (drawer.classList.contains('is-open')) {
      closeDrawer();
    } else {
      openDrawer();
    }
  });

  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (backdrop) backdrop.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeDrawer();
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });
}

/* ==========================================================================
   1. SOFT SUNLIGHT AMBIENT CANVAS (LIGHT MESH)
   ========================================================================== */
function initLightAmbientCanvas() {
  const canvas = document.getElementById('ambient-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let mouseX = window.innerWidth * 0.7;
  let mouseY = window.innerHeight * 0.3;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    }
  }, { passive: true });

  let angle = 0;
  function render() {
    ctx.clearRect(0, 0, width, height);
    angle += 0.005;

    // Warm Sunbeam Golden Orb
    const orb1X = mouseX + Math.cos(angle) * 100;
    const orb1Y = mouseY + Math.sin(angle) * 60;
    const grad1 = ctx.createRadialGradient(orb1X, orb1Y, 20, orb1X, orb1Y, 500);
    grad1.addColorStop(0, 'rgba(235, 205, 130, 0.16)');
    grad1.addColorStop(0.6, 'rgba(235, 205, 130, 0.05)');
    grad1.addColorStop(1, 'rgba(235, 205, 130, 0)');
    ctx.fillStyle = grad1;
    ctx.fillRect(0, 0, width, height);

    // Fresh Soft Sage Pastel Orb
    const orb2X = width * 0.25 + Math.sin(angle * 0.7) * 120;
    const orb2Y = height * 0.75 + Math.cos(angle * 0.7) * 90;
    const grad2 = ctx.createRadialGradient(orb2X, orb2Y, 20, orb2X, orb2Y, 600);
    grad2.addColorStop(0, 'rgba(163, 194, 169, 0.12)');
    grad2.addColorStop(0.6, 'rgba(163, 194, 169, 0.04)');
    grad2.addColorStop(1, 'rgba(163, 194, 169, 0)');
    ctx.fillStyle = grad2;
    ctx.fillRect(0, 0, width, height);

    requestAnimationFrame(render);
  }
  render();
}

/* ==========================================================================
   2. FRESH FABRIC & MOOD STUDIO
   ========================================================================== */
const FRESH_FABRICS = [
  {
    id: 'morning-sheer',
    name: 'Morning Sunlight Sheer',
    colorHex: '#faf7f0',
    borderHex: '#dfd7c5',
    feel: 'Airy, translucent Belgian sheer voile',
    effect: 'Soft diffused glow, prevents harsh afternoon glare',
    bestFor: 'Living rooms, balconies & sunrooms',
    leftGrad: 'repeating-linear-gradient(90deg, rgba(255, 253, 248, 0.88) 0%, rgba(240, 233, 220, 0.95) 15%, rgba(220, 210, 190, 0.98) 30%, rgba(255, 253, 248, 0.8) 45%)',
    rightGrad: 'repeating-linear-gradient(90deg, rgba(255, 253, 248, 0.8) 0%, rgba(220, 210, 190, 0.98) 15%, rgba(240, 233, 220, 0.95) 30%, rgba(255, 253, 248, 0.88) 45%)',
    bgFilter: 'brightness(1.05) contrast(1.02)'
  },
  {
    id: 'champagne-silk',
    name: 'Warm Champagne Satin',
    colorHex: '#f5e6c8',
    borderHex: '#d8be8d',
    feel: 'Smooth, lustrous Mulberry silk-blend weave',
    effect: 'Warm golden shimmer, adds comforting radiance',
    bestFor: 'Master suites & guest bedrooms',
    leftGrad: 'repeating-linear-gradient(90deg, rgba(245, 230, 200, 0.92) 0%, rgba(225, 200, 155, 0.96) 15%, rgba(195, 165, 115, 0.98) 30%, rgba(245, 230, 200, 0.85) 45%)',
    rightGrad: 'repeating-linear-gradient(90deg, rgba(245, 230, 200, 0.85) 0%, rgba(195, 165, 115, 0.98) 15%, rgba(225, 200, 155, 0.96) 30%, rgba(245, 230, 200, 0.92) 45%)',
    bgFilter: 'brightness(1.02) sepia(0.12)'
  },
  {
    id: 'soft-sage',
    name: 'Botanical Soft Sage',
    colorHex: '#9cb5a4',
    borderHex: '#73917d',
    feel: 'Lush matte cotton velvet with gentle nap',
    effect: 'Botanical serenity, cools down sunny spaces',
    bestFor: 'Reading corners, studies & lounges',
    leftGrad: 'repeating-linear-gradient(90deg, rgba(165, 190, 172, 0.92) 0%, rgba(135, 165, 145, 0.96) 15%, rgba(105, 138, 118, 0.98) 30%, rgba(165, 190, 172, 0.85) 45%)',
    rightGrad: 'repeating-linear-gradient(90deg, rgba(165, 190, 172, 0.85) 0%, rgba(105, 138, 118, 0.98) 15%, rgba(135, 165, 145, 0.96) 30%, rgba(165, 190, 172, 0.92) 45%)',
    bgFilter: 'brightness(1.02) hue-rotate(15deg)'
  },
  {
    id: 'oatmeal-linen',
    name: 'Organic Oatmeal Linen',
    colorHex: '#dbcdb7',
    borderHex: '#b5a388',
    feel: 'Crisp rustic texture with natural flax slubs',
    effect: 'Zen Scandi/Japandi organic earthiness',
    bestFor: 'Modern apartments & dining rooms',
    leftGrad: 'repeating-linear-gradient(90deg, rgba(225, 212, 192, 0.92) 0%, rgba(200, 182, 158, 0.96) 15%, rgba(170, 148, 120, 0.98) 30%, rgba(225, 212, 192, 0.85) 45%)',
    rightGrad: 'repeating-linear-gradient(90deg, rgba(225, 212, 192, 0.85) 0%, rgba(170, 148, 120, 0.98) 15%, rgba(200, 182, 158, 0.96) 30%, rgba(225, 212, 192, 0.92) 45%)',
    bgFilter: 'brightness(1.0) contrast(1.04)'
  },
  {
    id: 'alabaster-blackout',
    name: 'Alabaster Serene Blackout',
    colorHex: '#e8ecef',
    borderHex: '#c2cbd1',
    feel: 'High-density triple-weave thermal drape',
    effect: '100% total room blackout for restorative sleep',
    bestFor: 'Bedrooms, nurseries & media rooms',
    leftGrad: 'repeating-linear-gradient(90deg, rgba(235, 240, 244, 0.94) 0%, rgba(210, 218, 224, 0.97) 15%, rgba(185, 195, 202, 0.99) 30%, rgba(235, 240, 244, 0.9) 45%)',
    rightGrad: 'repeating-linear-gradient(90deg, rgba(235, 240, 244, 0.9) 0%, rgba(185, 195, 202, 0.99) 15%, rgba(210, 218, 224, 0.97) 30%, rgba(235, 240, 244, 0.94) 45%)',
    bgFilter: 'brightness(0.92) contrast(1.05)'
  }
];

function initFreshFabricStudio() {
  const container = document.getElementById('freshSwatches');
  const drapeLeft = document.getElementById('drapeLeft');
  const drapeRight = document.getElementById('drapeRight');
  const stageRoomBg = document.getElementById('stageRoomBg');
  const activeDot = document.getElementById('activeSwatchColor');
  const activeTitle = document.getElementById('activeSwatchTitle');
  const feelText = document.getElementById('fabricFeel');
  const effectText = document.getElementById('fabricEffect');
  const bestForText = document.getElementById('fabricBestFor');

  if (!container) return;

  container.innerHTML = '';
  FRESH_FABRICS.forEach((fabric, idx) => {
    const btn = document.createElement('button');
    btn.className = `swatch-btn ${idx === 0 ? 'active' : ''}`;
    btn.innerHTML = `
      <div class="swatch-dot" style="background-color: ${fabric.colorHex}; border-color: ${fabric.borderHex};"></div>
      <span class="swatch-label">${fabric.name.split(' ')[0]}</span>
    `;

    btn.addEventListener('click', () => {
      document.querySelectorAll('.swatch-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFreshFabric(fabric);
    });

    container.appendChild(btn);
  });

  function applyFreshFabric(fabric) {
    drapeLeft.style.background = fabric.leftGrad;
    drapeRight.style.background = fabric.rightGrad;
    stageRoomBg.style.filter = fabric.bgFilter;
    activeDot.style.backgroundColor = fabric.colorHex;
    activeDot.style.borderColor = fabric.borderHex;
    activeTitle.textContent = fabric.name;
    feelText.textContent = fabric.feel;
    effectText.textContent = fabric.effect;
    bestForText.textContent = fabric.bestFor;
  }

  // Initial
  applyFreshFabric(FRESH_FABRICS[0]);
}
