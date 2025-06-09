document.addEventListener("DOMContentLoaded", function () {
  const accordionPanels = document.querySelectorAll(".accordion-collapse");

  function isMobile() {
    return window.innerWidth <= 767;
  }

  function updateAccordionState() {
    const panelToKeepOpen = "mainCollapse"; // specifq item open for only mobile

    accordionPanels.forEach((panel) => {
      const button = document.querySelector(`[data-bs-target="#${panel.id}"]`);
      if (!button) return;

      if (isMobile()) {
        if (panel.id === panelToKeepOpen) {
          panel.classList.add("show");
          button.classList.remove("collapsed");
          button.setAttribute("aria-expanded", "true");
        } else {
          panel.classList.remove("show");
          button.classList.add("collapsed");
          button.setAttribute("aria-expanded", "false");
        }
      } else {
        // Desktop: all acrodion will open
        panel.classList.add("show");
        button.classList.remove("collapsed");
        button.setAttribute("aria-expanded", "true");
      }
    });
  }

  // Initial state update
  updateAccordionState();

  // Update on window resize
  window.addEventListener("resize", updateAccordionState);
});
