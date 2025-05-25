import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Default configuration for Swiper
const defaultSwiperConfig = {
  modules: [Navigation, Pagination, Autoplay],
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
  autoplay: { delay: 5000 },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
  },
});

// Product swiper 1
initializeSwiper(".products-swiper", {
  navigation: {
    nextEl: ".product-swiper-next-1",
    prevEl: ".product-swiper-prev-1",
  },
  pagination: {
    el: ".product-swiper-pagination-1",
    clickable: true,
    type: "bullets",
  },
  spaceBetween: 5,
  breakpoints: {
    0: { slidesPerView: 2.5 },
    768: { slidesPerView: 3.5 },
    992: { slidesPerView: 6 },
  },
});

initializeSwiper(".product-overview-swiper", {
  navigation: {
    nextEl: ".product-overview-swiper-next-1",
    prevEl: ".product-overview-swiper-prev-1",
  },
  pagination: {
    el: ".product-overview-swiper-pagination-1",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 1 },
    992: { slidesPerView: 1 },
  },
});

initializeSwiper(".categories-swiper", {
  navigation: {
    nextEl: ".categories-swiper-next-1",
    prevEl: ".categories-swiper-prev-1",
  },
  pagination: {
    el: ".categories-swiper-pagination-1",
    clickable: true,
    type: "bullets",
  },
  breakpoints: {
    0: { slidesPerView: 3 },
    768: { slidesPerView: 4 },
    992: { slidesPerView: 5 },
  },
});
