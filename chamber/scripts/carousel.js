let slideIndex = 1;
showSlides(slideIndex);

//Function to control the slides
function plusSlides(n) {
  showSlides(slideIndex += n);
}

//Function to set the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//Function to display the current slide
function showSlides(n) {
  let slides = document.getElementsByClassName("my-slides");
  let dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  //Will hide all slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  //Will reset all dots
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  //Will show the current slide and mark the corresponding dot
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}