
    document.addEventListener('DOMContentLoaded', function () {
        const accordionPanels = document.querySelectorAll('.accordion-collapse');

        function isMobile() {
            return window.innerWidth <= 767;
        }

        function updateAccordionState() {
            accordionPanels.forEach(panel => {
                const button = document.querySelector(`[data-bs-target="#${panel.id}"]`);
                if (!button) return;

                if (isMobile()) {
                    panel.classList.remove('show');
                    button.classList.add('collapsed'); // Ensure arrow points down
                    button.setAttribute('aria-expanded', 'false');
                } else {
                    panel.classList.add('show');
                    button.classList.remove('collapsed'); // Ensure arrow points up
                    button.setAttribute('aria-expanded', 'true');
                }
            });
        }

        // Initial
        updateAccordionState();

        // On resize
        window.addEventListener('resize', updateAccordionState);
    });

