gsap.to("#invitation span", {
  duration: 2,
  opacity: 1,
  y: 0,
  ease: "back.out(1.7)",
  stagger: 0.2,
  repeat: 0,
  
});

gsap.fromTo(".container", 
      { opacity: 0, y: 100 }, 
      { duration: 3, opacity: 1, y: 0, ease: "back.out(2)"}
    )




var slideIndex = 1;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slides[slideIndex-1].style.display = "block";  
}


  