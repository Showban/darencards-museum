document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM listo");

    // Obtener todas las imágenes dentro de la sección de 'imagenes'
    const images = document.querySelectorAll('.imagenes .item img');

    // Obtener el pop-up y la imagen que se mostrará dentro del pop-up
    const popup = document.getElementById('popup');
    const popupImage = document.getElementById('popupImage');
    const closeBtn = document.querySelector('.close-btn');

    // Agregar un evento de clic a cada imagen
    images.forEach(function(image) {
        image.addEventListener('click', function() {
            console.log('Has hecho clic en la imagen: ' + image.id); // Muestra un mensaje en la consola

            // Cambiar la fuente de la imagen en el pop-up usando el id de la imagen clickeada
            popupImage.src = image.src;
            
            // Mostrar el pop-up
            popup.style.display = 'flex';
        });
    });

    // Cerrar el pop-up cuando se hace clic en el botón de cerrar
    closeBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    // Cerrar el pop-up si se hace clic fuera de la imagen
    popup.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});
