// window.addEventListener("DOMContentLoaded", function () {
//   var homeSlider = document.querySelector(".home-slider");
//   var items = homeSlider.querySelectorAll(".item");
//   var currentIndex = 0;
//   var startPos = 0;
//   var isDragging = false;

//   function showItem(index) {
//     items.forEach(function (item, i) {
//       item.style.display = "none";
//       if (i >= index && i < index + 2) {
//         item.style.display = "block";
//       }
//     });
//   }

//   function nextItem() {
//     currentIndex++;
//     if (currentIndex >= items.length - 1) {
//       currentIndex = 0;
//     }
//     showItem(currentIndex);
//   }

//   function prevItem() {
//     currentIndex--;
//     if (currentIndex < 0) {
//       currentIndex = items.length - 2;
//     }
//     showItem(currentIndex);
//   }

//   function handleTouchStart(e) {
//     startPos = e.touches[0].clientX;
//     isDragging = true;
//   }

//   function handleTouchMove(e) {
//     if (!isDragging) {
//       return;
//     }
//     var currentPos = e.touches[0].clientX;
//     var movePos = currentPos - startPos;

//     if (movePos > 50) {
//       prevItem();
//       isDragging = false;
//     } else if (movePos < -50) {
//       nextItem();
//       isDragging = false;
//     }
//   }

//   function handleTouchEnd() {
//     isDragging = false;
//   }

//   if (window.innerWidth <= 768) {
//     showItem(currentIndex);
//     homeSlider.addEventListener("touchstart", handleTouchStart);
//     homeSlider.addEventListener("touchmove", handleTouchMove);
//     homeSlider.addEventListener("touchend", handleTouchEnd);
//   } else {
//     items.forEach(function (item) {
//       item.style.display = "block";
//     });
//   }
// });

window.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".home-slider", {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 12,
    loop: true,

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
});
