// ===== Preloader =====
window.addEventListener("load", function() {
  document.getElementById("preloader").style.display = "none";
});

// ===== Testimonials Slider =====
const testimonials = document.querySelectorAll(".testimonial");
let index = 0;

function showTestimonial(i) {
  testimonials.forEach((t) => t.classList.remove("active"));
  testimonials[i].classList.add("active");
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

setInterval(nextTestimonial, 4000);

// ===== Theme Toggle =====
const toggleTheme = document.querySelector(".toggle-theme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if(document.body.classList.contains("dark-theme")){
    document.body.style.background = "#222";
    document.body.style.color = "#fff";
  } else {
    document.body.style.background = "#f5f6fa";
    document.body.style.color = "#333";
  }
});