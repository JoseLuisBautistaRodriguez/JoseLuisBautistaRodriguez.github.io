document.addEventListener("DOMContentLoaded", function() {
    const sharecontainer = document.getElementById('share-container');
 
    // Fetch para cargar el archivo footer.html
    fetch('../../assets/page/share.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar SH: ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        sharecontainer.innerHTML = data;
      })
      .catch(error => {
        console.error(error);
        sharecontainer.innerHTML = "<p>Error al cargar SH.</p>";
      }); 
  });
  