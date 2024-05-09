var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    var iconCollapsed = this.querySelector(".icon-collapsed");
    var iconExpanded = this.querySelector(".icon-expanded");

    // Check if the screen width is less than the desktop breakpoint
    if (window.innerWidth < 992) {
      // Replace 992 with your desktop breakpoint
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        iconCollapsed.style.display = "inline";
        iconExpanded.style.display = "none";
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        iconCollapsed.style.display = "none";
        iconExpanded.style.display = "inline";
      }
    }
  });
}
