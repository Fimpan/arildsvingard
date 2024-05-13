// Select the carousel and the dots container
const carousel = document.querySelector(".custom-slides-inner");
const dotsContainer = document.querySelector(".dots-container");

// Get all the slides and create a dot for each one
const slides = Array.from(carousel.children);
let slideWidth = slides[0].getBoundingClientRect().width; // Get the width of a slide

slides.forEach((slide, index) => {
  slide.style.left = slideWidth * index + "px"; // Position each slide next to the previous one
  const dot = document.createElement("button");
  dot.classList.add("dot");
  dot.dataset.index = index;
  dotsContainer.appendChild(dot);
});

// Function to move to a slide
function moveToSlide(carousel, currentSlide, targetSlide) {
  carousel.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
}

// Function to update dots
function updateDots(currentDot, targetDot) {
  currentDot.classList.remove("current-dot");
  targetDot.classList.add("current-dot");
}

// Add click event to each dot
dotsContainer.addEventListener("click", (e) => {
  // What dot was clicked on?
  const targetDot = e.target.closest("button");

  if (!targetDot) return;

  const currentSlide = carousel.querySelector(".current-slide");
  const currentDot = dotsContainer.querySelector(".current-dot");
  const targetIndex = targetDot.dataset.index;
  const targetSlide = slides[targetIndex];

  moveToSlide(carousel, currentSlide, targetSlide);
  updateDots(currentDot, targetDot);
});

// Function to go to the next slide
function goToNextSlide() {
  const currentSlide = carousel.querySelector(".current-slide");
  const currentDot = dotsContainer.querySelector(".current-dot");
  const nextIndex = (slides.indexOf(currentSlide) + 1) % slides.length;
  const nextSlide = slides[nextIndex];
  const nextDot = dotsContainer.children[nextIndex];
  if (!currentSlide || !currentDot) return;
  moveToSlide(carousel, currentSlide, nextSlide);
  updateDots(currentDot, nextDot);
}

// Automatically go to the next slide every 3 seconds
setInterval(goToNextSlide, 3000);

// Make the carousel draggable
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID = 0;
let currentIndex = 0;

carousel.addEventListener("mousedown", (event) => {
  isDragging = true;
  startPos = getPositionX(event);
  animationID = requestAnimationFrame(animation);
});

window.addEventListener("mouseup", () => {
  isDragging = false;
  cancelAnimationFrame(animationID);
  const movedBy = currentTranslate - prevTranslate;

  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

  setPositionByIndex();
});

carousel.addEventListener("mousemove", (event) => {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
});

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setCarouselPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setCarouselPosition() {
  carousel.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setCarouselPosition();
}
slides[0].classList.add("current-slide");
dotsContainer.children[0].classList.add("current-dot");
