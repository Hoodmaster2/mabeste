// Get the navigation menu
var nav = document.querySelector("nav");

// Get the offset position of the navigation menu
var navTop = nav.offsetTop;

// Add a scroll event listener to the window
window.addEventListener("scroll", function () {
  // Check if the window's scroll position is greater than the offset position of the navigation menu
  if (window.pageYOffset >= navTop) {
    // If it is, add the "fixed" class to the navigation menu
    nav.classList.add("fixed");
  } else {
    // If not, remove the "fixed" class from the navigation menu
    nav.classList.remove("fixed");
  }
});
