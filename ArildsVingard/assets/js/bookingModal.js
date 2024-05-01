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

//fortsätt handla
document
  .querySelector(".continue-shopping")
  .addEventListener("click", function () {
    document.querySelector(
      ".booking-modal .selected-dates-section"
    ).style.display = "none";
  });

//collaps
// document.querySelector(".cart-button").addEventListener("click", function () {
//   document.querySelector(".selected-dates-section").style.display = "block";
// });

// document.querySelector(".close-button").addEventListener("click", function () {
//   document.querySelector(".selected-dates-section").style.display = "none";
// });

// document
//   .querySelector(".continue-shopping")
//   .addEventListener("click", function () {
//     document.querySelector(".selected-dates-section").style.display = "none";
//   });

// document.querySelector(".toggle-button").addEventListener("click", function () {
//   document
//     .querySelector(".booking-info-container")
//     .classList.toggle("collapsed");
// });
var toggleVisibility = function (event) {
  event.preventDefault();
  var bookingInfoContainer = document.querySelector(".booking-info-container");

  if (bookingInfoContainer.classList.contains("expanded")) {
    bookingInfoContainer.classList.remove("expanded");
    event.target.innerHTML = "Read More";
  } else {
    bookingInfoContainer.classList.add("expanded");
    event.target.innerHTML = "Read Less";
  }
};

var readMoreButton = document.querySelector(".read-more");

readMoreButton.addEventListener("click", toggleVisibility);
