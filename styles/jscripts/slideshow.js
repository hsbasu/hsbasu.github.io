// slideshow.js
// Supports multiple independent slideshows with autoplay

document.addEventListener("DOMContentLoaded", () => {
  // Find all slideshows
  const slideshows = document.querySelectorAll(".slideshow-container");

  slideshows.forEach((slideshow) => {
    let currentSlide = 0;
    const slides = slideshow.querySelectorAll(".mySlides");
    const dots = slideshow.querySelectorAll(".dot");
    const prevBtn = slideshow.querySelector(".prev");
    const nextBtn = slideshow.querySelector(".next");

    // Optional: customize interval per slideshow with data-interval="5000"
    const intervalTime = parseInt(slideshow.dataset.interval || "5000", 10);
    let timer = null;

    function showSlide(n) {
      if (slides.length === 0) return;

      currentSlide = (n + slides.length) % slides.length; // wrap around

      slides.forEach((slide, i) => {
        slide.style.display = (i === currentSlide) ? "block" : "none";
      });

      dots.forEach((dot, i) => {
        dot.className = dot.className.replace(" active", "");
        if (i === currentSlide) dot.className += " active";
      });
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function prevSlide() {
      showSlide(currentSlide - 1);
    }

    // Auto-play
    function startAutoPlay() {
      stopAutoPlay(); // clear any existing timer
      timer = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    }

    // Add button events
    if (prevBtn) prevBtn.addEventListener("click", () => {
      prevSlide();
      startAutoPlay(); // reset timer on manual click
    });

    if (nextBtn) nextBtn.addEventListener("click", () => {
      nextSlide();
      startAutoPlay();
    });

    dots.forEach((dot, i) => {
      dot.addEventListener("click", () => {
        showSlide(i);
        startAutoPlay();
      });
    });

    // Initialize slideshow
    showSlide(0);
    startAutoPlay();

    // Pause on hover (optional)
    slideshow.addEventListener("mouseenter", stopAutoPlay);
    slideshow.addEventListener("mouseleave", startAutoPlay);
  });
});
