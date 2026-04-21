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
  play: '<path d="M8 5v14l11-7z" fill="currentColor"/>',
  email:
    '<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>',
  phone:
    '<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>',
  close:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" fill="none" stroke="currentColor"/>',
  users:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" fill="none" stroke="currentColor"/>',
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
  format_quote:
    '<path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.375 1.807 0 3.162 1.247 3.162 3.281 0 1.968-1.371 3.58-3.379 3.58-1.076 0-2.091-.504-2.815-1.387zm11.014 0C14.567 16.227 14 15 14 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.375 1.807 0 3.162 1.247 3.162 3.281 0 1.968-1.371 3.58-3.379 3.58-1.076 0-2.091-.504-2.815-1.387z" fill="currentColor"/>',
};

// ViewBox sizes - small icons use 20x20, others use 24x24
const SMALL_ICONS = ["check", "user", "email", "phone"];

function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const iconName = el.dataset.icon;
    if (ICONS[iconName]) {
      el.innerHTML = ICONS[iconName];
      el.setAttribute(
        "viewBox",
        SMALL_ICONS.includes(iconName) ? "0 0 20 20" : "0 0 24 24",
      );
    }
  });
}

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
// VIDEO MODAL
// ========================================

const VIDEO_URL =
  "https://www.youtube.com/embed/GiDPiKOGUN8?si=OSZhiQRziMV17H4H&autoplay=1";

const videoBtn = document.getElementById("videoBtn");
const videoModal = document.getElementById("videoModal");
const videoModalBackdrop = document.getElementById("videoModalBackdrop");
const videoModalClose = document.getElementById("videoModalClose");
const videoFrame = document.getElementById("videoFrame");
const videoPoster = document.getElementById("videoPoster");

function openVideoModal() {
  videoModal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeVideoModal() {
  videoModal.classList.remove("active");
  document.body.style.overflow = "";
  // Reset to poster state
  setTimeout(() => {
    videoFrame.src = "";
    videoFrame.classList.remove("loaded");
    if (videoPoster) videoPoster.classList.remove("hidden");
  }, 300);
}

function playVideo() {
  if (videoPoster) videoPoster.classList.add("hidden");
  videoFrame.src = VIDEO_URL;
  videoFrame.addEventListener(
    "load",
    function onLoad() {
      videoFrame.classList.add("loaded");
      videoFrame.removeEventListener("load", onLoad);
    },
    { once: true },
  );
}

if (videoBtn) {
  videoBtn.addEventListener("click", openVideoModal);
}

if (videoPoster) {
  videoPoster.addEventListener("click", playVideo);
}

if (videoModalBackdrop) {
  videoModalBackdrop.addEventListener("click", closeVideoModal);
}

if (videoModalClose) {
  videoModalClose.addEventListener("click", closeVideoModal);
}

document.addEventListener("keydown", (e) => {
  if (
    e.key === "Escape" &&
    videoModal &&
    videoModal.classList.contains("active")
  ) {
    closeVideoModal();
  }
});

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  injectIcons();
  initScrollAnimations();
  initParallax();
  initSectionReveals();
});
