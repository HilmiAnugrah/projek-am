const swiperGallery = new Swiper(".swiper-gallery", {
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
    nextEl: ".gallery-next",
    prevEl: ".gallery-prev",
  },
  breakpoints: {
    320: { slidesPerView: 1},
    1300: { slidesPerView: 3},
  },  
});
