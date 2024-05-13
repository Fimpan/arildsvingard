// Get references to the date input fields and the button
var checkInDateInput = document.querySelector(
  ".datepicker .check:nth-child(1) .checkChoose"
);
var checkOutDateInput = document.querySelector(
  ".datepicker .check:nth-child(2) .checkChoose"
);
var offerButton = document.getElementById("offerButton");
let guestCount1 = 0;
let guestCount2 = 0;
let roomCount = 0;
let guestCount3 = 0;
// Initially prevent the default action of the offerButton
offerButton.addEventListener("click", preventDefaultAction);

function preventDefaultAction(e) {
  e.preventDefault();
}

// Add a MutationObserver to watch for changes in the .checkChoose elements' text content
var observer = new MutationObserver(checkDates);
observer.observe(checkInDateInput, { childList: true });
observer.observe(checkOutDateInput, { childList: true });

function checkDates() {
  // If both dates have been selected and a selection has been made in the modal, enable the button
  if (
    checkInDateInput.textContent !== "Lägg till datum" &&
    checkOutDateInput.textContent !== "Lägg till datum" &&
    (parseInt(guestCount1.textContent) > 0 ||
      parseInt(guestCount2.textContent) > 0 ||
      parseInt(guestCount3.textContent) > 0 ||
      parseInt(roomCount.textContent) > 0)
  ) {
    offerButton.classList.remove("btn-primary-disable");
    offerButton.classList.add("btn-primary");
    // Remove the event listener that prevents the default action
    offerButton.removeEventListener("click", preventDefaultAction);
  } else {
    // If dates are not selected or no selection has been made in the modal, disable the button
    offerButton.classList.remove("btn-primary");
    offerButton.classList.add("btn-primary-disable");
    // Add the event listener that prevents the default action
    offerButton.addEventListener("click", preventDefaultAction);
  }
}

// modal
let modal = document.getElementById("myModal");
let btn = document.querySelector(".guestModal");
let span = document.getElementsByClassName("close")[0];

// Add an event listener to the modal close button to check the conditions and update the button state
span.addEventListener("click", checkDates);
btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("addGuests1").addEventListener("click", function () {
  guestCount1++;
  document.getElementById("guestCount1").innerText = guestCount1;
  updateGuestAndRoomCount();
});

document
  .getElementById("subtractGuests1")
  .addEventListener("click", function () {
    if (guestCount1 > 0) {
      guestCount1--;
      document.getElementById("guestCount1").innerText = guestCount1;
      updateGuestAndRoomCount();
    }
  });

document.getElementById("addGuests2").addEventListener("click", function () {
  guestCount2++;
  document.getElementById("guestCount2").innerText = guestCount2;
  updateGuestAndRoomCount();
});

document
  .getElementById("subtractGuests2")
  .addEventListener("click", function () {
    if (guestCount2 > 0) {
      guestCount2--;
      document.getElementById("guestCount2").innerText = guestCount2;
      updateGuestAndRoomCount();
    }
  });
document
  .getElementById("subtractGuests3")
  .addEventListener("click", function () {
    if (guestCount3 > 0) {
      guestCount3--;
      document.getElementById("guestCount3").innerText = guestCount3;
      updateGuestAndRoomCount();
    }
  });
document.getElementById("addGuests3").addEventListener("click", function () {
  guestCount3++;
  document.getElementById("guestCount3").innerText = guestCount3;
  updateGuestAndRoomCount();
});
document.getElementById("addRooms").addEventListener("click", function () {
  roomCount++;
  document.getElementById("roomCount").innerText = roomCount;
  updateGuestAndRoomCount();
});

document.getElementById("subtractRooms").addEventListener("click", function () {
  if (roomCount > 0) {
    roomCount--;
    document.getElementById("roomCount").innerText = roomCount;
    updateGuestAndRoomCount();
  }
});

function updateGuestAndRoomCount() {
  document.querySelector(".guestModal .quantity").innerText =
    guestCount1 + guestCount2 + " gäster, " + guestCount3 + " rum";
  checkDates(); // Call checkDates to update the state of the button
}

function checkDates() {
  console.log("Checking dates...");
  console.log("Check-in date:", checkInDateInput.textContent);
  console.log("Check-out date:", checkOutDateInput.textContent);
  console.log("Guest count 1:", guestCount1);
  console.log("Guest count 2:", guestCount2);
  console.log("Guest count 3:", guestCount3);
  console.log("Room count:", roomCount);

  // If both dates have been selected and a selection has been made in the modal, enable the button
  if (
    checkInDateInput.textContent !== "Lägg till datum" &&
    checkOutDateInput.textContent !== "Lägg till datum" &&
    (guestCount1 > 0 || guestCount2 > 0 || guestCount3 > 0 || roomCount > 0)
  ) {
    console.log("Enabling button...");
    offerButton.classList.remove("btn-primary-disable");
    offerButton.classList.add("btn-primary");
    // Remove the event listener that prevents the default action
    offerButton.removeEventListener("click", preventDefaultAction);
  } else {
    // If dates are not selected or no selection has been made in the modal, disable the button
    console.log("Disabling button...");
    offerButton.classList.remove("btn-primary");
    offerButton.classList.add("btn-primary-disable");
    // Add the event listener that prevents the default action
    offerButton.addEventListener("click", preventDefaultAction);
  }
}
