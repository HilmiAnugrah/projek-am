// Navbar fixed
const nav = document.getElementById("nav-wrapper");
const programPilihan = document.getElementById("program-pilihan");
const berita = document.getElementById("berita");
window.onscroll = () => {
  const fixedNav = nav.offsetTop;
  if (window.pageYOffset > fixedNav ) {
    nav.classList.add("navbar-fixed");
  } else {
    nav.classList.remove("navbar-fixed");
  }
};

// Hamburger-menu
const hamburger = document.getElementById("hamburger-menu");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  document.body.classList.toggle("overflow-hidden");
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
  navMenu.classList.toggle("nav-menu-active");
  nav.classList.toggle("navbar-fixed-bg");
});

// swiper card-berita
var swiperBerita = new Swiper(".swiper-berita", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "swiper-button-disabled",
  },
});

