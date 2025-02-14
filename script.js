document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    let currentIndex = 0;
    const totalSlides = slides.length;

    function showSlide(index) {
        // Asegura que el índice esté dentro del rango
        currentIndex = (index + totalSlides) % totalSlides;
        
        // Mueve el carrusel
        carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', () => {
        showSlide(currentIndex + 1);
    });

    prevBtn.addEventListener('click', () => {
        showSlide(currentIndex - 1);
    });

    // Añadir auto-desplazamiento (opcional)
    setInterval(() => {
        showSlide(currentIndex + 1);
    }, 5000); // Cambia cada 5 segundos
});