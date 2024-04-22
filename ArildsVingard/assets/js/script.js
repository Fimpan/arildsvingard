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
let myDays = document.querySelectorAll(".cal span");
let start = "";
let end = "";
myDays.forEach(function (day) {
  day.addEventListener("click", function (e) {
    if (start == "" && end == "") {
      start = this.innerHTML;
      day.classList.add("active");
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
    } else {
      start = "";
      end = "";
      myDays.forEach(function (day3) {
        day3.classList.remove("active");
      });
    }
    console.log("Start: " + start + " End: " + end);
  });
});

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
