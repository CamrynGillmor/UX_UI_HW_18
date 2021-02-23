/* Java Script File */
console.log("JavaScript File")

// Sticky NAV //
  // When the user scrolls the page, execute myFunction
  window.onscroll = function() {myFunction()};

  // Get the navbar
  var navbar2 = document.getElementById("navbar");
  //console.log(navbar)
  // Get the offset position of the navbar
 //var sticky = navbar2.offsetTop("1px");

  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  function myFunction() {
      console.log("Sticky Nav")
    if (window.pageYOffset >= sticky) {
      navbar2.classList.add("sticky");
    } else {
      navbar2.classList.remove("sticky");
    }
  }

// Mobile Menu //
function myFunction() {
  var x = document.getElementById("navbarMobile");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}


