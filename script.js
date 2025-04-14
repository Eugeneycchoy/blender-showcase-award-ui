// When .mid-text is hovered
// .mid-dark-overlay will start fading out by adding the class .fade-away

// Function to add hover event listeners
function addHoverEffect(textSelector, overlaySelector) {
  const textElement = document.querySelector(textSelector);
  const overlayElement = document.querySelector(overlaySelector);

  if (textElement && overlayElement) {
    textElement.addEventListener("mouseover", () => {
      overlayElement.classList.add("fade-away");
    });

    textElement.addEventListener("mouseout", () => {
      overlayElement.classList.remove("fade-away");
    });
  }
}

// Add hover effects for all pairs
addHoverEffect(
  "#award_ui > div.award_ui_mid_pics > div > div.award_ui_mid_pics_left > div.mid-text",
  "#award_ui > div.award_ui_mid_pics > div > div.award_ui_mid_pics_left > div.mid-dark-overlay"
);

addHoverEffect(
  "#award_ui > div.award_ui_mid_pics > div > div.award_ui_mid_pics_right > div.award_ui_mid_pics_right_top > div.mid-text",
  "#award_ui > div.award_ui_mid_pics > div > div.award_ui_mid_pics_right > div.award_ui_mid_pics_right_top > div.mid-dark-overlay"
);

addHoverEffect(
  "#award_ui > div.award_ui_mid_pics > div > div.award_ui_mid_pics_right > div.award_ui_mid_pics_right_bottom > div.mid-text",
  "#award_ui > div.award_ui_mid_pics > div > div.award_ui_mid_pics_right > div.award_ui_mid_pics_right_bottom > div.mid-dark-overlay"
);

// DOM
// Modal - 1
const modal_1 = document.querySelector(
  "#award_ui > div.award_ui_top_pics > div:nth-child(1)"
);

// Modal - 2
const modal_2 = document.querySelector(
  "#award_ui > div.award_ui_top_pics > div:nth-child(2)"
);

// Modal - 3
const modal_3 = document.querySelector(
  "#award_ui > div.award_ui_top_pics > div:nth-child(3)"
);

modal_1.addEventListener("click", () => {
  showModal(1);
});

modal_2.addEventListener("click", () => {
  showModal(2);
});

modal_3.addEventListener("click", () => {
  showModal(3);
});

function showModal(modal) {
  // darken the background
  const blackOverlay = document.querySelector(".body-dark-overlay");
  blackOverlay.classList.add("visible-overlay");

  // show modal
  if (modal === 1) {
    const modal1 = document.querySelector(".modal-1");
    modal1.classList.add("visible");
  } else if (modal === 2) {
    const modal2 = document.querySelector(".modal-2");
    modal2.classList.add("visible");
  } else if (modal === 3) {
    const modal3 = document.querySelector(".modal-3");
    modal3.classList.add("visible");
  }
}

const bodyDarkOverlay = document.querySelector(".body-dark-overlay");
const exitModalBtns = document.querySelectorAll(".popup-modal-exit");
bodyDarkOverlay.addEventListener("click", closeModal);

for (let exitModalBtn of exitModalBtns) {
  exitModalBtn.addEventListener("click", closeModal);
}

function closeModal() {
  // remove the black overlay
  const blackOverlay = document.querySelector(".body-dark-overlay");
  if (blackOverlay) {
    blackOverlay.classList.remove("visible-overlay");
  }

  // close all modals and restore their visibility property value to "hidden"
  const modals = document.querySelectorAll(".modal-1, .modal-2, .modal-3");
  modals.forEach((modal) => {
    modal.classList.remove("visible");
  });
}
