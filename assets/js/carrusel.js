// Selección y manejo de múltiples carruseles
const carruselContainers = document.querySelectorAll('.carrusel-container');

carruselContainers.forEach(container => {
    const carrusel = container.querySelector('.carrusel');
    const prevBtn = container.querySelector('.prev-btn');
    const nextBtn = container.querySelector('.next-btn');

    prevBtn.addEventListener('click', () => {
        carrusel.scrollBy({
            left: -carrusel.offsetWidth / 3, // Mueve una imagen o un post
            behavior: 'smooth'
        });
    });

    nextBtn.addEventListener('click', () => {
        carrusel.scrollBy({
            left: carrusel.offsetWidth / 3, // Mueve una imagen o un post
            behavior: 'smooth'
        });
    });
});
