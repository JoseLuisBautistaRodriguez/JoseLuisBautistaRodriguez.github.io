document.addEventListener("DOMContentLoaded", function() {
    const scrollContainer = document.querySelector(".listfeaturedtag");
  
    // Desplazamiento con la rueda del mouse
    scrollContainer.addEventListener("wheel", function(e) {
      e.preventDefault();
      scrollContainer.scrollBy({ top: e.deltaY, behavior: "smooth" });
    });
  
    // Habilitar deslizamiento en pantallas táctiles
    let isDown = false;
    let startY;
    let scrollTop;
  
    scrollContainer.addEventListener("mousedown", (e) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startY = e.pageY - scrollContainer.offsetTop;
      scrollTop = scrollContainer.scrollTop;
    });
  
    scrollContainer.addEventListener("mouseleave", () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    });
  
    scrollContainer.addEventListener("mouseup", () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    });
  
    scrollContainer.addEventListener("mousemove", (e) => {
      if (!isDown) return;
      e.preventDefault();
      const y = e.pageY - scrollContainer.offsetTop;
      const walk = (y - startY) * 2; // Ajusta la sensibilidad del desplazamiento
      scrollContainer.scrollTop = scrollTop - walk;
    });
  });