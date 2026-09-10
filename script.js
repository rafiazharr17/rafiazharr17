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
    hero_available:
      '<span class="available-dot"></span> Available for full-time roles',
    hero_desc:
      "Full Stack Web Developer berbasis di Karawang, Jawa Barat. Membangun aplikasi yang scalable dan responsif menggunakan Laravel, React.js &amp; Node.js. Bersertifikasi BNSP dan Certiport.",
    hero_btn_projects:
      '<span>Lihat Proyek</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
    hero_btn_cv:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span>Download CV</span>',
    hero_btn_contact:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><span>Hubungi Saya</span>',
    about_title: 'Tentang <span class="muted">Saya</span>',
    about_p1:
      "Saya adalah <strong>Full Stack Web Developer</strong> yang berorientasi pada detail, dengan dasar yang kuat dalam pengembangan web, desain sistem, dan integrasi API.",
    about_p2:
      "Mahir membangun aplikasi scalable menggunakan teknologi modern di sisi frontend maupun backend, dengan pemahaman mendalam tentang GitHub untuk version control dan pengembangan kolaboratif.",
    about_p3:
      "Telah menyelesaikan gelar S1 Teknologi Informasi di <strong>Universitas Muhammadiyah Yogyakarta</strong> dengan IPK 3.85/4.00.",
    projects_title: 'Proyek yang <span class="muted">Telah Dibangun</span>',
    filter_all: "Semua",
    filter_fullstack: "Full Stack",
    filter_frontend: "Frontend",
    btn_demo:
      '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live Demo</span>',
    link_github: "Lihat di GitHub →",
    link_github_be: "GitHub Backend →",
    link_github_fe: "GitHub Frontend →",
    fallback_hint: "Screenshot Segera Hadir",
    proj_sub_1:
      "Sistem Monitoring Produksi, Inventaris &amp; Logistik Real-Time",
    proj_desc_1:
      "Menggantikan pencatatan spreadsheet manual di PT. Inoac Polytechno Indonesia Plant #2 dengan platform monitoring real-time berbasis React 19, TypeScript, dan Tailwind CSS yang terintegrasi REST API. Dilengkapi visualisasi Recharts dan Shop-Floor TV Display untuk menyajikan metrik Plan vs Actual secara instan serta mempercepat rekonsiliasi stok Finish Good lintas divisi (PPIC, Warehouse, Logistik).",
    proj_sub_2: "Website Resmi &amp; Sistem Informasi PPDB Online",
    proj_desc_2:
      "Proses publikasi profil lembaga dan pendaftaran santri baru (PPDB) di TKQ An Naurah sebelumnya masih manual dan belum terintegrasi sistem digital. Kami merancang platform full-stack menggunakan React 19, Vite, dan Tailwind CSS di sisi frontend, didukung backend REST API Express.js 5, Node.js, dan MySQL yang diamankan otentikasi JWT serta proteksi Helmet. Solusi ini berhasil mengotomatiskan alur PPDB online secara terstruktur sekaligus mempermudah wali santri mengakses info program secara mandiri.",
    proj_sub_3: "Final Project — Universitas Muhammadiyah Yogyakarta",
    proj_desc_3:
      "Administrasi akademik dan pendaftaran santri di MIM Troketon sebelumnya terkendala pencatatan manual yang rentan kekeliruan data dan lambat. Kami mengembangkan aplikasi manajemen sekolah full-stack menggunakan Node.js, React.js, Tailwind CSS, dan MySQL dengan modul PPDB online, manajemen nilai, dan penjadwalan terintegrasi. Sistem divalidasi keandalannya melalui Black Box Testing dan mencatatkan evaluasi usability yang tinggi pada pengujian System Usability Scale (SUS).",
    proj_sub_4: "Magang — Diskominfo Kab. Bantul",
    proj_desc_4:
      "Alur antrean layanan publik tatap muka di loket instansi membutuhkan pembaruan nomor pemanggilan instan di monitor display tanpa jeda refresh halaman. Kami mengembangkan aplikasi manajemen antrean real-time berbasis WebSocket yang terhubung ke backend Node.js dan antarmuka modular React.js berarsitektur feature-based. Hasilnya, pemanggilan antrean berlangsung tanpa latensi (zero-delay), meningkatkan efisiensi kerja petugas loket, dan menciptakan ruang tunggu yang tertib bagi masyarakat.",
    proj_sub_5: "Full Stack Web Developer",
    proj_desc_5:
      "Distribusi modul pembelajaran dan pengumpulan tugas kelas yang tersebar di aplikasi perpesanan menyulitkan pengarsipan serta penilaian tugas siswa. Kami membangun platform LMS terpusat berbasis Laravel, MySQL, dan Tailwind CSS dengan sistem otentikasi aman Laravel Breeze serta Role-Based Access Control (RBAC) untuk 3 role pengguna: Admin, Guru, dan Siswa. Platform ini memusatkan interaksi kelas, repositori modul materi, dan pelacakan tenggat tugas dalam satu portal terstruktur.",
    proj_sub_6: "Movie Discovery Platform",
    proj_desc_6:
      "Pengguna sering kali kesulitan menemukan rekomendasi film yang sesuai karena katalog informasi yang kaku dan kurang interaktif. Kami merancang aplikasi web penjelajah film modern berbasis React.js dan Tailwind CSS yang diperkaya animasi mikro mulus dari Framer Motion serta integrasi autentikasi personal pengguna via Supabase. Aplikasi ini menghadirkan pengalaman eksplorasi katalog film yang cepat, responsif, dan kaya visual mulai dari pencarian genre hingga cuplikan trailer.",
    proj_sub_7: "Brand Landing Page",
    proj_desc_7:
      "UMKM kuliner Canela Dessert memerlukan media promosi digital multi-halaman yang menarik secara visual untuk memperkuat identitas brand dan memfasilitasi kontak pelanggan. Kami mengembangkan website multi-page responsif berbasis HTML, CSS, dan validasi form interaktif dengan JavaScript murni, lalu di-deploy ke GitHub Pages untuk akses publik instan. Website ini berhasil memperkuat daya tarik visual produk dessert sekaligus menyediakan kanal pemesanan online yang mudah dijangkau konsumen.",
    exp_role_1: "MIS / IT Staff Intern",
    exp_period_1: "Agu 2026 – Sekarang",
    exp_point_1_1:
      "Merancang dan mengembangkan frontend enterprise <strong>Stock Monitoring &amp; Delivery Control</strong> menggunakan React 19, TypeScript, Vite, dan Tailwind CSS.",
    exp_point_1_2:
      "Mengintegrasikan sistem Shop-Floor TV Display dan visualisasi Recharts untuk monitoring metrik Plan vs Actual vs On Process secara real-time pada monitor dinding pabrik.",
    exp_point_1_3:
      "Mengoptimalkan koordinasi operasional harian lintas divisi (PPIC, Warehouse, Logistik) serta mempercepat proses rekonsiliasi stok Finish Good.",
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
    hero_available:
      '<span class="available-dot"></span> Available for full-time roles',
    hero_desc:
      "Full Stack Web Developer based in Karawang, West Java. Building scalable and responsive web applications using Laravel, React.js &amp; Node.js. BNSP and Certiport Certified.",
    hero_btn_projects:
      '<span>View Projects</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>',
    hero_btn_cv:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg><span>Download CV</span>',
    hero_btn_contact:
      '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg><span>Contact Me</span>',
    about_title: 'About <span class="muted">Me</span>',
    about_p1:
      "I am a detail-oriented <strong>Full Stack Web Developer</strong> with a strong foundation in web development, system design, and API integration.",
    about_p2:
      "Proficient in engineering scalable applications using modern technologies across both frontend and backend, with a deep understanding of GitHub for version control and collaborative development.",
    about_p3:
      "Graduated with a Bachelor's degree in Information Technology from <strong>Universitas Muhammadiyah Yogyakarta</strong> with a GPA of 3.85 / 4.00.",
    projects_title: 'Featured <span class="muted">Projects</span>',
    filter_all: "All",
    filter_fullstack: "Full Stack",
    filter_frontend: "Frontend",
    btn_demo:
      '<svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg><span>Live Demo</span>',
    link_github: "View on GitHub →",
    link_github_be: "GitHub Backend →",
    link_github_fe: "GitHub Frontend →",
    fallback_hint: "Screenshot Coming Soon",
    proj_sub_1:
      "Real-Time Production, Inventory &amp; Logistics Monitoring System",
    proj_desc_1:
      "Replaces manual spreadsheet records at PT. Inoac Polytechno Indonesia Plant #2 with an enterprise real-time monitoring platform built with React 19, TypeScript, and Tailwind CSS integrated via REST API. Features Recharts data visualization and Shop-Floor TV Displays to deliver instant Plan vs Actual metrics and accelerate Finish Good inventory reconciliation across divisions (PPIC, Warehouse, Logistics).",
    proj_sub_2: "Official Website &amp; Online PPDB Information System",
    proj_desc_2:
      "Previously, institutional profile publishing and student enrollment (PPDB) at TKQ An Naurah were manual and unintegrated. We engineered a full-stack platform using React 19, Vite, and Tailwind CSS on the frontend, powered by an Express.js 5, Node.js, and MySQL REST API secured with JWT authentication and Helmet protection. This automated online PPDB workflows while enabling parents to seamlessly access program details independently.",
    proj_sub_3: "Final Project — Universitas Muhammadiyah Yogyakarta",
    proj_desc_3:
      "Academic administration and student enrollment at MIM Troketon previously suffered from error-prone and slow manual record-keeping. We built a full-stack school management web app using Node.js, React.js, Tailwind CSS, and MySQL featuring online PPDB, grade management, and integrated scheduling. The system proved robust through Black Box Testing and achieved high usability scores on System Usability Scale (SUS) evaluations.",
    proj_sub_4: "Internship — Bantul Regency Dept. of Communications &amp; IT",
    proj_desc_4:
      "In-person public service counters required zero-latency queue calling displayed instantly on monitors without page refreshes. We developed a real-time queue management system with WebSockets, a Node.js backend, and a feature-based React.js modular interface. The result delivered zero-delay queue updates, boosting counter officer productivity and creating an orderly waiting lounge for visitors.",
    proj_sub_5: "Full Stack Web Developer",
    proj_desc_5:
      "Distributing learning materials and collecting homework via messaging apps made archiving and grading cumbersome. We built a centralized LMS platform using Laravel, MySQL, and Tailwind CSS with secure Laravel Breeze authentication and Role-Based Access Control (RBAC) across 3 roles: Admin, Teacher, and Student. The platform unifies classroom interactions, courseware repositories, and assignment deadlines into a single structured portal.",
    proj_sub_6: "Movie Discovery Platform",
    proj_desc_6:
      "Users often struggle to find personalized movie recommendations due to static and clunky catalogs. We designed a modern movie discovery web app using React.js and Tailwind CSS, enriched with fluid micro-animations via Framer Motion and user authentication via Supabase. The app delivers a fast, responsive, and visually engaging browsing experience from genre exploration to trailer previews.",
    proj_sub_7: "Brand Landing Page",
    proj_desc_7:
      "Culinary SME Canela Dessert required a visually compelling multi-page digital presence to strengthen brand identity and facilitate customer inquiries. We developed a responsive multi-page website built with HTML, CSS, and interactive vanilla JavaScript form validation, deployed to GitHub Pages for instant public access. The site elevated brand appeal while providing customers with an accessible online ordering channel.",
    exp_role_1: "MIS / IT Staff Intern",
    exp_period_1: "Aug 2026 – Present",
    exp_point_1_1:
      "Engineered enterprise frontend for <strong>Stock Monitoring &amp; Delivery Control</strong> using React 19, TypeScript, Vite, and Tailwind CSS.",
    exp_point_1_2:
      "Integrated Shop-Floor TV Display and Recharts visualizations for real-time Plan vs Actual vs On Process monitoring on factory wall displays.",
    exp_point_1_3:
      "Streamlined daily operational coordination across PPIC, Warehouse, and Logistics divisions while accelerating Finish Good inventory reconciliation.",
    certs_title: 'Certifications <span class="muted">&amp; Credentials</span>',
    exp_title: 'Experience <span class="muted">&amp; Education</span>',
    testi_label: "Recommendations",
    testi_title:
      'Testimonials <span class="muted">&amp; Recommendations</span>',
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
