// temples.js

// ====== Footer dynamic info ======
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// ====== Hamburger Menu ======
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  
  // Toggle button icon: ☰ (menu) ↔ ✖ (close)
  if (navMenu.classList.contains("show")) {
    hamburger.textContent = "✖";
  } else {
    hamburger.textContent = "☰";
  }
});
