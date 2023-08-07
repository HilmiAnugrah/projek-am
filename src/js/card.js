var swiperCard = new Swiper(".swiper-card", {
  lazy: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: false,
  },
  initialSlide: 1,
  on: {
    init: function () {
      this.slides[1].classList.add("swiper-slide-active");
    },
  },
});

// menu category
function closeMenu() {
  menuPopup.style.transform = "scale(0%)";
  showPopup.style.transform = "translateY(100%)";
  menuPopup.style.transition = "transform 0.3s ease-in-out";
}
// Ambil reference untuk elemen button
const button = document.getElementById("menu-category");
const closes = document.querySelector("button.close");
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


closes.addEventListener("click", () => {
  menuPopup.style.transform = "scale(0%)";
  showPopup.style.transform = "translateY(100%)";
  menuPopup.style.transition = "transform 0.3s ease-in-out";
});

showPopup.addEventListener("click", ()=>{
  if (event.target === showPopup) {
    closeMenu();
  }
});
