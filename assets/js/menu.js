document.addEventListener("DOMContentLoaded", function() {
  const menuContainer = document.getElementById('menu-container');
  const menuContainer_02 = document.getElementById('menu-container_02');
  
  // Fetch para cargar el archivo menu.html
  if (menuContainer) {
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
  }else if (menuContainer_02) {
    fetch('../../assets/page/menu_02.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar el menú: ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        menuContainer_02.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        menuContainer_02.innerHTML = "<p>Error al cargar el menú.</p>";
      });
  }

  /*fetch('assets/page/menu.html')
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
    });*/
});

