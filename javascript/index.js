document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.getElementById("menu-icon");
  const navLinks = document.getElementById("nav-links");

  menuIcon.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("show");
    menuIcon.textContent = isOpen ? "✖" : "☰";
  });

  const scrollTopBtn = document.querySelector('.scroll-top');

  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
  });

  scrollTopBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Set current year
  const currentYear = new Date().getFullYear();
  document.getElementById('copyright').innerHTML =
    `&copy; ${currentYear} Blue Pavilion Optimum Prospect LTD. All rights reserved.`;
});
