import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Default configuration for Swiper
const defaultSwiperConfig = {
  modules: [Navigation,Pagination, Autoplay],
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  speed: 500,
  loop: true,
  allowTouchMove: true,
  freeMode: true,
};

// Function to initialize a Swiper instance
const initializeSwiper = (selector, customConfig = {}) => {
  return new Swiper(selector, {
    ...defaultSwiperConfig,
    ...customConfig,
  });
};

// Initialize Swiper instances
initializeSwiper(".banner-swiper", {
  modules: [Navigation, Pagination, Autoplay],
  autoplay: { delay: 5000 },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
  },
});

initializeSwiper(".product-overview-swiper", {
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
  },
});

initializeSwiper(".categories-swiper", {
  breakpoints: {
    0: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 },
  },
});

initializeSwiper(".products-swiper", {
  spaceBetween: 5,
  breakpoints: {
    0: { slidesPerView: 2.5 },
    768: { slidesPerView: 3.5 },
    992: { slidesPerView: 6 },
  },
});
