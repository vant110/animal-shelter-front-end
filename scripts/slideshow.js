let currSlide = 1;
let srces = [
  "/images/pets/cats/60a7e104410502f0741165f4.jpg",
  "/images/pets/cats/60a7e7cd919fd82794f5b604.jpg",
  "/images/pets/cats/60a7e857919fd82794f5b605.jpg"
];

function showSlides(n) {
  let slide = document.getElementById("slide");
  let dots = document.getElementsByClassName("dot");
  if (n > srces.length) {
    currSlide = 1;
  }
  else if (n < 1) {
    currSlide = srces.length;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  document.getElementById("animal__image").src = srces[currSlide-1];
  dots[currSlide-1].className += " active";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(currSlide += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(currSlide = n);
}

showSlides(currSlide);