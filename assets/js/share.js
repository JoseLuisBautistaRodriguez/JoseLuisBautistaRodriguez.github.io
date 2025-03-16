document.addEventListener("DOMContentLoaded", function() {
  const sharecontainer = document.getElementById('share-container');
  console.log("Contenedor sharecontainer:", sharecontainer);

  if (sharecontainer) {
    const postUrl = sharecontainer.getAttribute('data-post-url');
    console.log("postUrl:", postUrl);

    fetch('../../assets/page/share.html')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error al cargar SH: ' + response.statusText);
        }
        return response.text();
      })
      .then(data => {
        // Reemplazamos el placeholder
        const dataConUrl = data.replace(/{POST_URL}/g, encodeURIComponent(postUrl));
        sharecontainer.innerHTML = dataConUrl;
      })
      .catch(error => {
        console.error(error);
        sharecontainer.innerHTML = "<p>Error al cargar SH.</p>";
      }); 
  } else {
    console.error("No se encontró el div con id='share-container'");
  }
});
