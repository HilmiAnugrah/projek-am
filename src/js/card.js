
const splide = new Splide(".splide", {
    // type: "loop",
    perPage: 3,
    perMove: 1,
    focus: 'center',
    trimSpace: false,
    rewind: true,
    gap: 10,
    slideFocus: true,
    easing: "cubic-bezier(1,0,1,1)",
    speed: 500,
    breakpoints: {
      768: { perPage: 1.2, focus: 'center',  trimSpace:true, speed:500, gap:10, lazyload:'squential'},
      425: { perPage: 1.2, focus: 'center',  trimSpace:true, speed:500, gap:10, lazyload:'squential'  },
      375: {  perPage: 1.2, focus: 'center',  trimSpace:true, speed:500, gap:10, lazyload:'squential'},
      320: {  perPage: 1.2, focus: 'center',  trimSpace:true, speed:500, gap:10, lazyload:'squential'},
    },
  }).mount();

if(focus=="center"){

}
 