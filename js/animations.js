/* =============================================
   وبر — ANIMATIONS & THREE.JS
   ============================================= */

/* ─── SCROLL REVEAL ─── */
(function initScrollReveal() {
  const revealClasses = [
    '.reveal-up', '.reveal-left', '.reveal-right',
    '.why-card', '.lookbook-item', '.ig-item'
  ];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -50px 0px' });

  function observeAll() {
    revealClasses.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (!el.classList.contains('revealed')) observer.observe(el);
      });
    });
  }

  // Call once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll);
  } else {
    observeAll();
  }

  // Re-observe when products/collections are rendered
  window._reobserveReveal = observeAll;
})();

/* ─── COUNTERS ─── */
(function initCounters() {
  const counters = document.querySelectorAll('.stat-number[data-target]');
  if (!counters.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = +el.dataset.target;
      const duration = 1800;
      const step = target / (duration / 16);
      let current = 0;

      const tick = () => {
        current = Math.min(current + step, target);
        el.textContent = Math.floor(current).toLocaleString();
        if (current < target) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString();
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
})();

/* ─── SCROLL PROGRESS BAR ─── */
(function initProgressBar() {
  const bar = document.getElementById('scrollProgress');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docH > 0 ? (window.scrollY / docH) * 100 : 0;
    bar.style.width = pct + '%';
  }, { passive: true });
})();

/* ─── SCROLL TO TOP ─── */
(function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    btn.classList.toggle('visible', window.scrollY > 500);
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* ─── TESTIMONIALS SLIDER ─── */
(function initTestimonialsSlider() {
  const track   = document.getElementById('testimonialsTrack');
  const prev    = document.getElementById('testimonialPrev');
  const next    = document.getElementById('testimonialNext');
  const dotsWrap = document.getElementById('sliderDots');
  if (!track || !prev || !next) return;

  let current = 0;
  let timer;

  function getCount() {
    return track.children.length;
  }

  function goTo(index) {
    const count = getCount();
    current = (index + count) % count;
    track.style.transform = `translateX(-${current * 100}%)`;
    document.querySelectorAll('.slider-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === current);
    });
    resetTimer();
  }

  function resetTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  prev.addEventListener('click', () => goTo(current - 1));
  next.addEventListener('click', () => goTo(current + 1));

  dotsWrap.addEventListener('click', e => {
    const dot = e.target.closest('.slider-dot');
    if (dot) goTo(+dot.dataset.index);
  });

  // Start auto-slide after render
  setTimeout(() => { resetTimer(); }, 500);

  // Pause on hover
  const slider = document.getElementById('testimonialsSlider');
  if (slider) {
    slider.addEventListener('mouseenter', () => clearInterval(timer));
    slider.addEventListener('mouseleave', () => resetTimer());
  }

  // Touch support
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(diff > 0 ? current + 1 : current - 1);
  }, { passive: true });
})();

/* ─── FILTER TABS ─── */
(function initFilterTabs() {
  const tabs = document.querySelectorAll('.filter-btn');
  tabs.forEach(btn => {
    btn.addEventListener('click', () => {
      tabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      WUBUR.renderProducts(filter);
      if (window._reobserveReveal) window._reobserveReveal();
    });
  });
})();

/* ─── CARD TILT (3D HOVER) ─── */
(function initCardTilt() {
  function applyTilt(card, e) {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -6;
    const rotY = ((x - cx) / cx) * 6;
    card.style.transform = `translateY(-6px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(1.02)`;
  }

  function resetTilt(card) {
    card.style.transform = '';
    card.style.transition = 'transform 0.5s ease';
    setTimeout(() => { card.style.transition = ''; }, 500);
  }

  function addTiltListeners(selector) {
    document.querySelectorAll(selector).forEach(card => {
      card.addEventListener('mousemove', e => applyTilt(card, e));
      card.addEventListener('mouseleave', () => resetTilt(card));
    });
  }

  // Wait for products to render
  setTimeout(() => {
    addTiltListeners('.why-card');
    addTiltListeners('.product-card');
  }, 1500);
})();

/* ─── THREE.JS HERO CANVAS ─── */
(function initHeroCanvas() {
  if (typeof THREE === 'undefined') return;

  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;

  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Particle geometry
  const count = 120;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(count * 3);
  const scales = new Float32Array(count);

  for (let i = 0; i < count; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 14;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    scales[i] = Math.random();
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('aScale', new THREE.BufferAttribute(scales, 1));

  const material = new THREE.PointsMaterial({
    color: 0xC60021,
    size: 0.04,
    transparent: true,
    opacity: 0.5,
    sizeAttenuation: true
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Small floating geometric shapes
  const shapes = [];
  const geos = [
    new THREE.TetrahedronGeometry(0.08, 0),
    new THREE.OctahedronGeometry(0.08, 0),
    new THREE.BoxGeometry(0.1, 0.1, 0.1)
  ];
  const shapeMat = new THREE.MeshBasicMaterial({
    color: 0xC60021,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });

  for (let i = 0; i < 12; i++) {
    const mesh = new THREE.Mesh(geos[i % geos.length], shapeMat);
    mesh.position.set(
      (Math.random() - 0.5) * 18,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 4
    );
    mesh.userData.speed = {
      x: (Math.random() - 0.5) * 0.003,
      y: (Math.random() - 0.5) * 0.003,
      rot: (Math.random() - 0.5) * 0.01
    };
    scene.add(mesh);
    shapes.push(mesh);
  }

  // Mouse interaction
  let mouse = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };

  window.addEventListener('mousemove', e => {
    mouse.x = (e.clientX / window.innerWidth - 0.5) * 2;
    mouse.y = -(e.clientY / window.innerHeight - 0.5) * 2;
  }, { passive: true });

  // Animation loop
  let frameId;
  let t = 0;
  const clock = new THREE.Clock();

  function animate() {
    frameId = requestAnimationFrame(animate);
    const delta = clock.getDelta();
    t += delta;

    // Smooth camera follow
    target.x += (mouse.x * 0.4 - target.x) * 0.04;
    target.y += (mouse.y * 0.3 - target.y) * 0.04;
    camera.position.x = target.x;
    camera.position.y = target.y;

    // Rotate particles
    particles.rotation.y = t * 0.03;
    particles.rotation.x = t * 0.01;

    // Animate shapes
    shapes.forEach(s => {
      s.position.y += Math.sin(t * 0.5 + s.position.x) * 0.002;
      s.rotation.x += s.userData.speed.rot;
      s.rotation.y += s.userData.speed.rot * 0.7;
    });

    renderer.render(scene, camera);
  }

  animate();

  // Resize handler
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Pause when hero is not visible
  const heroObs = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) { if (!frameId) animate(); }
    else { cancelAnimationFrame(frameId); frameId = null; }
  }, { threshold: 0 });
  const hero = document.getElementById('hero');
  if (hero) heroObs.observe(hero);
})();

/* ─── PARALLAX ON SCROLL ─── */
(function initParallax() {
  const heroBg = document.querySelector('.hero-bg');
  if (!heroBg) return;

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y < window.innerHeight) {
      heroBg.style.transform = `translateY(${y * 0.25}px)`;
    }
  }, { passive: true });
})();

/* ─── LOOKBOOK LIGHTBOX ─── */
(function initLookbookLightbox() {
  document.addEventListener('click', e => {
    const item = e.target.closest('.lookbook-item');
    if (!item) return;
    const img = item.querySelector('img');
    if (img) WUBUR.quickView(img.src, img.alt || 'Lookbook');
  });

  // Close lightbox
  const backdrop = document.getElementById('lightboxBackdrop');
  const closeBtn = document.getElementById('lightboxClose');
  if (backdrop) backdrop.addEventListener('click', WUBUR.closeQuickView);
  if (closeBtn) closeBtn.addEventListener('click', WUBUR.closeQuickView);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') WUBUR.closeQuickView();
  });
})();
