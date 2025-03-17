document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos todos los bloques de código
    const codeBlocks = document.querySelectorAll('pre code');
  
    codeBlocks.forEach((block) => {
      // Creamos el botón
      const button = document.createElement('button');
      button.className = 'btn-copy';
      button.textContent = 'Copy';
  
      // Creamos un contenedor para agrupar el <pre> y el botón
      const container = document.createElement('div');
      container.className = 'code-container';
  
      // Insertamos el contenedor antes del <pre> original
      const preElement = block.parentNode; // <pre>
      preElement.parentNode.insertBefore(container, preElement);
  
      // Movemos el <pre> dentro del contenedor
      container.appendChild(preElement);
      // Añadimos el botón al contenedor
      container.appendChild(button);
  
      // Evento de clic en el botón
      button.addEventListener('click', () => {
        // Tomamos el texto dentro de <code>
        const codeText = block.innerText;
  
        // Copiamos el texto al portapapeles
        navigator.clipboard.writeText(codeText)
          .then(() => {
            // Cambiamos el texto del botón temporalmente
            button.textContent = 'Copied!';
            setTimeout(() => {
              button.textContent = 'Copy';
            }, 2000);
          })
          .catch(err => {
            console.error('Error al copiar: ', err);
          });
      });
    });
  });
  