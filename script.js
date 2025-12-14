// ===== Preloader =====
window.addEventListener("load", () => {
  document.getElementById("preloader").style.display = "none";
});

// ===== Mobile Menu =====
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// ===== Testimonials Slider =====
let tIndex = 0;
const testimonials = document.querySelectorAll(".testimonial");

setInterval(() => {
  testimonials.forEach((t) => t.classList.remove("active"));
  tIndex = (tIndex + 1) % testimonials.length;
  testimonials[tIndex].classList.add("active");
}, 3500);

// ===== Modal Projects =====
function openProject(el) {
  const title = el.innerText;
  const project = el.dataset.project;

  const modal = document.getElementById("projectModal");
  document.getElementById("modalTitle").innerText = title;

  let content = "";

  if (project === "excel-cleanup")
    content = "<p>Excel formatting, cleanup, duplicate removal, formulas setup, automation, dashboard design etc.</p>";

  if (project === "data-collection")
    content = "<p>Web research, structured data mining, company information collection, scraping supported tasks.</p>";

  if (project === "spreadsheet-automation")
    content = "<p>Advanced formulas, VBA-based automation, smart spreadsheet systems.</p>";

  if (project === "crm-data-entry")
    content = "<p>CRM input, cleanup, tagging, contact updates, pipeline optimization.</p>";

  if (project === "email-list")
    content = "<p>Verified business email creation, B2B leads collection, niche-based targeted lists.</p>";

  if (project === "online-research")
    content = "<p>Market research, competitor analysis, report generation and summary preparation.</p>";

  document.getElementById("modalBody").innerHTML = content;

  modal.style.display = "flex";
}

// Close Modal
document.getElementById("modalClose").onclick = () =>
  (document.getElementById("projectModal").style.display = "none");

window.onclick = (e) => {
  const modal = document.getElementById("projectModal");
  if (e.target === modal) modal.style.display = "none";
};

// ===== Theme Toggle =====
document.getElementById("toggleTheme").addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
