function setupSearch(inputId, wrapperId, clearBtnId) {
  const input = document.getElementById(inputId);
  const searchWrapper = document.getElementById(wrapperId);
  const clearBtn = document.getElementById(clearBtnId);

  if (!input || !searchWrapper || !clearBtn) {
    return;
  }

  input.addEventListener("input", () => {
    const hasValue = input.value.trim() !== "";

    if (hasValue) {
      searchWrapper.classList.remove("collapse");
    } else {
      searchWrapper.classList.add("collapse");
    }

    clearBtn.style.display = hasValue ? "block" : "none";
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    clearBtn.style.display = "none";
    searchWrapper.classList.add("collapse");
    input.focus();
  });
}


setupSearch("header-search-input-mobile", "search-wrapper", "clear-btn-mobile");
setupSearch("header-search-input-desktop", "search-wrapper", "clear-btn-desktop");
