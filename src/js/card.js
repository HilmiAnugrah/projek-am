var swiper = new Swiper(".mySwiper", {
  lazy: true,
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop:false,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 250,
    modifier: 1,
    slideShadows: false,
  },
  initialSlide: 1,
  pagination: {
    el: ".swiper-pagination",
  },
  on: {
    init: function () {
      this.slides[1].classList.add("swiper-slide-active");
    },
  },
});

