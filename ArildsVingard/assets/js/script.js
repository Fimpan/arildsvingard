// chat pop-up
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// _________________________________________________________
document.addEventListener("DOMContentLoaded", (event) => {
  function checkWidth() {
    const btnElement1 = document.querySelector(".btn-text1");
    const btnElement2 = document.querySelector(".btn-text2");
    const btnElement3 = document.querySelector(".btn-text3");
    const h2Element = document.querySelector(".text-change");
    if (window.matchMedia("(min-width: 992px)").matches) {
      btnElement1.textContent = "Boka vingårdspaket med hotell"; // Change 'Desktop Text 1' to your desired text
      btnElement2.textContent = "Boka vingårdspaket med glamping"; // Change 'Desktop Text 2' to your desired text
      btnElement3.textContent = "Boka vingårdspaket med Husbil"; // Change 'Desktop Text 3' to your desired text
      h2Element.textContent = "Bilder från vingården";
    } else {
      btnElement1.textContent = "Boka vingårdspaket";
      btnElement2.textContent = "Boka vingårdspaket";
      btnElement3.textContent = "Boka vingårdspaket";
      h2Element.textContent = "En bildberättelse";
    }
  }

  // Check width on load
  checkWidth();

  // Check width on resize
  window.addEventListener("resize", checkWidth);
});

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

  // Get the first day of the month
  let firstDay = new Date(year, month, 1).getDay();

  // Get the number of days in the previous month
  let daysInPreviousMonth = new Date(year, month, 0).getDate();

  // Add days from the previous month
  for (
    let i = daysInPreviousMonth - firstDay + 1;
    i <= daysInPreviousMonth;
    i++
  ) {
    let span = document.createElement("span");
    span.className = "prev-month";
    span.innerText = i;
    calContainer.appendChild(span);
  }
  // Get the number of days in the month
  let daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add days from the current month
  for (let i = 1; i <= daysInMonth; i++) {
    let span = document.createElement("span");
    span.id = "d" + i;
    span.innerText = i;
    calContainer.appendChild(span);
  }

  // Add days from the next month
  let nextMonthDays = 7 - (calContainer.children.length % 7);
  if (nextMonthDays < 7) {
    for (let i = 1; i <= nextMonthDays; i++) {
      let span = document.createElement("span");
      span.className = "next-month";
      span.innerText = i;
      calContainer.appendChild(span);
    }
  }
  myDays = document.querySelectorAll(".cal span");
  myDays.forEach(function (day) {
    // Ignore clicks on dates from the previous and next month
    if (
      day.classList.contains("prev-month") ||
      day.classList.contains("next-month")
    ) {
      return;
    }
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

// _____________________

// button change text
// document.addEventListener("DOMContentLoaded", function () {
//   function checkViewport() {
//     var btnText = document.getElementById("btn-text");
//     if (window.innerWidth >= 1024) {
//       // Change 1024 to your desktop breakpoint
//       btnText.textContent = "Desktop Text"; // Change 'Desktop Text' to the text you want on desktop
//     } else {
//       btnText.textContent = "Boka vingårdspaket";
//     }
//   }

//   // Call checkViewport at page load
//   checkViewport();

//   // Call checkViewport at window resize
//   window.addEventListener("resize", checkViewport);
// });

// _____________________
