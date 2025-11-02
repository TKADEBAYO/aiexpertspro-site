// ======================================================
// AIExpertsPro — Main Script (Enhanced)
// ======================================================

// ----------------------------
// Dynamic Year
// ----------------------------
const yearSpan = document.getElementById("year");
if (yearSpan) yearSpan.textContent = new Date().getFullYear();

// ----------------------------
// Mobile Navigation Toggle
// ----------------------------
const mobileMenuBtn = document.getElementById("menu-btn");
const mobileNav = document.getElementById("mobile-nav");

if (mobileMenuBtn && mobileNav) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("hidden");
  });
}

// ----------------------------
// Navbar Scroll Effect
// ----------------------------
window.addEventListener("scroll", () => {
  const header = document.getElementById("mainHeader");
  if (!header) return;

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// ----------------------------
// Active Link Highlight
// ----------------------------
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  if (link.href === window.location.href) link.classList.add("active");

  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// ----------------------------
// Smooth Scroll for Anchor Links
// ----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", e => {
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ----------------------------
// Scroll To Top Button
// ----------------------------
const scrollBtn = document.createElement("button");
scrollBtn.id = "scrollTopBtn";
scrollBtn.innerHTML = "↑";
scrollBtn.title = "Back to top";
scrollBtn.className =
  "fixed bottom-5 right-5 hidden bg-blue-600 text-white rounded-full w-10 h-10 shadow-soft hover:bg-blue-700 transition";
document.body.appendChild(scrollBtn);

window.addEventListener("scroll", () => {
  scrollBtn.classList.toggle("hidden", window.scrollY < 250);
});

scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// ----------------------------
// Fade-In Animation on Scroll
// ----------------------------
// Any element with class "animate-fadeIn" will fade in when visible
const observerOptions = {
  threshold: 0.15, // when 15% visible
  rootMargin: "0px 0px -50px 0px",
};

const fadeInObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fadeInVisible");
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Attach fade-in observer to all sections and key blocks
document.querySelectorAll("section, .card, .animate-fadeIn").forEach(el => {
  el.classList.add("animate-fadeIn"); // ensures class is present
  fadeInObserver.observe(el);
});

// ----------------------------
// Simple Toast Notification (Form Submit)
// ----------------------------
document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", e => {
    e.preventDefault();
    const toast = document.createElement("div");
    toast.textContent = "✅ Message sent successfully!";
    toast.className =
      "fixed bottom-8 right-8 bg-green-600 text-white px-4 py-2 rounded-lg shadow-soft animate-fadeIn";
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  });
});

// ----------------------------
// Auto Scroll to Footer if '#footer' in URL
// ----------------------------
if (window.location.hash === "#footer") {
  const footer = document.querySelector("footer");
  if (footer) {
    footer.scrollIntoView({ behavior: "smooth" });
  }
}
