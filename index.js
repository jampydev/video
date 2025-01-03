

document.querySelectorAll(".nose").forEach((button) => {

    button.addEventListener("click", function () {
        
        window.open("https://porno.com", "_blank");
    });
});





    // Intentar activar el sonido automáticamente
    const video = document.getElementById('video');

    // Checar si autoplay con sonido está bloqueado
    video.play().then(() => {
        console.log('Video está reproduciendo con sonido.');
    }).catch(error => {
        console.log('El navegador bloqueó la reproducción automática con sonido.');
        alert('Por favor, haz clic en el video para activar el sonido.');
    });
