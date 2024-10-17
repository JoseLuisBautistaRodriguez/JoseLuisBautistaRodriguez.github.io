const carrusel = document.querySelector('.carrusel');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

prevBtn.addEventListener('click', () => {
    carrusel.scrollBy({
        left: -carrusel.offsetWidth / 2, // Mueve una imagen
        behavior: 'smooth'
    });
});

nextBtn.addEventListener('click', () => {
    carrusel.scrollBy({
        left: carrusel.offsetWidth / 2, // Mueve una imagen
        behavior: 'smooth'
    });
});
