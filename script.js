/**
 * Climb4Dreams Landing Page Scripts
 *
 * Features:
 * - SVG icon injection system (avoids inline SVG repetition)
 * - Mobile menu toggle with accessibility support
 *
 * Dependencies: None (vanilla JS)
 */

// ========================================
// SVG ICON SYSTEM
// Centralized icon definitions for DRY code
// ========================================

/*
 * Icon path definitions
 * Each icon has a path and viewBox size
 * Usage: <svg data-icon="check"></svg>
 */
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
  building:
    '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" fill="none" stroke="currentColor"/>',
  quote:
    '<path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.459l.995 2.126c-4.432 1.175-7.359 4.536-7.359 8.333V21h-2.619zm-6.017 0v-7.391c0-5.704 3.731-9.57 8.983-10.459l.995 2.126c-4.432 1.175-7.359 4.536-7.359 8.333V21h-2.619z" fill="currentColor"/>',
};

// Viewbox sizes for each icon (determines SVG coordinate system)
const VIEWBOX = {
  check: "0 0 20 20",
  user: "0 0 20 20",
  chevron: "0 0 24 24",
  arrow: "0 0 24 24",
  play: "0 0 24 24",
  checkCircle: "0 0 20 20",
  star: "0 0 20 20",
  info: "0 0 20 20",
  email: "0 0 20 20",
  phone: "0 0 20 20",
  hamburger: "0 0 24 24",
  close: "0 0 24 24",
  users: "0 0 24 24",
  lightning: "0 0 24 24",
  building: "0 0 24 24",
  quote: "0 0 24 24",
};

/**
 * Inject SVG icons into placeholders
 * Finds all [data-icon] elements and replaces with SVG content
 * Supports custom fill/stroke via data attributes
 */
function injectIcons() {
  document.querySelectorAll("[data-icon]").forEach((el) => {
    const iconName = el.dataset.icon;
    if (ICONS[iconName]) {
      const fill = el.dataset.fill || "currentColor";
      const stroke = el.dataset.stroke || "currentColor";
      el.innerHTML = ICONS[iconName];
      el.setAttribute("viewBox", VIEWBOX[iconName]);
      if (fill !== "currentColor") el.setAttribute("fill", fill);
      if (stroke !== "currentColor") el.setAttribute("stroke", stroke);
    }
  });
}

// ========================================
// MOBILE MENU
// Toggle with accessibility support (ARIA, keyboard)
// ========================================

// DOM references for mobile menu
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

/**
 * Toggle mobile menu open/closed
 * Updates ARIA attributes and swaps hamburger/close icon
 * @param {boolean} open - Whether to open the menu
 */
function toggleMenu(open) {
  menuBtn.setAttribute("aria-expanded", open);
  mobileMenu.classList.toggle("hidden", !open);
  mobileMenu.classList.toggle("active", open);
  menuIcon.innerHTML = open ? ICONS.close : ICONS.hamburger;
  menuIcon.setAttribute("viewBox", "0 0 24 24");
}

// Click handler: toggle menu state
menuBtn.addEventListener("click", () => {
  const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
  toggleMenu(!isExpanded);
});

// Close menu when clicking navigation links
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

// Keyboard accessibility: close on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
    toggleMenu(false);
  }
});

// ========================================
// INITIALIZATION
// Run on DOM ready
// ========================================
document.addEventListener("DOMContentLoaded", injectIcons);
