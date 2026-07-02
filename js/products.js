/* =============================================
   وبر — PRODUCTS & DATA
   ============================================= */

const WUBUR = window.WUBUR = {};

/* ─── COLLECTION DATA ─── */
WUBUR.collections = [
  {
    id: 1,
    name: "Phantom Coat",
    category: "Outerwear",
    price: "$649",
    tag: "SS 2025",
    img: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=800&q=80",
    badge: "New Drop"
  },
  {
    id: 2,
    name: "Shadow Hoodie",
    category: "Tops",
    price: "$249",
    tag: "Signature",
    img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=700&q=80",
    badge: null
  },
  {
    id: 3,
    name: "Noir Cargo",
    category: "Bottoms",
    price: "$329",
    tag: "Limited",
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=700&q=80",
    badge: "Limited"
  },
  {
    id: 4,
    name: "Velvet Tee",
    category: "Tops",
    price: "$119",
    tag: "Core",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=700&q=80",
    badge: null
  }
];

/* ─── FEATURED PRODUCTS ─── */
WUBUR.products = [
  {
    id: 1,
    name: "Oversized Phantom Hoodie",
    category: "tops",
    categoryLabel: "Tops",
    price: "$249",
    oldPrice: "$310",
    rating: 4.9,
    reviews: 124,
    badge: "New",
    colors: ["#111111", "#C60021", "#F5F5F5"],
    img: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=600&q=80"
  },
  {
    id: 2,
    name: "Luxury Essentials Tee",
    category: "tops",
    categoryLabel: "Tops",
    price: "$119",
    oldPrice: null,
    rating: 4.8,
    reviews: 89,
    badge: null,
    colors: ["#FFFFFF", "#111111", "#8B7355"],
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&q=80"
  },
  {
    id: 3,
    name: "Noir Utility Cargo",
    category: "bottoms",
    categoryLabel: "Bottoms",
    price: "$329",
    oldPrice: "$399",
    rating: 4.7,
    reviews: 67,
    badge: "Limited",
    colors: ["#1C1C1C", "#8B7355"],
    img: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=600&q=80"
  },
  {
    id: 4,
    name: "Phantom Overcoat",
    category: "outerwear",
    categoryLabel: "Outerwear",
    price: "$649",
    oldPrice: "$750",
    rating: 5.0,
    reviews: 43,
    badge: "New",
    colors: ["#111111", "#1C1C1C"],
    img: "https://images.unsplash.com/photo-1549062572-544a64fb0c56?w=600&q=80"
  },
  {
    id: 5,
    name: "Heritage Raw Denim",
    category: "bottoms",
    categoryLabel: "Bottoms",
    price: "$289",
    oldPrice: null,
    rating: 4.6,
    reviews: 55,
    badge: null,
    colors: ["#4A6FA5", "#111111", "#8B7355"],
    img: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=600&q=80"
  },
  {
    id: 6,
    name: "Street Runner Sneaker",
    category: "footwear",
    categoryLabel: "Footwear",
    price: "$449",
    oldPrice: "$520",
    rating: 4.9,
    reviews: 98,
    badge: "Hot",
    colors: ["#FFFFFF", "#111111", "#C60021"],
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
  },
  {
    id: 7,
    name: "Classic Logo Cap",
    category: "accessories",
    categoryLabel: "Accessories",
    price: "$89",
    oldPrice: null,
    rating: 4.8,
    reviews: 212,
    badge: null,
    colors: ["#111111", "#C60021", "#F5F5F5"],
    img: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=600&q=80"
  },
  {
    id: 8,
    name: "Crossbody Mini Bag",
    category: "accessories",
    categoryLabel: "Accessories",
    price: "$199",
    oldPrice: "$240",
    rating: 4.7,
    reviews: 38,
    badge: "Limited",
    colors: ["#111111", "#8B7355"],
    img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&q=80"
  }
];

/* ─── LOOKBOOK IMAGES ─── */
WUBUR.lookbook = [
  { img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80", label: "View Collection" },
  { img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80", label: "SS 2025" },
  { img: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&q=80", label: "Essentials" },
  { img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80", label: "Street Style" },
  { img: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&q=80", label: "Night Edition" },
  { img: "https://images.unsplash.com/photo-1554412933-514a83d2f3cd?w=400&q=80", label: "Phantom Series" },
  { img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80", label: "Lookbook 01" },
  { img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", label: "Statement Pieces" }
];

/* ─── TESTIMONIALS ─── */
WUBUR.testimonials = [
  {
    name: "Khalid Al Farsi",
    location: "Dubai, UAE",
    text: "وبر doesn't just make clothes — it makes you feel seen. Every piece I own from them is a conversation starter.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80"
  },
  {
    name: "Sara Mohammed",
    location: "Riyadh, KSA",
    text: "The quality is unreal. I've bought luxury brands from around the world and وبر genuinely belongs at the top.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80"
  },
  {
    name: "Tariq Nasser",
    location: "London, UK",
    text: "Every stitch is intentional. This is what streetwear is supposed to feel like — confident, clean, timeless.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80"
  },
  {
    name: "Nour Khalil",
    location: "Cairo, Egypt",
    text: "وبر is the brand I've been waiting for. Premium Arab streetwear that speaks to our generation.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80"
  }
];

/* ─── INSTAGRAM IMAGES ─── */
WUBUR.instagram = [
  "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80",
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&q=80",
  "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80",
  "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&q=80",
  "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&q=80",
  "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80"
];

/* ─── RENDER FUNCTIONS ─── */
WUBUR.renderStars = function(rating) {
  const full = Math.floor(rating);
  let html = '<div class="stars">';
  for (let i = 0; i < full; i++) {
    html += `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;
  }
  html += '</div>';
  return html;
};

WUBUR.renderCollections = function() {
  const grid = document.getElementById('collectionGrid');
  if (!grid) return;
  grid.innerHTML = WUBUR.collections.map(item => `
    <div class="collection-card reveal-up">
      <img src="${item.img}" alt="${item.name}" class="collection-card-img" loading="lazy" />
      <div class="collection-card-overlay">
        ${item.badge ? `<span class="product-badge" style="position:static;display:inline-block;margin-bottom:8px;width:fit-content;">${item.badge}</span>` : ''}
        <div class="collection-card-tag">${item.tag}</div>
        <div class="collection-card-name">${item.name}</div>
        <div class="collection-card-price">${item.price}</div>
        <div class="collection-card-actions">
          <button class="card-fav-btn" onclick="WUBUR.addWishlist('${item.name}')">♡ Save</button>
          <button class="card-view-btn" onclick="WUBUR.quickView('${item.img}', '${item.name}')">Quick View</button>
        </div>
      </div>
    </div>
  `).join('');
};

WUBUR.renderProducts = function(filter = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  const items = filter === 'all' ? WUBUR.products : WUBUR.products.filter(p => p.category === filter);
  grid.innerHTML = items.map((p, i) => `
    <div class="product-card" style="transition-delay:${i * 0.07}s">
      <div class="product-img-wrap">
        <img src="${p.img}" alt="${p.name}" class="product-img" loading="lazy" />
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <button class="product-fav" onclick="WUBUR.addWishlist('${p.name}')">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
        <button class="product-quick-view" onclick="WUBUR.quickView('${p.img}', '${p.name}')">Quick View</button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.categoryLabel}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          ${WUBUR.renderStars(p.rating)}
          <span class="rating-count">(${p.reviews})</span>
        </div>
        <div class="product-footer">
          <div class="product-price">
            ${p.price}
            ${p.oldPrice ? `<span class="old">${p.oldPrice}</span>` : ''}
          </div>
          <div class="product-colors">
            ${p.colors.map(c => `<div class="color-dot" style="background:${c}" title="${c}"></div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');
  WUBUR.initReveal();
};

WUBUR.renderLookbook = function() {
  const grid = document.getElementById('lookbookGrid');
  if (!grid) return;
  grid.innerHTML = WUBUR.lookbook.map(item => `
    <div class="lookbook-item">
      <img src="${item.img}" alt="${item.label}" loading="lazy" />
      <div class="lookbook-overlay">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>
        </svg>
        <span>${item.label}</span>
      </div>
    </div>
  `).join('');
};

WUBUR.renderTestimonials = function() {
  const track = document.getElementById('testimonialsTrack');
  const dots = document.getElementById('sliderDots');
  if (!track || !dots) return;

  const starSvg = `<svg viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`;

  track.innerHTML = WUBUR.testimonials.map(t => `
    <div class="testimonial-card">
      <img src="${t.avatar}" alt="${t.name}" class="testimonial-avatar" loading="lazy" />
      <div class="testimonial-stars">
        ${starSvg.repeat(t.rating)}
      </div>
      <p class="testimonial-text">"${t.text}"</p>
      <div class="testimonial-name">${t.name}</div>
      <div class="testimonial-location">${t.location}</div>
    </div>
  `).join('');

  dots.innerHTML = WUBUR.testimonials.map((_, i) => `
    <div class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></div>
  `).join('');
};

WUBUR.renderInstagram = function() {
  const grid = document.getElementById('instagramGrid');
  if (!grid) return;
  grid.innerHTML = WUBUR.instagram.map(src => `
    <div class="ig-item">
      <img src="${src}" alt="وبر Instagram" loading="lazy" />
      <div class="ig-overlay">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
        </svg>
      </div>
    </div>
  `).join('');
};

/* ─── UTILITY ACTIONS ─── */
WUBUR.addWishlist = function(name) {
  const btn = event.target;
  btn.style.color = '#C60021';
  btn.innerHTML = '♥ Saved';
  setTimeout(() => {
    btn.style.color = '';
    btn.innerHTML = '♡ Save';
  }, 2000);
};

WUBUR.quickView = function(imgSrc, name) {
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lightboxImg');
  if (!lb || !lbImg) return;
  lbImg.src = imgSrc;
  lbImg.alt = name;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
};

WUBUR.closeQuickView = function() {
  const lb = document.getElementById('lightbox');
  if (lb) lb.classList.remove('open');
  document.body.style.overflow = '';
};

WUBUR.initReveal = function() {
  const els = document.querySelectorAll('.product-card:not(.revealed), .collection-card:not(.revealed)');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('revealed'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  els.forEach(el => obs.observe(el));
};
