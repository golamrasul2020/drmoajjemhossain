document.addEventListener('DOMContentLoaded', () => {
  const D = window.SITE_DATA;
  const $ = id => document.getElementById(id);
  const setText = (id, value) => { const el = $(id); if (el) el.textContent = value || ''; };

  const indicators = $('heroIndicators');
  const hero = $('heroInner');
  D.heroSlides.forEach((slide, i) => {
    indicators.insertAdjacentHTML('beforeend', `<button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="${i}" class="${i ? '' : 'active'}" aria-label="Slide ${i + 1}"></button>`);
    hero.insertAdjacentHTML('beforeend', `<div class="carousel-item ${i ? '' : 'active'}"><div class="hero-slide ${slide.visual || ''}" style="background-image:url('${slide.image}')"><div class="container"><div class="hero-content"><div class="hero-anim eyebrow">${slide.eyebrow}</div><h1 class="hero-anim delay-1">${slide.title}</h1><p class="hero-anim delay-2">${slide.text}</p><div class="hero-anim delay-3 d-flex flex-wrap gap-3 mt-4">${slide.ctaPrimary ? `<a href="${slide.ctaPrimary.href}" class="btn btn-teal rounded-pill px-4 py-2">${slide.ctaPrimary.label}</a>` : ''}${slide.ctaSecondary ? `<a href="${slide.ctaSecondary.href}" class="btn btn-outline-light-teal rounded-pill px-4 py-2">${slide.ctaSecondary.label}</a>` : ''}</div></div></div></div></div>`);
  });

  setText('profileName', D.doctor.name); setText('profileSpecialty', D.doctor.specialty); setText('profileHospital', D.doctor.hospital); setText('profileBio', D.doctor.bioShort);
  const profileImg = $('profileImg'); if (profileImg) { profileImg.src = D.doctor.photoProfile; profileImg.alt = `Portrait of ${D.doctor.name}`; }
  const stats = $('statsRow'); D.stats.forEach(s => stats.insertAdjacentHTML('beforeend', `<div class="col-6 col-md-3"><div class="stat-box"><div class="num">${s.value}${s.suffix}</div><div class="lbl">${s.label}</div></div></div>`));
  const timeline = $('timelineWrap'); D.timeline.forEach(t => timeline.insertAdjacentHTML('beforeend', `<div class="timeline-item"><div class="year">${t.year}</div><h6 class="mb-1 mt-1">${t.title}</h6><p class="text-muted small mb-0">${t.detail}</p></div>`));
  $('membershipsList').innerHTML = D.credentials.memberships.map(x => `<li class="mb-2"><i class="bi bi-check2-circle text-teal me-2"></i>${x}</li>`).join('');
  $('interestsList').innerHTML = D.credentials.interests.map(x => `<span class="badge bg-light text-navy border">${x}</span>`).join('');
  $('awardsList').innerHTML = D.credentials.awards.map(x => `<li class="mb-2"><i class="bi bi-award text-teal me-2"></i>${x}</li>`).join('');
  $('expertiseGrid').innerHTML = D.expertise.map(x => `<div class="col-md-6 col-lg-3 reveal in-view"><div class="info-card"><div class="icon-wrap"><i class="bi ${x.icon}"></i></div><div class="cat-tag">${x.category}</div><h5>${x.title}</h5><p class="text-muted small">${x.desc}</p></div></div>`).join('');
  $('whyChooseGrid').innerHTML = D.whyChoose.map(x => `<div class="col-md-6 col-lg-4 reveal in-view"><div class="info-card text-center"><div class="icon-wrap mx-auto"><i class="bi ${x.icon}"></i></div><h5>${x.title}</h5><p class="text-muted small">${x.desc}</p></div></div>`).join('');

  $('hospitalGrid').innerHTML = D.hospitals.map(h => `<div class="col-md-6 reveal in-view"><div class="hospital-card h-100"><div class="map-placeholder"><i class="bi bi-map fs-1 me-2"></i><span>Hospital Location</span></div><div class="p-4"><h5>${h.name}</h5><p class="text-teal small fw-semibold">${h.department}</p><p class="text-muted small"><i class="bi bi-geo-alt me-2"></i>${h.address}</p><p class="text-muted small"><i class="bi bi-telephone me-2"></i>${h.phone}</p><p class="text-muted small"><i class="bi bi-clock me-2"></i>${h.schedule}</p><a href="${h.mapEmbed}" class="btn btn-outline-navy btn-sm rounded-pill px-3" target="_blank" rel="noopener"><i class="bi bi-map me-1"></i>View Map</a></div></div></div>`).join('');
  ['apptPhone','contactPhone','footerPhone'].forEach(id => setText(id, D.doctor.phone)); ['apptEmail','contactEmail','footerEmail'].forEach(id => setText(id, D.doctor.email)); ['apptHours','contactHours','footerHours'].forEach(id => setText(id, D.doctor.consultationHours)); ['contactAddress','footerAddress'].forEach(id => setText(id, D.doctor.address)); setText('year', new Date().getFullYear());

  const nav = $('mainNav'); window.addEventListener('scroll', () => { nav.classList.toggle('scrolled', scrollY > 60); $('returnHome').classList.toggle('show', scrollY > 400); });
  $('returnHome').addEventListener('click', () => $('home').scrollIntoView({behavior:'smooth'}));
  document.querySelectorAll('#navMenu .nav-link').forEach(link => link.addEventListener('click', () => { const menu = $('navMenu'); if (menu.classList.contains('show')) bootstrap.Collapse.getOrCreateInstance(menu).hide(); }));
});
