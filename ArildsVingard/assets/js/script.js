// _________________________________________________________

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

// _____________________

// collapsible text
document.querySelector(".expand-button").addEventListener("click", function () {
  var bookingTextInfo = document.querySelector(".booking-text-info");
  var expandButton = document.querySelector(".expand-button");

  bookingTextInfo.classList.toggle("-expanded");

  if (bookingTextInfo.classList.contains("-expanded")) {
    expandButton.innerHTML = "Collapse Content";
  } else {
    expandButton.innerHTML = "Continue Reading";
  }
});

// localStorage.setItem("name", true);
