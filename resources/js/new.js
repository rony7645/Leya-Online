// Toggling For Savelist in the product

const saveList = document.querySelectorAll(".favorite");

saveList.forEach((e) => {
  e.addEventListener("click", () => {
    e.classList.toggle("active");
  });
});

// Vertical Card source in right Side Main Sorce

document.addEventListener("DOMContentLoaded", () => {
  const mainDisplay = document.getElementById("mainDisplay");

  let activeCard = null;
  let mainVideo = null;

  function updateMainDisplay(card) {
    const image = card.querySelector("img");
    const video = card.querySelector("video");

    mainDisplay.innerHTML = "";

    if (image) {
      const newImg = image.cloneNode(true);
      newImg.classList.add("fade-out");
      mainDisplay.appendChild(newImg);
      requestAnimationFrame(() => newImg.classList.remove("fade-out"));
      mainVideo = null;
      updateSliderIcons(null, false);
    }

    if (video) {
      const newVideo = video.cloneNode(true);
      newVideo.controls = true;
      newVideo.autoplay = true;
      newVideo.muted = false;
      newVideo.classList.add("fade-out");
      mainDisplay.appendChild(newVideo);
      requestAnimationFrame(() => newVideo.classList.remove("fade-out"));
      mainVideo = newVideo;

      newVideo.onplay = () => updateSliderIcons(card, true);
      newVideo.onpause = () => updateSliderIcons(card, false);
      newVideo.onended = () => updateSliderIcons(card, false);
    }

    // Update active class visually
    document
      .querySelectorAll(".slider-card")
      .forEach((c) => c.classList.remove("active"));
    card.classList.add("active");
    activeCard = card;
  }

  function updateSliderIcons(activeCard, isPlaying) {
    document.querySelectorAll(".slider-card").forEach((card) => {
      const icon = card.querySelector(".play-icon i");
      if (!icon) return;
      icon.className =
        card === activeCard && isPlaying ? "bi bi-pause" : "bi bi-play-fill";
    });
  }

  // Setup manual click handlers for slider cards and play icons
  document.querySelectorAll(".slider-card").forEach((card) => {
    const playIcon = card.querySelector(".play-icon");

    card.addEventListener("click", () => {
      updateMainDisplay(card);
    });

    if (playIcon) {
      playIcon.addEventListener("click", (e) => {
        e.stopPropagation();
        if (card !== activeCard) {
          updateMainDisplay(card);
          setTimeout(() => {
            if (mainVideo) mainVideo.play();
          }, 100);
        } else {
          if (mainVideo?.paused) {
            mainVideo.play();
          } else {
            mainVideo.pause();
          }
        }
      });
    }
  });

  // Initialize Swiper
  const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: {
      delay: 8000,
    },
    navigation: {
      nextEl: ".arrow-down",
      prevEl: ".arrow-up",
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
        direction: "horizontal",
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 10,
        direction: "vertical",
      },
    },
    on: {
      slideChange: function () {
        const activeSlide = this.slides[this.activeIndex];
        const card = activeSlide.querySelector(".slider-card");
        if (card) updateMainDisplay(card);
      },
    },
  });

  // Initial load: show first slide's content
  setTimeout(() => {
    const firstCard = document.querySelector(
      ".swiper-slide-active .slider-card"
    );
    if (firstCard) updateMainDisplay(firstCard);
  }, 100);
});

// Pricing Slider Funtionality For details Toggling
document.addEventListener("DOMContentLoaded", () => {
  const toggleParents = document.querySelectorAll(
    "#productToggle, #productToggleModal"
  );

  toggleParents.forEach((parent) => {
    const btnCards = parent.querySelectorAll(".btn-card");
    const detailSections = {
      Livro: parent.querySelector(".for-book"),
      eBook: parent.querySelector(".for-ebook"),
      Audiolivro: parent.querySelector(".for-audiobook"),
      Videolivro: parent.querySelector(".for-videobook"),
    };

    // Hide all details initially
    Object.values(detailSections).forEach((section) => {
      if (section) section.style.display = "none";
    });

    // Show the default (active) one
    const activeCard = parent.querySelector(".btn-card.active-card");
    if (activeCard) {
      const activeName = activeCard.querySelector(".name").textContent.trim();
      if (detailSections[activeName]) {
        detailSections[activeName].style.display = "block";
        // Add activeLeya class to .leya-btns inside that section
        const leyaBtns =
          detailSections[activeName].querySelectorAll(".leya-btn");
        leyaBtns.forEach((btn) => btn.classList.add("activeLeya"));
      }
    }

    // Click handler
    btnCards.forEach((card) => {
      card.addEventListener("click", () => {
        // Toggle .active-card
        btnCards.forEach((c) => c.classList.remove("active-card"));
        card.classList.add("active-card");

        const selected = card.querySelector(".name").textContent.trim();

        // Hide all detail sections and remove .activeLeya from all .leya-btn
        Object.values(detailSections).forEach((section) => {
          if (section) {
            section.style.display = "none";
            const leyaBtns = section.querySelectorAll(".leya-btn");
            leyaBtns.forEach((btn) => btn.classList.remove("activeLeya"));
          }
        });

        // Show selected section and add .activeLeya to its .leya-btns
        if (detailSections[selected]) {
          detailSections[selected].style.display = "block";
          const leyaBtns =
            detailSections[selected].querySelectorAll(".leya-btn");
          leyaBtns.forEach((btn) => btn.classList.add("activeLeya"));
        }
      });
    });
  });
});

// Product Header Tile Making top the section

document.addEventListener("DOMContentLoaded", () => {
  const productTitle = document.getElementById("productTitle");
  const desktopWrapper = document.getElementById("desktopTitleWrapper");
  const mobileWrapper = document.getElementById("mobileTitleWrapper");

  function moveTitleBasedOnScreen() {
    if (window.innerWidth < 768) {
      // Move to mobile wrapper
      if (!mobileWrapper.contains(productTitle)) {
        mobileWrapper.appendChild(productTitle);
      }
    } else {
      // Move back to desktop wrapper
      if (!desktopWrapper.contains(productTitle)) {
        desktopWrapper.appendChild(productTitle);
      }
    }
  }

  // Initial check
  moveTitleBasedOnScreen();

  // Recheck on resize
  window.addEventListener("resize", moveTitleBasedOnScreen);
});

// Ribon Wrapper Initialize for Mobile inside the slider For Mobile

document.addEventListener("DOMContentLoaded", () => {
  const ribon = document.getElementById("ribonWrapper");
  const verticalSlider = document.getElementById("verticalSlider");
  const originalWrapper = document.getElementById("ribonOriginalWrapper");

  function moveRibon() {
    if (window.innerWidth < 768) {
      // Move to inside vertical slider
      if (!verticalSlider.contains(ribon)) {
        verticalSlider.insertBefore(ribon, verticalSlider.firstChild);
      }
    } else {
      // Move back to original wrapper
      if (!originalWrapper.contains(ribon)) {
        originalWrapper.appendChild(ribon);
      }
    }
  }

  moveRibon(); // Initial check
  window.addEventListener("resize", moveRibon); // Watch for screen changes
});
