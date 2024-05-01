document.addEventListener("DOMContentLoaded", (event) => {
  // Get all the radio buttons
  var radios = document.querySelectorAll('input[type="radio"]');

  // Get the continue button
  var continueButton = document.querySelector("#continue-button");

  // Initially prevent the default action of the continue button
  continueButton.addEventListener("click", preventNavigation, false);

  // Keep a count of how many radio buttons have been selected
  var selectedCount = 0;

  // Add a change event listener to each radio button
  for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
      // If a radio button is selected, increment the count
      if (this.checked) {
        selectedCount++;
      } else {
        selectedCount--;
      }

      // If two radio buttons have been selected, enable the continue button
      if (selectedCount >= 2) {
        continueButton.removeEventListener("click", preventNavigation, false);
        continueButton.classList.remove("btn-primary-disable");
        continueButton.classList.add("btn-primary");
      } else {
        continueButton.addEventListener("click", preventNavigation, false);
        continueButton.classList.add("btn-primary-disable");
        continueButton.classList.remove("btn-primary");
      }
    });
  }

  // Reset the selected radio buttons when going back to this page
  window.addEventListener("pageshow", function () {
    for (var i = 0; i < radios.length; i++) {
      radios[i].checked = false;
    }
    selectedCount = 0;
    continueButton.addEventListener("click", preventNavigation, false);
    continueButton.classList.add("btn-primary-disable");
    continueButton.classList.remove("btn-primary");
  });
});

function preventNavigation(e) {
  e.preventDefault();
}
