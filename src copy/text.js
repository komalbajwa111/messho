
   
    
    const menuBtn = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });




    // Slider functionality
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slider > div');
    const totalSlides = slides.length;
    let currentSlide = 0;

    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function goToSlide(index) {
      if (index >= totalSlides) {
        currentSlide = 0;
      } else if (index < 0) {
        currentSlide = totalSlides - 1;
      } else {
        currentSlide = index;
      }
      slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    prevButton.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextButton.addEventListener('click', () => goToSlide(currentSlide + 1));

    // Auto-play functionality (optional)
    setInterval(() => goToSlide(currentSlide + 1), 3000); // Change slide every 3 seconds
  
