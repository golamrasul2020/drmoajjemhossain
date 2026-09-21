document.addEventListener('DOMContentLoaded', () => {

  const D = SITE_DATA;

  /* ---------------- NAVBAR SCROLL + ACTIVE LINK ---------------- */
  const nav = document.getElementById('mainNav');
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
    let current = '';
    sections.forEach(sec => {
      const top = sec.offsetTop - 100;
      if (window.scrollY >= top) current = sec.getAttribute('id');
    });
    navLinks.forEach(l => {
      l.classList.toggle('active', l.getAttribute('href') === '#' + current);
    });
  });

  // close mobile menu on link click
  document.querySelectorAll('#navMenu .nav-link').forEach(l=>{
    l.addEventListener('click', ()=>{
      const menu = document.getElementById('navMenu');
      if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide();
    });
  });

  /* ---------------- HERO SLIDER RENDER ---------------- */
  D.heroSlides.forEach((slide, i) => {
  heroIndicators.insertAdjacentHTML('beforeend', `
    <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="${i}" class="${i===0?'active':''}" ${i===0?'aria-current="true"':''} aria-label="Slide ${i+1}"></button>
  `);

  const bgStyle = slide.image
    ? `background-image:url('${slide.image}')`
    : '';
  const visualClass = slide.visual ? slide.visual : '';

  heroInner.insertAdjacentHTML('beforeend', `
    <div class="carousel-item ${i===0?'active':''}">
      <div class="hero-slide ${visualClass}" style="${bgStyle}">
        <div class="container">
          <div class="hero-content">
            <div class="hero-anim eyebrow">${slide.eyebrow}</div>
            <h1 class="hero-anim delay-1">${slide.title}</h1>
            <p class="hero-anim delay-2">${slide.text}</p>
            <div class="hero-anim delay-3 d-flex flex-wrap gap-3 mt-4">
              ${slide.ctaPrimary ? `<a href="${slide.ctaPrimary.href}" class="btn btn-teal rounded-pill px-4 py-2">${slide.ctaPrimary.label}</a>` : ''}
              ${slide.ctaSecondary ? `<a href="${slide.ctaSecondary.href}" class="btn btn-outline-light-teal rounded-pill px-4 py-2">${slide.ctaSecondary.label}</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    </div>
  `);
});

  /* ---------------- DOCTOR PROFILE ---------------- */
  document.getElementById('profileImg').src = D.doctor.photoProfile;
  document.getElementById('profileImg').alt = `Portrait of ${D.doctor.name}`;
  document.getElementById('profileName').textContent = D.doctor.name;
  document.getElementById('profileSpecialty').textContent = D.doctor.specialty;
  document.getElementById('profileHospital').textContent = D.doctor.hospital;
  document.getElementById('profileBio').textContent = D.doctor.bioShort;

  const statsRow = document.getElementById('statsRow');
  D.stats.forEach(s => {
    statsRow.insertAdjacentHTML('beforeend', `
      <div class="col-6 col-md-3">
        <div class="stat-box">
          <div class="num" data-count="${s.value}" data-suffix="${s.suffix}">0</div>
          <div class="lbl">${s.label}</div>
        </div>
      </div>
    `);
  });

  /* animated counters via IntersectionObserver */
  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = +el.dataset.count;
        const suffix = el.dataset.suffix || '';
        let cur = 0;
        const step = Math.max(1, Math.ceil(target / 60));
        const tick = () => {
          cur += step;
          if (cur >= target) { el.textContent = target + suffix; }
          else { el.textContent = cur + suffix; requestAnimationFrame(tick); }
        };
        tick();
        counterObserver.unobserve(el);
      }
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

  /* ---------------- TIMELINE ---------------- */
  const timelineWrap = document.getElementById('timelineWrap');
  D.timeline.forEach(t => {
    timelineWrap.insertAdjacentHTML('beforeend', `
      <div class="timeline-item">
        <div class="year">${t.year}</div>
        <h6 class="mb-1 mt-1">${t.title}</h6>
        <p class="text-muted small mb-0">${t.detail}</p>
      </div>
    `);
  });

  document.getElementById('membershipsList').innerHTML = D.credentials.memberships
    .map(m => `<li class="mb-2"><i class="bi bi-check2-circle text-teal me-2"></i>${m}</li>`).join('');

  document.getElementById('interestsList').innerHTML = D.credentials.interests
    .map(i => `<span class="badge bg-light text-navy border">${i}</span>`).join('');

  document.getElementById('awardsList').innerHTML = D.credentials.awards
    .map(a => `<li class="mb-2"><i class="bi bi-award text-teal me-2"></i>${a}</li>`).join('');

  /* ---------------- EXPERTISE GRID ---------------- */
  const expertiseGrid = document.getElementById('expertiseGrid');
  D.expertise.forEach(item => {
    expertiseGrid.insertAdjacentHTML('beforeend', `
      <div class="col-md-6 col-lg-3 reveal">
        <div class="info-card">
          <div class="icon-wrap"><i class="bi ${item.icon}"></i></div>
          <div class="cat-tag">${item.category}</div>
          <h5 class="mt-1">${item.title}</h5>
          <p class="text-muted small">${item.desc}</p>
          <a href="#treatments" class="learn-more">Learn More <i class="bi bi-arrow-right"></i></a>
        </div>
      </div>
    `);
  });

  /* ---------------- WHY CHOOSE ---------------- */
  const whyGrid = document.getElementById('whyChooseGrid');
  D.whyChoose.forEach(item => {
    whyGrid.insertAdjacentHTML('beforeend', `
      <div class="col-md-6 col-lg-4 reveal">
        <div class="info-card text-center">
          <div class="icon-wrap mx-auto"><i class="bi ${item.icon}"></i></div>
          <h5>${item.title}</h5>
          <p class="text-muted small mb-0">${item.desc}</p>
        </div>
      </div>
    `);
  });

  /* ---------------- HOSPITALS ---------------- */
  const hospitalGrid = document.getElementById('hospitalGrid');
  D.hospitals.forEach(h => {
    hospitalGrid.insertAdjacentHTML('beforeend', `
      <div class="col-md-6 reveal">
        <div class="hospital-card h-100">
          <div class="map-placeholder"><i class="bi bi-geo-alt fs-2"></i></div>
          <div class="p-4">
            <h5>${h.name}</h5>
            <p class="text-teal small fw-semibold mb-2">${h.department}</p>
            <p class="text-muted small mb-1"><i class="bi bi-geo-alt me-2"></i>${h.address}</p>
            <p class="text-muted small mb-1"><i class="bi bi-telephone me-2"></i>${h.phone}</p>
            <p class="text-muted small mb-3"><i class="bi bi-clock me-2"></i>${h.schedule}</p>
            <a href="#appointment" class="btn btn-outline-navy btn-sm rounded-pill px-3">Book Here</a>
          </div>
        </div>
      </div>
    `);
  });

  /* ---------------- TREATMENTS: RENDER + FILTER + SEARCH ---------------- */
  const treatmentGrid = document.getElementById('treatmentGrid');
  const treatmentFilters = document.getElementById('treatmentFilters');
  const treatmentSearch = document.getElementById('treatmentSearch');
  const treatCategories = ['All', ...new Set(D.treatments.map(t => t.category))];
  let activeTreatCat = 'All';

  treatCategories.forEach(cat => {
    treatmentFilters.insertAdjacentHTML('beforeend', `<button class="filter-btn ${cat==='All'?'active':''}" data-cat="${cat}">${cat}</button>`);
  });

  function renderTreatments() {
    const q = treatmentSearch.value.toLowerCase();
    const filtered = D.treatments.filter(t =>
      (activeTreatCat === 'All' || t.category === activeTreatCat) &&
      t.title.toLowerCase().includes(q)
    );
    treatmentGrid.innerHTML = filtered.length ? filtered.map(t => `
      <div class="col-md-6 col-lg-4 reveal in-view">
        <div class="info-card">
          <div class="cat-tag">${t.category}</div>
          <h5 class="mt-1">${t.title}</h5>
          <p class="text-muted small">${t.overview}</p>
          <button class="learn-more btn btn-link p-0" data-id="${t.id}">View Details <i class="bi bi-arrow-right"></i></button>
        </div>
      </div>
    `).join('') : `<p class="text-muted text-center">No treatments found.</p>`;
  }
  renderTreatments();

  treatmentFilters.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    treatmentFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeTreatCat = e.target.dataset.cat;
    renderTreatments();
  });
  treatmentSearch.addEventListener('input', renderTreatments);

  const treatmentModal = new bootstrap.Modal(document.getElementById('treatmentModal'));
  treatmentGrid.addEventListener('click', e => {
    const btn = e.target.closest('[data-id]');
    if (!btn) return;
    const t = D.treatments.find(x => x.id === btn.dataset.id);
    document.getElementById('modalTitle').textContent = t.title;
    document.getElementById('modalBody').innerHTML = `
      <p>${t.overview}</p>
      <h6 class="mt-3">Common Indications</h6>
      <ul>${t.indications.map(i => `<li>${i}</li>`).join('')}</ul>
      <h6 class="mt-3">Diagnostic Process</h6>
      <ul>${t.diagnosis.map(i => `<li>${i}</li>`).join('')}</ul>
      <h6 class="mt-3">Treatment Options</h6>
      <ul>${t.options.map(i => `<li>${i}</li>`).join('')}</ul>
      <h6 class="mt-3">Recovery Information</h6>
      <p>${t.recovery}</p>
      <h6 class="mt-3">FAQs</h6>
      ${t.faqs.map(f => `<p class="mb-1"><strong>${f.q}</strong><br>${f.a}</p>`).join('')}
      <p class="text-muted small fst-italic mt-3">Treatment outcomes vary by individual and are determined after clinical evaluation.</p>
    `;
    treatmentModal.show();
  });

  /* ---------------- PUBLICATIONS ---------------- */
  const pubGrid = document.getElementById('publicationsGrid');
  const pubYearFilters = document.getElementById('pubYearFilters');
  const years = ['All', ...new Set(D.publications.map(p => p.year))].sort((a,b)=> a==='All'?-1: b-a);
  let activeYear = 'All';

  years.forEach(y => {
    pubYearFilters.insertAdjacentHTML('beforeend', `<button class="filter-btn ${y==='All'?'active':''}" data-year="${y}">${y}</button>`);
  });

  function renderPubs() {
    const filtered = D.publications.filter(p => activeYear === 'All' || p.year == activeYear);
    pubGrid.innerHTML = filtered.map(p => `
      <div class="col-lg-6 reveal in-view">
        <div class="pub-card h-100">
          <span class="badge bg-navy mb-2">${p.year}</span>
          <h6>${p.title}</h6>
          <p class="text-muted small mb-1">${p.authors}</p>
          <p class="text-muted small mb-2 fst-italic">${p.journal}</p>
          <a href="${p.link}" class="learn-more" target="_blank" rel="noopener">Read Publication <i class="bi bi-box-arrow-up-right"></i></a>
        </div>
      </div>
    `).join('');
  }
  renderPubs();

  pubYearFilters.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    pubYearFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeYear = e.target.dataset.year;
    renderPubs();
  });

  /* ---------------- ARTICLES (RESOURCE CENTER) ---------------- */
  const articlesGrid = document.getElementById('articlesGrid');
  const articleFilters = document.getElementById('articleFilters');
  const articleSearch = document.getElementById('articleSearch');
  const articleCats = ['All', ...new Set(D.articles.map(a => a.category))];
  let activeArticleCat = 'All';

  articleCats.forEach(cat => {
    articleFilters.insertAdjacentHTML('beforeend', `<button class="filter-btn ${cat==='All'?'active':''}" data-cat="${cat}">${cat}</button>`);
  });

  function renderArticles() {
    const q = articleSearch.value.toLowerCase();
    const filtered = D.articles.filter(a =>
      (activeArticleCat === 'All' || a.category === activeArticleCat) &&
      a.title.toLowerCase().includes(q)
    );
    articlesGrid.innerHTML = filtered.length ? filtered.map(a => `
      <div class="col-md-6 col-lg-3 reveal in-view">
        <div class="article-card">
          <img src="${a.image}" loading="lazy" alt="${a.title}">
          <div class="body">
            <div class="article-meta mb-2">${a.category} • ${a.readTime}</div>
            <h6>${a.title}</h6>
            <p class="text-muted small">${a.summary}</p>
            <a href="#" class="learn-more">Read More <i class="bi bi-arrow-right"></i></a>
          </div>
        </div>
      </div>
    `).join('') : `<p class="text-muted text-center">No articles found.</p>`;
  }
  renderArticles();

  articleFilters.addEventListener('click', e => {
    if (!e.target.classList.contains('filter-btn')) return;
    articleFilters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    e.target.classList.add('active');
    activeArticleCat = e.target.dataset.cat;
    renderArticles();
  });
  articleSearch.addEventListener('input', renderArticles);

  /* ---------------- FAQ ACCORDION ---------------- */
  const faqAccordion = document.getElementById('faqAccordion');
  D.faqs.forEach((f, i) => {
    faqAccordion.insertAdjacentHTML('beforeend', `
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button ${i!==0?'collapsed':''}" type="button" data-bs-toggle="collapse" data-bs-target="#faq${i}">
            ${f.q}
          </button>
        </h2>
        <div id="faq${i}" class="accordion-collapse collapse ${i===0?'show':''}" data-bs-parent="#faqAccordion">
          <div class="accordion-body text-muted">${f.a}</div>
        </div>
      </div>
    `);
  });

  /* ---------------- TESTIMONIALS ---------------- */
  const testimonialInner = document.getElementById('testimonialInner');
  D.testimonials.forEach((t, i) => {
    testimonialInner.insertAdjacentHTML('beforeend', `
      <div class="carousel-item ${i===0?'active':''}">
        <div class="testimonial-card">
          <i class="bi bi-quote"></i>
          <p class="fs-5 mt-3">"${t.text}"</p>
          <h6 class="mb-0 mt-3">${t.name}</h6>
          <span class="text-teal small">${t.category}</span>
        </div>
      </div>
    `);
  });

  /* ---------------- CONTACT / APPOINTMENT INFO ---------------- */
  document.getElementById('apptPhone').textContent = D.doctor.phone;
  document.getElementById('apptEmail').textContent = D.doctor.email;
  document.getElementById('apptHours').textContent = D.doctor.consultationHours;

  document.getElementById('contactAddress').textContent = D.doctor.address;
  document.getElementById('contactPhone').textContent = D.doctor.phone;
  document.getElementById('contactEmail').textContent = D.doctor.email;
  document.getElementById('contactHours').textContent = D.doctor.consultationHours;

  document.getElementById('footerPhone').textContent = D.doctor.phone;
  document.getElementById('footerEmail').textContent = D.doctor.email;
  document.getElementById('footerAddress').textContent = D.doctor.address;
  document.getElementById('footerHours').textContent = D.doctor.consultationHours;

  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------------- APPOINTMENT FORM VALIDATION ---------------- */
  const form = document.getElementById('appointmentForm');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    e.stopPropagation();
    if (!form.checkValidity()) {
      form.classList.add('was-validated');
      return;
    }
    // Simulate submission (replace with real API call)
    document.getElementById('formSuccess').classList.remove('d-none');
    form.reset();
    form.classList.remove('was-validated');
    setTimeout(() => document.getElementById('formSuccess').classList.add('d-none'), 6000);
  });

  /* ---------------- SCROLL REVEAL ---------------- */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

});

/* ---------------- RETURN TO HOME ---------------- */
const returnHome = document.getElementById('returnHome');
const homeSection = document.getElementById('home');

window.addEventListener('scroll', () => {
  returnHome.classList.toggle('show', window.scrollY > 400);
});

returnHome.addEventListener('click', () => {
  homeSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
});