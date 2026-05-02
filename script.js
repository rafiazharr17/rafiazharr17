/* ============================================================
   script.js — Portfolio Rafi Alif Azhar
   ============================================================ */

// ─── TYPED TEXT EFFECT ───────────────────────────────────────
const phrases = [
  'Full Stack Web Developer.',
  'Laravel & React.js Specialist.',
  'Open to Full-Time Roles.',
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typedEl = document.getElementById('typed-text');

function typeNext() {
  const current = phrases[phraseIndex];

  if (!isDeleting) {
    typedEl.textContent = current.slice(0, ++charIndex);
    if (charIndex === current.length) {
      isDeleting = true;
      setTimeout(typeNext, 2200);
      return;
    }
  } else {
    typedEl.textContent = current.slice(0, --charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      setTimeout(typeNext, 400);
      return;
    }
  }

  setTimeout(typeNext, isDeleting ? 32 : 60);
}

typeNext();

// ─── SCROLL REVEAL ───────────────────────────────────────────
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = i * 0.06 + 's';
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1 }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ─── PROJECT FILTER ──────────────────────────────────────────
document.querySelectorAll('.filter-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    // Update active button
    document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    // Show / hide cards
    const filter = btn.dataset.filter;
    document.querySelectorAll('.proj-card').forEach((card) => {
      const match = filter === 'all' || card.dataset.type === filter;
      card.style.display = match ? 'flex' : 'none';
    });
  });
});

// ─── ACTIVE NAV ON SCROLL ────────────────────────────────────
const navSections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let currentId = '';

  navSections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 100) {
      currentId = section.id;
    }
  });

  navLinks.forEach((link) => {
    link.classList.toggle('active', link.getAttribute('href') === '#' + currentId);
  });
});
