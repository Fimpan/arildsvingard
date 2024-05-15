//https://codepen.io/Fim-Pruekwatcharakun/pen/KKYxved

// dropdown menu
const navbarMenu = document.getElementById("navbar");
const burgerMenu = document.getElementById("burger");
const overlayMenu = document.querySelector(".overlay");

// Show and Hide Navbar Function
const toggleMenu = () => {
  console.log("rr");
  burgerMenu.classList.toggle("exit");
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
  if (e.target.hasAttribute("data-toggle")) {
    e.preventDefault();
    const menuDropdown = e.target.parentElement;
    console.log(menuDropdown);
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

  if (e.target.localName === "a" || e.target.localName === "img") {
    console.log(e.target.parentElement.parentElement);
    const menuDropdown = e.target.parentElement.parentElement;
    console.log(menuDropdown);
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

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
