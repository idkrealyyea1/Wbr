/* =============================================
   وبر — MAIN JAVASCRIPT
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {

  /* ─── PRELOADER ─── */
  (function initPreloader() {
    const preloader = document.getElementById('preloader');
    const fill      = document.getElementById('preloaderFill');
    const percent   = document.getElementById('preloaderPercent');
    if (!preloader) return;

    let count = 0;
    const interval = setInterval(() => {
      count += Math.floor(Math.random() * 4) + 1;
      if (count >= 100) count = 100;
      fill.style.width = count + '%';
      percent.textContent = count + '%';

      if (count >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          preloader.classList.add('fade-out');
          // Trigger hero animations
          setTimeout(() => {
            preloader.style.display = 'none';
            const hero = document.querySelector('.hero');
            if (hero) hero.classList.add('hero-ready');
          }, 800);
        }, 400);
      }
    }, 28);
  })();

  /* ─── RENDER ALL SECTIONS ─── */
  if (window.WUBUR) {
    WUBUR.renderCollections();
    WUBUR.renderProducts('all');
    WUBUR.renderLookbook();
    WUBUR.renderTestimonials();
    WUBUR.renderInstagram();
    if (window._reobserveReveal) window._reobserveReveal();
  }

  /* ─── CUSTOM CURSOR ─── */
  (function initCursor() {
    const dot    = document.getElementById('cursorDot');
    const circle = document.getElementById('cursorCircle');
    if (!dot || !circle) return;

    let mx = 0, my = 0;
    let cx = 0, cy = 0;

    window.addEventListener('mousemove', e => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
    }, { passive: true });

    // Smooth circle follow
    function animateCircle() {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      circle.style.left = cx + 'px';
      circle.style.top  = cy + 'px';
      requestAnimationFrame(animateCircle);
    }
    animateCircle();

    // Hover state for interactive elements
    const interactives = 'a, button, .filter-btn, .product-card, .collection-card, .why-card, .lookbook-item, .ig-item, .nav-icon-btn, .slider-btn, input, textarea';
    document.addEventListener('mouseover', e => {
      if (e.target.closest(interactives)) {
        circle.classList.add('hover');
      }
    });
    document.addEventListener('mouseout', e => {
      if (e.target.closest(interactives)) {
        circle.classList.remove('hover');
      }
    });

    // Click animation
    document.addEventListener('mousedown', () => dot.classList.add('click'));
    document.addEventListener('mouseup',   () => dot.classList.remove('click'));

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      circle.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      circle.style.opacity = '1';
    });
  })();

  /* ─── NAVBAR ─── */
  (function initNavbar() {
    const navbar    = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const navLinks  = document.getElementById('navLinks');
    if (!navbar) return;

    // Scroll solid
    window.addEventListener('scroll', () => {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
      // Scroll-to-top button
    }, { passive: true });

    // Mobile menu
    if (hamburger && navLinks) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('open');
        navLinks.classList.toggle('open');
        document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
      });

      // Close on link click
      navLinks.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('open');
          navLinks.classList.remove('open');
          document.body.style.overflow = '';
        });
      });

      // Close on outside click
      document.addEventListener('click', e => {
        if (!navbar.contains(e.target)) {
          hamburger.classList.remove('open');
          navLinks.classList.remove('open');
          document.body.style.overflow = '';
        }
      });
    }

    // Active link on scroll
    const sections = document.querySelectorAll('section[id], footer[id]');
    const links    = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
          current = section.id;
        }
      });
      links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    }, { passive: true });
  })();

  /* ─── SEARCH TOGGLE ─── */
  (function initSearch() {
    const toggle  = document.getElementById('searchToggle');
    const bar     = document.getElementById('searchBar');
    const close   = document.getElementById('searchClose');
    const input   = bar ? bar.querySelector('.search-input') : null;
    if (!toggle || !bar) return;

    toggle.addEventListener('click', () => {
      bar.classList.add('open');
      if (input) input.focus();
    });
    close.addEventListener('click', () => bar.classList.remove('open'));

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') bar.classList.remove('open');
    });
  })();

  /* ─── NEWSLETTER FORM ─── */
  (function initNewsletter() {
    const form    = document.getElementById('nlForm');
    const success = document.getElementById('nlSuccess');
    const inputWrap = form ? form.querySelector('.nl-input-wrap') : null;
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      if (inputWrap) inputWrap.style.display = 'none';
      if (success)  success.classList.add('show');
    });
  })();

  /* ─── CONTACT FORM ─── */
  (function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const btn = form.querySelector('.btn-primary');
      if (!btn) return;
      btn.textContent = '✓ Message Sent!';
      btn.style.background = '#16a34a';
      form.classList.add('sent');
      setTimeout(() => {
        btn.textContent = 'Send Message';
        btn.style.background = '';
        form.classList.remove('sent');
        form.reset();
      }, 3000);
    });
  })();

  /* ─── SMOOTH ANCHOR SCROLLING ─── */
  (function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (!target) return;
        e.preventDefault();
        const offset = 70;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      });
    });
  })();

  /* ─── BACKGROUND PARTICLE CANVAS ─── */
  (function initBgParticles() {
    // Lightweight floating dot layer on non-hero sections
    const sections = document.querySelectorAll('.newsletter-section');
    sections.forEach(section => {
      const bg = section.querySelector('.newsletter-bg');
      if (!bg) return;
      // Particles already injected via HTML; animation via CSS @keyframes float
    });
  })();

  /* ─── LAZY LOADING IMAGES ─── */
  (function initLazyLoad() {
    if ('IntersectionObserver' in window) {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            obs.unobserve(img);
          }
        });
      }, { rootMargin: '200px' });

      document.querySelectorAll('img[data-src]').forEach(img => obs.observe(img));
    }
  })();

  /* ─── SHOPPING BAG ─── */
  (function initBag() {
    const bagCount = document.querySelector('.bag-count');
    let count = 0;

    document.addEventListener('click', e => {
      const qvBtn = e.target.closest('.product-quick-view, .card-view-btn');
      if (!qvBtn) return;
      count++;
      if (bagCount) {
        bagCount.textContent = count;
        bagCount.style.transform = 'scale(1.4)';
        setTimeout(() => { bagCount.style.transform = ''; }, 300);
      }
    });
  })();

  /* ─── VIDEO SECTION — ensure autoplay ─── */
  (function initVideo() {
    const video = document.getElementById('bgVideo');
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay blocked — poster image shown as fallback
    });
  })();

  /* ─── SECTION BACKGROUND GRADIENT SHIFT ON SCROLL ─── */
  (function initGradientShift() {
    const body = document.body;
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollFraction = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
          // Very subtle hue shift — kept minimal for luxury feel
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  })();

  /* ─── KEYBOARD NAVIGATION ─── */
  (function initKeyboardNav() {
    document.addEventListener('keydown', e => {
      // Arrow keys for testimonial slider
      if (e.key === 'ArrowLeft') {
        document.getElementById('testimonialPrev')?.click();
      }
      if (e.key === 'ArrowRight') {
        document.getElementById('testimonialNext')?.click();
      }
    });
  })();

  /* ─── FORCE RE-OBSERVE after renders ─── */
  setTimeout(() => {
    if (window._reobserveReveal) window._reobserveReveal();
    // Also observe product/collection cards manually
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('revealed');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    document.querySelectorAll('.product-card, .collection-card, .lookbook-item, .ig-item').forEach(el => {
      obs.observe(el);
    });
  }, 300);

});

/* ─── GLOBAL ERROR HANDLER ─── */
window.addEventListener('error', e => {
  if (e.message && e.message.includes('THREE')) {
    // Three.js not loaded, gracefully skip
    console.info('وبر: 3D features require CDN connection.');
  }
}, { once: true });
