document.addEventListener("DOMContentLoaded", function() {
    const tgDjangoContainer = document.getElementById('django-container');
    const tgphpContainer = document.getElementById('php-container');
    const tgWordPressContainer = document.getElementById('WordPress-container');
 
    // Fetch para cargar el archivo django.html
    fetch('../../content/tags/django.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar Tag Django: ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        tgDjangoContainer.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        tgDjangoContainerContainer.innerHTML = "<p>Error al cargar el Django tags.</p>";
    }); 
 
    // Fetch para cargar el archivo php.html
    fetch('../../content/tags/php.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar Tag php: ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        tgphpContainer.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        tgphpContainerContainer.innerHTML = "<p>Error al cargar el php tags.</p>";
    }); 

    // Fetch para cargar el archivo wordpress.html
    fetch('../../content/tags/wordpress.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar WordPress tag: ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        tgWordPressContainer.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        tgWordPressContainer.innerHTML = "<p>Error al cargar el WordPress tags.</p>";
    }); 

  });
  