document.getElementById("anchor").addEventListener("click", function () {
    document.getElementById("samples").scrollIntoView({
        behavior: "smooth"
    });
});


const galleryImages = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

galleryImages.forEach(img => {
    img.addEventListener("click", function () {
        lightbox.classList.add("active");
        lightboxImg.src = this.src;
    });
});

lightbox.addEventListener("click", function () {
    lightbox.classList.remove("active");
    lightboxImg.src = "";
});