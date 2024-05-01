document.querySelector(".cart-button").addEventListener("click", function () {
  document.querySelector(
    ".info-text-buttons .booking-modal .selected-dates-section"
  ).style.display = "block";
});

document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector(
    ".info-text-buttons .booking-modal .selected-dates-section"
  ).style.display = "none";
});
