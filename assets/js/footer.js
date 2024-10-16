document.addEventListener("DOMContentLoaded", function() {
    const footerContainer = document.getElementById('footer-container');
    
    // Fetch para cargar el archivo footer.html
    fetch('assets/page/footer.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el footer: ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        footerContainer.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        footerContainer.innerHTML = "<p>Error al cargar el footer.</p>";
      });
  });
  