document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
  
    window.addEventListener("scroll", closeMenu);
    menuToggle.addEventListener("click", menuToggleFunction);

  function menuToggleFunction () {
    menuToggle.classList.toggle("active");
    navMenu.style.display === "block" ? "none" : "block";
  }

  function closeMenu () {
    menuToggle.classList.remove("active");
  }
})