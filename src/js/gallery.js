const swiperGallery = new Swiper(".swiper-gallery", {
  lazy: true,
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: "auto",
  initialSlide: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 425,
    depth: 250,
    modifier: 2,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1 },
  },
});
