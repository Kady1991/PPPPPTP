  // Modal Image Gallery
    function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
    }


    // Toggle between showing and hiding the sidebar when clicking the menu icon
    var mySidebar = document.getElementById("mySidebar");

    function w3_open() {
    if (mySidebar.style.display === 'block') {
        mySidebar.style.display = 'none';
    } else {
        mySidebar.style.display = 'block';
    }
    }

    // Close the sidebar with the close button
    function w3_close() {
        mySidebar.style.display = "none";
    }


    // script caroousel//
   
    
document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;
    const slideWidth = slides[0].clientWidth;
    const numSlides = slides.length;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % numSlides;
        updateCarousel();
    }

    function updateCarousel() {
        const offset = -currentIndex * slideWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }

    setInterval(nextSlide, 3000); // Change de diapositive toutes les 3 secondes (ajustez la durée selon vos préférences)
});

    
    