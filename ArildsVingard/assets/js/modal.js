// modal
let modal = document.getElementById("myModal");
let btn = document.querySelector(".guestModal");
let span = document.getElementsByClassName("close")[0];
let guestCount1 = 0;
let guestCount2 = 0;
let roomCount = 0;

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
    "Antal gäster: " +
    (guestCount1 + guestCount2) +
    ", Antal rum: " +
    roomCount;
}
