// Mobile menu toggle
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");

// SVG paths for icons
const MENU_ICONS = {
  hamburger: "M4 6h16M4 12h16M4 18h16",
  close: "M6 18L18 6M6 6l12 12",
};

function toggleMenu(open) {
  menuBtn.setAttribute("aria-expanded", open);
  mobileMenu.classList.toggle("hidden", !open);
  mobileMenu.classList.toggle("active", open);
  menuIcon.setAttribute("d", open ? MENU_ICONS.close : MENU_ICONS.hamburger);
}

menuBtn.addEventListener("click", () => {
  const isExpanded = menuBtn.getAttribute("aria-expanded") === "true";
  toggleMenu(!isExpanded);
});

// Close menu when clicking a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => toggleMenu(false));
});

// Close menu on escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && menuBtn.getAttribute("aria-expanded") === "true") {
    toggleMenu(false);
  }
});
