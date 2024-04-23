// modal
let modal = document.getElementById("myModal");
let btn = document.querySelector(".guestModal");
let span = document.getElementsByClassName("close")[0];
let guestCount = 0;
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

document.getElementById("addGuests").addEventListener("click", function () {
  guestCount++;
  document.getElementById("guestCount").innerText = guestCount;
  document.querySelector(".guestModal .quantity").innerText =
    "Antal gäster: " + guestCount + ", Antal rum: " + roomCount;
});

document
  .getElementById("subtractGuests")
  .addEventListener("click", function () {
    if (guestCount > 0) {
      guestCount--;
      document.getElementById("guestCount").innerText = guestCount;
      document.querySelector(".guestModal .quantity").innerText =
        "Antal gäster: " + guestCount + ", Antal rum: " + roomCount;
    }
  });

document.getElementById("addRooms").addEventListener("click", function () {
  roomCount++;
  document.getElementById("roomCount").innerText = roomCount;
  document.querySelector(".guestModal .quantity").innerText =
    "Antal gäster: " + guestCount + ", Antal rum: " + roomCount;
});

document.getElementById("subtractRooms").addEventListener("click", function () {
  if (roomCount > 0) {
    roomCount--;
    document.getElementById("roomCount").innerText = roomCount;
    document.querySelector(".guestModal .quantity").innerText =
      "Antal gäster: " + guestCount + ", Antal rum: " + roomCount;
  }
});
