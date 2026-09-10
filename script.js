/* ============================================================
   script.js — Portfolio Rafi Alif Azhar
   ============================================================ */

// ─── TRANSLATIONS / I18N ─────────────────────────────────────
const i18nData = {
  id: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_certificates: "Certificates",
    nav_experience: "Experience",
    nav_testimonials: "Testimoni",
    nav_contact: "Contact",
    nav_cta: "Hire Me",
    hero_available: '<span class="available-dot"></span> Available for full-time roles',
    hero_desc:
      "Full Stack Web Developer berbasis di Karawang, Jawa Barat. Membangun aplikasi yang scalable dan responsif menggunakan Laravel, React.js &amp; Node.js. Bersertifikasi BNSP dan Certiport.",
    hero_btn_projects:
      '<span>Lihat Proyek</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
    hero_btn_cv:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span>Download CV</span>',
    hero_btn_contact:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><span>Hubungi Saya</span>',
    about_title: 'Tentang <span class="muted">Saya</span>',
    projects_title: 'Proyek yang <span class="muted">Telah Dibangun</span>',
    filter_all: "Semua",
    filter_fullstack: "Full Stack",
    filter_frontend: "Frontend",
    btn_demo:
      '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live Demo</span>',
    link_github: "Lihat di GitHub →",
    link_github_be: "GitHub Backend →",
    link_github_fe: "GitHub Frontend →",
    certs_title: 'Sertifikasi <span class="muted">&amp; Pencapaian</span>',
    exp_title: 'Pengalaman <span class="muted">&amp; Pendidikan</span>',
    testi_label: "Recommendations",
    testi_title: 'Testimoni <span class="muted">&amp; Rekomendasi</span>',
    testi_quote_1:
      '"Rafi menunjukkan dedikasi dan inisiatif tinggi saat magang. Aplikasi manajemen antrean real-time berbasis WebSocket yang ia bangun berjalan responsif, stabil, dan sangat membantu kelancaran loket pelayanan publik kami."',
    testi_role_1: "Diskominfo Kab. Bantul",
    testi_quote_2:
      '"Pengerjaan tugas akhir School Management App untuk MIM Troketon dieksekusi dengan sangat terencana, mulai dari perancangan arsitektur hingga pengujian SUS. Rafi memiliki dasar rekayasa web yang kuat dan kode yang terstruktur rapi."',
    testi_role_2: "Universitas Muhammadiyah Yogyakarta",
    testi_quote_3:
      '"Kami sangat terbantu dengan kehadiran website resmi dan sistem PPDB online TKQ An Naurah. Aplikasinya memudahkan pendaftaran santri baru secara online, mudah diakses orang tua, dan pengelolaan datanya sangat tertata."',
    testi_role_3: "TKQ An Naurah Islamic School",
    contact_title: 'Mari <span class="muted">Berkolaborasi</span>',
    contact_sub:
      "Saya aktif mencari peluang kerja penuh waktu sebagai Web Developer. Baik Anda punya proyek atau sekadar ingin berkenalan — inbox saya selalu terbuka.",
    footer_text:
      "Dirancang &amp; Dibangun oleh Rafi Alif Azhar &mdash; Karawang, Indonesia &copy; 2026",
  },
  en: {
    nav_about: "About",
    nav_projects: "Projects",
    nav_certificates: "Certificates",
    nav_experience: "Experience",
    nav_testimonials: "Testimonials",
    nav_contact: "Contact",
    nav_cta: "Hire Me",
    hero_available: '<span class="available-dot"></span> Available for full-time roles',
    hero_desc:
      "Full Stack Web Developer based in Karawang, West Java. Building scalable and responsive web applications using Laravel, React.js &amp; Node.js. BNSP and Certiport Certified.",
    hero_btn_projects:
      '<span>View Projects</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
    hero_btn_cv:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span>Download CV</span>',
    hero_btn_contact:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><span>Contact Me</span>',
    about_title: 'About <span class="muted">Me</span>',
    projects_title: 'Featured <span class="muted">Projects</span>',
    filter_all: "All",
    filter_fullstack: "Full Stack",
    filter_frontend: "Frontend",
    btn_demo:
      '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live Demo</span>',
    link_github: "View on GitHub →",
    link_github_be: "GitHub Backend →",
    link_github_fe: "GitHub Frontend →",
    certs_title: 'Certifications <span class="muted">&amp; Credentials</span>',
    exp_title: 'Experience <span class="muted">&amp; Education</span>',
    testi_label: "Recommendations",
    testi_title: 'Testimonials <span class="muted">&amp; Recommendations</span>',
    testi_quote_1:
      '"Rafi demonstrated great dedication and initiative during his internship. The real-time queue management system with WebSockets he developed proved responsive, stable, and greatly aided our public service counters."',
    testi_role_1: "Bantul Regency Dept. of Communications &amp; IT",
    testi_quote_2:
      '"The School Management App capstone project for MIM Troketon was executed with excellence from architecture to SUS evaluation. Rafi has a solid foundation in web engineering and clean, organized code."',
    testi_role_2: "Universitas Muhammadiyah Yogyakarta",
    testi_quote_3:
      '"We are extremely grateful for the official website and online PPDB system for TKQ An Naurah. It made new student enrollment seamless, accessible for parents, and keeps records secure and organized."',
    testi_role_3: "TKQ An Naurah Islamic School",
    contact_title: 'Let\'s <span class="muted">Collaborate</span>',
    contact_sub:
      "I am actively seeking full-time opportunities as a Web Developer. Whether you have an open role or just want to connect — my inbox is always open.",
    footer_text:
      "Designed &amp; Built by Rafi Alif Azhar &mdash; Karawang, Indonesia &copy; 2026",
  },
};

const phrasesData = {
  id: [
    "Full Stack Web Developer.",
    "Spesialis Laravel, Node.js, & React.js.",
    "Terbuka untuk Posisi Penuh Waktu.",
  ],
  en: [
    "Full Stack Web Developer.",
    "Laravel, Node.js, & React.js Specialist.",
    "Open to Full-Time Roles.",
  ],
};

let currentLang = localStorage.getItem("portfolio_lang") || "id";

// ─── TYPED TEXT EFFECT ───────────────────────────────────────
let phrases = phrasesData[currentLang] || phrasesData.id;
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimeout = null;

const typedEl = document.getElementById("typed-text");

function typeNext() {
  if (!typedEl) return;
  const current = phrases[phraseIndex];

  if (!isDeleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      typeTimeout = setTimeout(typeNext, 2200);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typeTimeout = setTimeout(typeNext, 400);
      return;
    }
  }

  typeTimeout = setTimeout(typeNext, isDeleting ? 32 : 60);
}

function resetTypedText() {
  if (typeTimeout) clearTimeout(typeTimeout);
  phrases = phrasesData[currentLang] || phrasesData.id;
  phraseIndex = 0;
  charIndex = 0;
  isDeleting = false;
  typeNext();
}

typeNext();

// ─── LANGUAGE TOGGLER ────────────────────────────────────────
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);

  // Update toggle button UI
  const langIdEl = document.getElementById("lang-id");
  const langEnEl = document.getElementById("lang-en");
  if (langIdEl && langEnEl) {
    langIdEl.classList.toggle("active", lang === "id");
    langEnEl.classList.toggle("active", lang === "en");
  }

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update all [data-i18n] elements
  const langTable = i18nData[lang] || i18nData.id;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (langTable[key] !== undefined) {
      el.innerHTML = langTable[key];
    }
  });

  // Reset typed effect with new language phrases
  resetTypedText();
}

const langToggleBtn = document.getElementById("lang-toggle");
if (langToggleBtn) {
  langToggleBtn.addEventListener("click", () => {
    const nextLang = currentLang === "id" ? "en" : "id";
    setLanguage(nextLang);
  });
}

// Initialize saved language if different from 'id'
if (currentLang !== "id") {
  setLanguage(currentLang);
}

// ─── SCROLL REVEAL ───────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = i * 0.06 + "s";
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));

// ─── PROJECT FILTER ──────────────────────────────────────────
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    // Update active button
    document
      .querySelectorAll(".filter-btn")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");

    // Show / hide cards
    const filter = btn.dataset.filter;
    document.querySelectorAll(".proj-card").forEach((card) => {
      const match = filter === "all" || card.dataset.type === filter;
      card.style.display = match ? "flex" : "none";
    });
  });
});

// ─── CERTIFICATE LIGHTBOX ────────────────────────────────────
const certModal = document.getElementById("cert-modal");
const certModalImg = document.getElementById("cert-modal-img");
const certModalClose = document.getElementById("cert-modal-close");

function openCertModal(src, alt) {
  if (!src || !certModal || !certModalImg) return;

  // Open modal and show loading indicator
  certModal.classList.add("open");
  certModal.classList.add("loading");
  document.body.style.overflow = "hidden";

  certModalImg.alt = alt || "Sertifikat penuh";
  certModalImg.style.opacity = "0";

  // Preload image to avoid empty/blank modal
  const tempImg = new Image();
  tempImg.onload = () => {
    certModalImg.src = src;
    certModal.classList.remove("loading");
    certModalImg.style.opacity = "1";
  };
  tempImg.onerror = () => {
    certModalImg.src = src;
    certModal.classList.remove("loading");
    certModalImg.style.opacity = "1";
  };
  tempImg.src = src;
}

function closeCertModal() {
  if (!certModal) return;
  certModal.classList.remove("open");
  certModal.classList.remove("loading");
  document.body.style.overflow = "";
}

// Make certificate cards and images clickable
document.querySelectorAll(".cert-card").forEach((card) => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    const img = card.querySelector(".cert-clickable");
    if (img) {
      const targetSrc = img.currentSrc || img.src || img.dataset.full;
      openCertModal(targetSrc, img.alt);
    }
  });
});

if (certModalClose) certModalClose.addEventListener("click", closeCertModal);

if (certModal) {
  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) closeCertModal();
  });
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && certModal && certModal.classList.contains("open")) {
    closeCertModal();
  }
});

// ─── ACTIVE NAV ON SCROLL & CLICK ────────────────────────────
const navSections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
let isClickScrolling = false;
let clickScrollTimeout = null;

function updateActiveNav() {
  if (isClickScrolling) return;

  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;
  const docHeight = document.documentElement.scrollHeight;

  // Jika scroll mencapai bagian bawah halaman, pastikan #contact yang aktif
  if (windowHeight + scrollY >= docHeight - 80) {
    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#contact");
    });
    return;
  }

  let currentId = "";
  navSections.forEach((section) => {
    if (scrollY >= section.offsetTop - 120) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle(
      "active",
      link.getAttribute("href") === "#" + currentId,
    );
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });

// Tangani klik navigasi langsung agar menu langsung aktif tanpa salah sorot
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      navLinks.forEach((l) => l.classList.remove("active"));
      link.classList.add("active");

      isClickScrolling = true;
      clearTimeout(clickScrollTimeout);
      clickScrollTimeout = setTimeout(() => {
        isClickScrolling = false;
        updateActiveNav();
      }, 700);
    }
  });
});
