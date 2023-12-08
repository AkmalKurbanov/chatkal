import Swiper from "swiper/bundle";

var swiper = new Swiper(".pride-js ", {
  slidesPerView: 4,
  spaceBetween: 35,
  navigation: {
    nextEl: ".pride-next",
    prevEl: ".pride-prev",
  },
});

var swiper = new Swiper(".vote-js ", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".vote-next",
    prevEl: ".vote-prev",
  },
});