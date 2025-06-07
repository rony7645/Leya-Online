import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Default Swiper configuration
const defaultSwiperConfig = {
  modules: [Navigation, Pagination, Autoplay],
  speed: 500,
  loop: true,
  allowTouchMove: true,
  freeMode: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
  },
  pagination: {
    clickable: true,
    type: "bullets",
  },
};

// Banner swiper (no pagination needed)
const bannerSwiper = new Swiper(".banner-swiper", {
  modules: [Navigation, Autoplay], // Pagination excluded for banner
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".banner-swiper .swiper-button-next",
    prevEl: ".banner-swiper .swiper-button-prev",
  },
  slidesPerView: 1,
  spaceBetween: 20,
});

// Config for each individual slider
const configMap = {
  "categories-swiper": {
    spaceBetween: 10,
    breakpoints: {
      0: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
    },
  },
  "products-swiper": {
    spaceBetween: 5,
    breakpoints: {
      0: { slidesPerView: 2.5 },
      768: { slidesPerView: 3.5 },
      992: { slidesPerView: 5 },
      1200: { slidesPerView: 6 },
    },
  },
  "banner-swiper": {
    autoplay: { delay: 5000 },
    spaceBetween: 20,
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
    },
  },
  "product-overview-swiper": {
    spaceBetween: 10,
    breakpoints: {
      0: { slidesPerView: 1 },
      768: { slidesPerView: 1 },
      992: { slidesPerView: 1 },
    },
  },
  "shop-bestsellers-swiper": {
    spaceBetween: 10,
    breakpoints: {
      0: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  },
  "shop-discount-swiper": {
    spaceBetween: 10,
    breakpoints: {
      0: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  },
  "shop-2product-swiper": {
    spaceBetween: 10,
    breakpoints: {
      0: { slidesPerView: 2 },
      768: { slidesPerView: 2 },
      992: { slidesPerView: 2 },
    },
  },
  
};

// Initialize Swiper for all sliders
document.querySelectorAll(".slider-wrapper").forEach((sliderWrapper) => {
  const swiperContainer = sliderWrapper.closest(".swiper");
  if (!swiperContainer) return; // Exit if container not found

  const next = swiperContainer.querySelector(".swiper-button-next");
  const prev = swiperContainer.querySelector(".swiper-button-prev");
  const pagination = swiperContainer.querySelector(".swiper-pagination");

  // Get config based on class name
  let customConfig = {};
  Object.keys(configMap).forEach((key) => {
    if (sliderWrapper.classList.contains(key)) {
      customConfig = configMap[key];
    }
  });

  new Swiper(sliderWrapper, {
    ...defaultSwiperConfig,
    ...customConfig,
    navigation: {
      nextEl: next,
      prevEl: prev,
    },
    pagination: {
      ...defaultSwiperConfig.pagination,
      el: pagination,
    },
  });
});
