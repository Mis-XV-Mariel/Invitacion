
document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".carousel-item");
    const video = document.getElementById("carousel-video");
    let currentIndex = 0;
    let transitionDuration = 1000; // 0.5 segundos de transición
    let imageDuration = 3000; // 2 segundos para cada imagen
    let videoDuration = 5000; // 5 segundos para el video

    function nextItem() {
        items[currentIndex].classList.remove("active");

        // Incrementamos el índice y lo reiniciamos si es necesario
        currentIndex = (currentIndex + 1) % items.length;

        items[currentIndex].classList.add("active");

        // Si el siguiente elemento es el video, usamos su duración
        if (items[currentIndex].querySelector("video")) {
            video.play();
            setTimeout(nextItem, videoDuration);
        } else {
            video.pause(); // Pausa el video cuando se cambian las imágenes
            setTimeout(nextItem, imageDuration);
        }
    }

    // Comienza el carrusel
    setTimeout(nextItem, videoDuration);
});


     const cuentaRegresivaFecha = new Date("November 30, 2024 00:00:00").getTime();

     const temporizador = setInterval(() => {
         const ahora = new Date().getTime();
         const distancia = cuentaRegresivaFecha - ahora;
     
         const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
         const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
         const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
         const segundos = Math.floor((distancia % (1000 * 60)) / 1000);
     
         document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
         document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
         document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
         document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');
     
         if (distancia < 0) {
             clearInterval(temporizador);
             document.querySelector('.temporizador').innerHTML = "¡Tiempo Agotado!";
         }
     }, 1000);


     document.addEventListener('copy', function(e) {
        e.preventDefault();
    });


    document.addEventListener('DOMContentLoaded', function() {
        var audio = document.getElementById('backgroundMusic');
        var startTime = 21; // Segundo por defecto si no se ha guardado un tiempo anterior

        // Recuperar el tiempo guardado del localStorage si existe
        if (localStorage.getItem('audioCurrentTime')) {
            startTime = parseFloat(localStorage.getItem('audioCurrentTime'));
        }
        audio.currentTime = startTime;

        // Detección de compatibilidad para reproducir automáticamente sin interacción
        function attemptPlayAudio() {
            audio.play().then(function() {
                // Reproducción automática exitosa; quitar mute después de 1 segundo
                setTimeout(function() {
                    audio.muted = false; // Quitar mute
                    console.log("Música de fondo reproduciéndose sin interacción.");
                }, 1000); // Retraso para evitar restricciones
            }).catch(function(error) {
                console.log("Reproducción automática bloqueada: " + error);
            });
        }

        // Guardar el tiempo de reproducción en localStorage cada 5 segundos
        setInterval(function() {
            localStorage.setItem('audioCurrentTime', audio.currentTime);
        }, 5000); // Actualiza cada 5 segundos

        // Intentar reproducir automáticamente al cargar
        attemptPlayAudio();

        // Si es bloqueado, volver a intentar tras una interacción
        document.addEventListener('click', attemptPlayAudio, { once: true });
        document.addEventListener('scroll', attemptPlayAudio, { once: true });
        document.addEventListener('touchstart', attemptPlayAudio, { once: true });
    });
