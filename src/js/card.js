var swiperCard = new Swiper(".swiper-card", {
  lazy: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
// menu category
function closeMenu() {
  menuPopup.style.transform = "scale(0%)";
  showPopup.style.transform = "translateY(300%)";
  menuPopup.style.transition = "transform 0.3s ease-in-out";
}
// Ambil reference untuk elemen button
const button = document.getElementById("menu-category");
const closes = document.querySelector("button.close");
const buttonCategory = document.getElementById("menu-kategori");
// Ambil reference untuk elemen menu-popup
const menuPopup = document.querySelector("div.menu-popup");
const showPopup = document.getElementById("wrapper-menu-popup");

// Tambahkan event listener untuk button ketika diklik
button.addEventListener("click", () => {
  menuPopup.style.transform = "translateY(0)";
  showPopup.style.transform = "translateY(0)";
  showPopup.classList.add("block");
  showPopup.classList.remove("hidden");
});
buttonCategory.addEventListener("click", () => {
  menuPopup.style.transform = "translateY(0)";
  showPopup.style.transform = "translateY(0)";
  showPopup.classList.add("block");
  showPopup.classList.remove("hidden");
});

closes.addEventListener("click", () => {
  menuPopup.style.transform = "scale(0%)";
  showPopup.style.transform = "translateY(300%)";
  menuPopup.style.transition = "transform 0.3s ease-in-out";
});

showPopup.addEventListener("click", (event) => {
  if (event.target === showPopup) {
    closeMenu();
  }
});
