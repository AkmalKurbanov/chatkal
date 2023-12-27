import Swiper from "swiper/bundle";

var swiper = new Swiper(".pride-js ", {
  slidesPerView: 4,

  navigation: {
    nextEl: ".pride-next",
    prevEl: ".pride-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    576: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 35,
    }
  },
});

var swiper = new Swiper(".vote-js ", {
  slidesPerView: 3,

  navigation: {
    nextEl: ".vote-next",
    prevEl: ".vote-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },

});