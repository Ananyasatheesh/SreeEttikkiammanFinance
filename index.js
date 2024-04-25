const nxtBtns = document.querySelectorAll(".next-btn");
const preBtns = document.querySelectorAll(".prev-btn");
const slides = document.querySelectorAll(".slide");
const slideIcons = document.querySelectorAll(".slide-icon");
const numOfSlides = slides.length;
let slideNum = 0;

nxtBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (slideNum >= numOfSlides - 1) {
            slideNum = 0; // Reset to first slide
        } else {
            slideNum++; // Move to next slide
        }

        // Removing 'active' class from all slides and slide icons
        slides.forEach((slide) => slide.classList.remove("active"));
        slideIcons.forEach((icon) => icon.classList.remove("active"));

        // Adding 'active' class to the current slide and slide icon
        slides[slideNum].classList.add("active");
        slideIcons[slideNum].classList.add("active");
    });
});

preBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (slideNum <= 0) {
            slideNum = numOfSlides - 1; // Move to last slide
        } else {
            slideNum--; // Move to previous slide
        }

        // Removing 'active' class from all slides and slide icons
        slides.forEach((slide) => slide.classList.remove("active"));
        slideIcons.forEach((icon) => icon.classList.remove("active"));

        // Adding 'active' class to the current slide and slide icon
        slides[slideNum].classList.add("active");
        slideIcons[slideNum].classList.add("active");
    });
});
