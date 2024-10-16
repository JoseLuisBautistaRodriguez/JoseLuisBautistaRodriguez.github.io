document.addEventListener("DOMContentLoaded", function() {
  const menuContainer = document.getElementById('menu-container');
  
  // Fetch para cargar el archivo menu.html
  fetch('assets/page/menu.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Error al cargar el menú: ' + response.statusText);
      }
      return response.text();
    })
    .then(data => {
      menuContainer.innerHTML = data;
    })
    .catch(error => {
      console.error(error);
      menuContainer.innerHTML = "<p>Error al cargar el menú.</p>";
    });
});
