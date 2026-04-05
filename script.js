/**
 * Climb4Dreams Landing Page Scripts
 * Features: SVG icon injection, mobile menu, scroll animations
 */

// ========================================
// SVG ICON SYSTEM
// ========================================

// Icon path definitions - usage: <svg data-icon="check"></svg>
const ICONS = {
  check:
    '<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>',
  user: '<path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"/>',
  chevron:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" fill="none" stroke="currentColor"/>',
  arrow:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" fill="none" stroke="currentColor"/>',
  play: '<path d="M8 5v14l11-7z" fill="currentColor"/>',
  checkCircle:
    '<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>',
  star: '<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>',
  info: '<path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>',
  email:
    '<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>',
  phone:
    '<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>',
  hamburger:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor"/>',
  close:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" fill="none" stroke="currentColor"/>',
  users:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" fill="none" stroke="currentColor"/>',
  lightning:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" fill="none" stroke="currentColor"/>',
  bulb: '<path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>',
  church:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1v3m-2-1h4M12 4l4 4H8l4-4zM6 22V12h2V8h8v4h2v10H6zm4-10v6m4-6v6" fill="none" stroke="currentColor"/>',
  mountain:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 21L7 9l4 6 5-10 7 16H1z" fill="none" stroke="currentColor"/>',
  world:
    '<circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" stroke-width="2"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" fill="none" stroke="currentColor"/>',
  mind: '<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="8" r="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="8" cy="14" r="2" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="16" cy="14" r="2" fill="none" stroke="currentColor" stroke-width="2"/><path stroke-linecap="round" stroke-width="2" d="M12 10v2M10 13l-1 1m6-1l1 1" fill="none" stroke="currentColor"/>',
  leadership:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2z" fill="none" stroke="currentColor"/>',
  building:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" fill="none" stroke="currentColor"/>',
  quote:
    '<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.459l.995 2.126c-4.432 1.175-7.359 4.536-7.359 8.333V21h-2.619zm-6.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.459l.995 2.126c-4.432 1.175-7.359 4.536-7.359 8.333V21h-2.619z" fill="currentColor"/>',
};

// ViewBox sizes grouped by size
const VIEWBOX = {
  small: "0 0 20 20", // check, user, checkCircle, star, info, email, phone
  large: "0 0 24 24", // all others
};

const SMALL_ICONS = [
  "check",
  "user",
  "checkCircle",
  "star",
  "info",
  "email",
  "phone",
];

function getViewBox(iconName) {
  return SMALL_ICONS.includes(iconName) ? VIEWBOX.small : VIEWBOX.large;
}

function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const iconName = el.dataset.icon;
    if (ICONS[iconName]) {
      el.innerHTML = ICONS[iconName];
      el.setAttribute("viewBox", getViewBox(iconName));
    }
  });
}

// ========================================
// MOBILE MENU
// ========================================

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

function toggleMenu(open) {
  menuBtn.setAttribute("aria-expanded", open);
  mobileMenu.classList.toggle("hidden", !open);
  mobileMenu.classList.toggle("active", open);
  menuIcon.innerHTML = open ? ICONS.close : ICONS.hamburger;
  menuIcon.setAttribute("viewBox", VIEWBOX.large);
}

menuBtn.addEventListener("click", () => {
  toggleMenu(menuBtn.getAttribute("aria-expanded") !== "true");
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
    toggleMenu(false);
  }
});

// ========================================
// INTERSECTION OBSERVER UTILITIES
// ========================================

function createObserver(callback, options = {}) {
  return new IntersectionObserver(callback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
    ...options,
  });
}

function observeElements(selector, callback, options = {}) {
  const observer = createObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        callback(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, options);

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
}

// ========================================
// SCROLL ANIMATIONS
// ========================================

function initScrollAnimations() {
  const selectors = [
    ".animate-on-scroll",
    ".animate-scale",
    ".animate-from-left",
    ".animate-from-right",
    ".journey-card",
    ".experience-card",
    ".testimonial-card",
    ".timeline-item",
    ".principle-item",
  ];

  observeElements(selectors.join(", "), (el) => el.classList.add("visible"), {
    rootMargin: "0px 0px -50px 0px",
  });
}

// ========================================
// PARALLAX EFFECT
// ========================================

function initParallax() {
  const hero = document.querySelector(".hero");
  if (!hero) return;

  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        const scrolled = window.pageYOffset;
        if (scrolled < hero.offsetHeight) {
          hero.style.backgroundPositionY = `calc(50% + ${scrolled * 0.3}px)`;
        }
        ticking = false;
      });
      ticking = true;
    }
  });
}

// ========================================
// COUNTER ANIMATION
// ========================================

function animateCounter(element, target, duration = 2000) {
  const startTime = performance.now();

  function update(currentTime) {
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easeOut = 1 - Math.pow(1 - progress, 3);
    element.textContent = Math.floor(target * easeOut).toLocaleString();

    if (progress < 1) requestAnimationFrame(update);
  }

  requestAnimationFrame(update);
}

function initCounterAnimations() {
  observeElements(
    "[data-counter]",
    (el) => animateCounter(el, parseInt(el.dataset.counter, 10)),
    { threshold: 0.5 },
  );
}

// ========================================
// SECTION REVEALS
// ========================================

function initSectionReveals() {
  const observer = createObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("section-visible");
      });
    },
    { threshold: 0.05 },
  );

  document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("section-animate");
    observer.observe(section);
  });
}

// ========================================
// FAQ ACCORDION
// ========================================

function initFAQ() {
  document.querySelectorAll(".faq-item").forEach((faq) => {
    faq.querySelector(".faq-question")?.addEventListener("click", () => {
      faq.classList.toggle("active");
    });
  });
}

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  injectIcons();
  initScrollAnimations();
  initParallax();
  initCounterAnimations();
  initSectionReveals();
  initFAQ();
});
