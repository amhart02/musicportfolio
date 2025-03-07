import { boundless, nuova, headshot } from "./images.js";

//menu functionality
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

//resize handling
// function bioHeader()
// {
//     const header = document.querySelector("#bio-header");
//     if(window.innerWidth <= 730)
//     {
//         header.textContent = "Michael Shoaf Countertenor"
//     } else {
//         header.textContent = "Michael Shoaf | Countertenor"
//     }
// }

function initBoundless() {
  const boundlessContainer = document.querySelector(".boundless");
  boundlessContainer.innerHTML = boundless.map(src => photoTemplateBoundless(src)).join('');
};

function initHeadshot() {
  const headshotContainer = document.querySelector(".headshot");
  headshotContainer.innerHTML = headshot.map(src => photoTemplateHeadshot(src)).join('');
};

function initNuova() {
  const nuovaContainer = document.querySelector(".nuova");
  nuovaContainer.innerHTML = nuova.map(src => photoTemplateNuova(src)).join('');
};

function photoTemplateBoundless(src) {
  return `
  <div class="gallery-item">
    <img src="${src}" alt="Boundless Broadway Concert Performance Picture" />
  </div>
  `;
}

function photoTemplateHeadshot(src) {
  return `
  <div class="gallery-item">
    <img src="${src}" alt="Michael Shoaf Headshot" />
  </div>
  `;
}

function photoTemplateNuova(src) {
  return `
  <div class="gallery-item">
    <img src="${src}" alt="NUOVA-Flight Performance Picture" />
  </div>
  `;
}

// bioHeader();
initBoundless();
initNuova();
initHeadshot();
window.addEventListener("resize", bioHeader);
