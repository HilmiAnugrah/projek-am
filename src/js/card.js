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
