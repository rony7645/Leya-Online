import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const swiper = new Swiper(".banner-swiper", {
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 20,
  speed: 500,
  loop: true,
});

const productOverviewSwiper = new Swiper(".product-overview-swiper", {
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    992: {
      slidesPerView: 1,
    },
  },
  spaceBetween: 20,
  speed: 500,
  loop: true,
});

const categoriesSwiper = new Swiper(".categories-swiper", {
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    992: {
      slidesPerView: 5,
    },
  },
  spaceBetween: 20,
  speed: 500,
  loop: true,
});

const producstCarousel = new Swiper(".products-swiper", {
  modules: [Navigation, Autoplay],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  breakpoints: {
    0: {
      slidesPerView: 2.5,
    },
    768: {
      slidesPerView: 3.5,
    },
    992: {
      slidesPerView: 6,
    },
  },
  spaceBetween: 5,
  speed: 500,
  loop: true,
});