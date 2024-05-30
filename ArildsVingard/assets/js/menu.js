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
  navbarMenu.querySelector(".submenu").removeAttribute("style");
  navbarMenu.querySelector(".submenu.show-menu").classList.remove("show-menu");
};

// Toggle Mobile Submenu Function
const toggleSubMenu = (e) => {
  console.log(e.target.hasAttribute("data-toggle"));
  if (e.target.hasAttribute("data-toggle")) {
    e.preventDefault();
    e.target.classList.toggle("active-icon");
    const submenuRef = e.target.nextElementSibling;
    if (submenuRef.classList.contains("show-menu")) {
      // collapseSubMenu();
      submenuRef.removeAttribute("style");
    } else {
      // collapseSubMenu();
      submenuRef.style.maxHeight = submenuRef.scrollHeight + "px";
    }
    submenuRef.classList.toggle("show-menu");
  }
  // if (e.target.hasAttribute('data-toggle')) {
  //   e.preventDefault();
  //   console.log(e.target.nextElementSibling);
  //   const submenuRef = e.target.nextElementSibling;
  //   // submenuRef.classList.toggle('show-menu');
  //   submenuRef.style.maxHeight = submenuRef.scrollHeight + "px";
  //   if (submenuRef.classList.contains('show-menu')) {
  //     console.log('Innehåller');
  //     collapseSubMenu();
  //   } else {
  //     console.log('ICKE');
  //     collapseSubMenu();
  //   }
  //   submenuRef.classList.add('show-menu');
  // }

  // if (e.target.hasAttribute("data-toggle")) {
  //   e.preventDefault();
  //   const menuDropdown = e.target.parentElement;
  //   console.log(menuDropdown);
  //   // If Dropdown is Expanded, then Collapse It
  //   if (menuDropdown.classList.contains("active")) {
  //     collapseSubMenu();
  //   } else {
  //     // Collapse Existing Expanded Dropdown
  //     if (navbarMenu.querySelector(".menu-dropdown.active")) {
  //       collapseSubMenu();
  //     }

  //     // Expanded the New Dropdown
  //     menuDropdown.classList.add("active");
  //     const subMenu = menuDropdown.querySelector(".submenu");
  //     subMenu.style.maxHeight = subMenu.scrollHeight + "px";
  //   }
  // }
  // console.log('du klicka ' + e.target.localName);
  // if (e.target.localName === "a" || e.target.localName === "img") {
  //   console.log(e.target.parentElement.parentElement);
  //   const menuDropdown = e.target.parentElement.parentElement;
  //   console.log(menuDropdown);
  //   // If Dropdown is Expanded, then Collapse It
  //   if (menuDropdown.classList.contains("active")) {
  //     collapseSubMenu();
  //   } else {
  //     // Collapse Existing Expanded Dropdown
  //     if (navbarMenu.querySelector(".menu-dropdown.active")) {
  //       collapseSubMenu();
  //     }

  //     // Expanded the New Dropdown
  //     menuDropdown.classList.add("active");
  //     const subMenu = menuDropdown.querySelector(".submenu");
  //     subMenu.style.maxHeight = subMenu.scrollHeight + "px";
  //     subMenu.classList.toggle('show-menu');
  //   }
  // }
};

// Initialize Event Listeners
burgerMenu.addEventListener("click", toggleMenu);
overlayMenu.addEventListener("click", toggleMenu);
navbarMenu.addEventListener("click", toggleSubMenu);
