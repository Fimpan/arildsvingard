//https://codepen.io/Fim-Pruekwatcharakun/pen/KKYxved

// dropdown menu
const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide Navbar Function
const toggleMenu = () => {
  navbarMenu.classList.toggle("active");
  overlayMenu.classList.toggle("active");
};

// Collapsible Mobile Submenu Function
const collapseSubMenu = () => {
  navbarMenu
    .querySelector(".menu-dropdown.active .submenu")
    .removeAttribute("style");
  navbarMenu.querySelector(".menu-dropdown.active").classList.remove("active");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
  if (e.target.hasAttribute("data-toggle") && window.innerWidth <= 992) {
    e.preventDefault();
    const menuDropdown = e.target.parentElement;

    // If Dropdown is Expanded, then Collapse It
    if (menuDropdown.classList.contains("active")) {
      collapseSubMenu();
    } else {
      // Collapse Existing Expanded Dropdown
      if (navbarMenu.querySelector(".menu-dropdown.active")) {
        collapseSubMenu();
      }

      // Expanded the New Dropdown
      menuDropdown.classList.add("active");
      const subMenu = menuDropdown.querySelector(".submenu");
      subMenu.style.maxHeight = subMenu.scrollHeight + "px";
    }
  }
};

// Fixed Resize Window Function
const resizeWindow = () => {
  if (window.innerWidth > 992) {
    if (navbarMenu.classList.contains("active")) {
      toggleMenu();
    }
    if (navbarMenu.querySelector(".menu-dropdown.active")) {
      collapseSubMenu();
    }
  }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
window.addEventListener("resize", resizeWindow);

// _________________________________________________________

//Datepicker

// modal
// let modal = document.getElementById("myModal");
// let btn = document.querySelector(".guestModal");
// let span = document.getElementsByClassName("close")[0];
// let guestCount = 0;
// let roomCount = 0;

// btn.onclick = function () {
//   modal.style.display = "block";
// };

// span.onclick = function () {
//   modal.style.display = "none";
// };

// window.onclick = function (event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// };

// document.getElementById("addGuests").addEventListener("click", function () {
//   guestCount++;
//   document.getElementById("guestCount").innerText = guestCount;
//   document.querySelector(".checkChoose").innerText =
//     "Antal gäster: " + guestCount;
// });

// document
//   .getElementById("subtractGuests")
//   .addEventListener("click", function () {
//     if (guestCount > 0) {
//       guestCount--;
//       document.getElementById("guestCount").innerText = guestCount;
//       document.querySelector(".checkChoose").innerText =
//         "Antal gäster: " + guestCount;
//     }
//   });

// document.getElementById("addRooms").addEventListener("click", function () {
//   roomCount++;
//   document.getElementById("roomCount").innerText = roomCount;
//   document.querySelector(".checkChoose").innerText +=
//     ", Antal rum: " + roomCount;
// });

// document.getElementById("subtractRooms").addEventListener("click", function () {
//   if (roomCount > 0) {
//     roomCount--;
//     document.getElementById("roomCount").innerText = roomCount;
//     document.querySelector(".checkChoose").innerText +=
//       ", Antal rum: " + roomCount;
//   }
// });

//calendar
let myDays;
let start = "";
let end = "";
let monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let currentMonth = 3; // April
let currentYear = 2024; // Current year

function generateCalendar(month, year) {
  let calContainer = document.querySelector(".cal");
  calContainer.innerHTML = ""; // Clear the existing calendar

  let daysInMonth = new Date(year, month + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    let span = document.createElement("span");
    span.id = "d" + i;
    span.innerText = i;
    calContainer.appendChild(span);
  }

  myDays = document.querySelectorAll(".cal span");
  myDays.forEach(function (day) {
    day.addEventListener("click", function (e) {
      if (start == "" && end == "") {
        start = this.innerHTML;
        day.classList.add("active");
        document.querySelector(".checkChoose").innerText =
          start + " " + monthNames[currentMonth] + ", " + currentYear;
      } else if (start != "" && end == "") {
        end = this.innerHTML;
        myDays.forEach(function (day2) {
          if (
            Number(day2.innerHTML) >= Number(start) &&
            Number(day2.innerHTML) <= Number(end)
          ) {
            day2.classList.add("active");
          }
        });
        document.querySelectorAll(".checkChoose")[1].innerText =
          end + " " + monthNames[currentMonth] + ", " + currentYear;
      } else {
        resetDates();
      }
    });
  });
  document.querySelector(".month").innerText =
    monthNames[currentMonth] + " " + currentYear;
}

generateCalendar(currentMonth, currentYear); // Generate the initial calendar

document
  .querySelector(".calendar-navigation .move-direction:first-child")
  .addEventListener("click", function () {
    currentMonth = (currentMonth - 1 + 12) % 12;
    document.querySelector(".month").innerText = monthNames[currentMonth];
    generateCalendar(currentMonth, currentYear);
    resetDates();
  });

document
  .querySelector(".calendar-navigation .move-direction:last-child")
  .addEventListener("click", function () {
    currentMonth = (currentMonth + 1) % 12;
    document.querySelector(".month").innerText = monthNames[currentMonth];
    generateCalendar(currentMonth, currentYear);
    resetDates();
  });

function resetDates() {
  start = "";
  end = "";
  myDays.forEach(function (day) {
    day.classList.remove("active");
  });
  document.querySelector(".checkChoose").innerText = "Lägg till datum";
  document.querySelectorAll(".checkChoose")[1].innerText = "Lägg till datum";
}

function addRange(startDay, endDay) {
  myDays.forEach(function (day) {
    let dayNumber = Number(day.innerHTML);
    if (dayNumber >= startDay && dayNumber <= endDay) {
      day.classList.add("active");
    }
  });
}

// Usage
addRange(5, 10);

// Reset the selected dates
resetDates();
