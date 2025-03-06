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
function bioHeader()
{
    const header = document.querySelector("#bio-header");
    if(window.innerWidth <= 730)
    {
        header.textContent = "Michael Shoaf Countertenor"
    } else {
        header.textContent = "Michael Shoaf | Countertenor"
    }
}

bioHeader();
window.addEventListener("resize", bioHeader);