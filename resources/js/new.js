document.addEventListener("DOMContentLoaded", () => {
  // ১. Favorite (Save List) Toggle
  document.querySelectorAll(".favorite").forEach(el => {
    el.addEventListener("click", () => el.classList.toggle("active"));
  });

  // ২. Main Display Logic for Slider Cards (Image/Video)
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
      Object.assign(newVideo, {
        controls: true,
        autoplay: true,
        muted: false,
      });
      newVideo.classList.add("fade-out");
      mainDisplay.appendChild(newVideo);
      requestAnimationFrame(() => newVideo.classList.remove("fade-out"));
      mainVideo = newVideo;

      newVideo.onplay = () => updateSliderIcons(card, true);
      newVideo.onpause = () => updateSliderIcons(card, false);
      newVideo.onended = () => updateSliderIcons(card, false);
    }

    document.querySelectorAll(".slider-card").forEach(c => c.classList.remove("active"));
    card.classList.add("active");
    activeCard = card;
  }

  function updateSliderIcons(card, isPlaying) {
    document.querySelectorAll(".slider-card").forEach(slideCard => {
      const icon = slideCard.querySelector(".play-icon i");
      if (icon) {
        icon.className = (slideCard === card && isPlaying)
          ? "bi bi-pause"
          : "bi bi-play-fill";
      }
    });
  }

  // Slider card click & play button handlers
  document.querySelectorAll(".slider-card").forEach(card => {
    const playIcon = card.querySelector(".play-icon");

    card.addEventListener("click", () => updateMainDisplay(card));

    playIcon?.addEventListener("click", e => {
      e.stopPropagation();
      if (card !== activeCard) {
        updateMainDisplay(card);
        setTimeout(() => mainVideo?.play(), 100);
      } else {
        mainVideo?.paused ? mainVideo.play() : mainVideo.pause();
      }
    });
  });

  // ৩. Initialize Swiper
  const swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    slidesPerView: 4,
    spaceBetween: 10,
    loop: true,
    autoplay: { delay: 8000 },
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
      slideChange() {
        const card = this.slides[this.activeIndex]?.querySelector(".slider-card");
        if (card) updateMainDisplay(card);
      },
    },
  });

  // Initial slide content load
  setTimeout(() => {
    const firstCard = document.querySelector(".swiper-slide-active .slider-card");
    if (firstCard) updateMainDisplay(firstCard);
  }, 100);

  // ৪. Pricing Section Toggle - Undo system (double click deselect)
  const toggleParents = document.querySelectorAll("#productToggle, #productToggleModal");

  toggleParents.forEach(parent => {
    const btnCards = parent.querySelectorAll(".btn-card");
    const sections = {
      Livro: parent.querySelector(".for-book"),
      eBook: parent.querySelector(".for-ebook"),
      Audiolivro: parent.querySelector(".for-audiobook"),
      Videolivro: parent.querySelector(".for-videobook"),
    };

    const defaultSection = document.querySelector(".for-default");

    let activeName = null; // Track which one is active

    // Init state
    btnCards.forEach(card => card.classList.remove("active-card"));
    Object.values(sections).forEach(section => {
      if (section) {
        section.style.display = "none";
        section.querySelectorAll(".leya-btn").forEach(btn => btn.classList.remove("activeLeya"));
      }
    });
    if (defaultSection) defaultSection.style.display = "block";

    // Click handlers for btn-cards
    btnCards.forEach(card => {
      card.addEventListener("click", () => {
        const selected = card.querySelector(".name").textContent.trim();

        const isSameClicked = activeName === selected;

        // Remove active from all
        btnCards.forEach(c => c.classList.remove("active-card"));
        Object.values(sections).forEach(section => {
          if (section) {
            section.style.display = "none";
            section.querySelectorAll(".leya-btn").forEach(btn => btn.classList.remove("activeLeya"));
          }
        });

        // Handle undo (double click)
        if (isSameClicked) {
          activeName = null;
          if (defaultSection) defaultSection.style.display = "block";
          return;
        }

        // Otherwise activate new one
        card.classList.add("active-card");
        activeName = selected;

        if (defaultSection) defaultSection.style.display = "none";

        if (sections[selected]) {
          sections[selected].style.display = "block";
          sections[selected].querySelectorAll(".leya-btn").forEach(btn => btn.classList.add("activeLeya"));
        }
      });
    });
  });
});
