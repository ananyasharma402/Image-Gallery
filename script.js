const images = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const close = document.querySelector(".close");


// Open Image

images.forEach(function(image) {

    image.addEventListener("click", function() {

        lightbox.style.display = "flex";

        lightboxImg.src = image.src;

    });

});


// Close Button

close.addEventListener("click", function() {

    lightbox.style.display = "none";

});


// Close when clicking outside image

lightbox.addEventListener("click", function(event) {

    if (event.target === lightbox) {

        lightbox.style.display = "none";

    }

});