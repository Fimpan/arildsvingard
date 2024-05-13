let startX;
let scrollLeft;
const slider = document.querySelector(".slides-inner");

slider.addEventListener("mousedown", (e) => {
  e.preventDefault();
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.classList.add("active");
});

slider.addEventListener("mouseleave", () => {
  slider.classList.remove("active");
});

slider.addEventListener("mouseup", () => {
  slider.classList.remove("active");
});

slider.addEventListener("mousemove", (e) => {
  if (!slider.classList.contains("active")) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
});
