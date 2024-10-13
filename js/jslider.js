document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".carousel-item");
    let currentIndex = 0;
    let imageDuration = 3000; // 3 segundos para cada imagen
    let transitionDuration = 500; // 0.5 segundos de transición

    function nextItem() {
      // Elimina la clase active del elemento actual
      items[currentIndex].classList.remove("active");

      // Incrementa el índice y lo reinicia si es necesario
      currentIndex = (currentIndex + 1) % items.length;

      // Añade la clase active al siguiente elemento
      items[currentIndex].classList.add("active");
    }

    // Cambia la imagen cada 3.5 segundos (3 segundos + 0.5 segundos de transición)
    setInterval(nextItem, imageDuration + transitionDuration);
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
        var startTime = 21; // Segundo por defecto

        // Recuperar el tiempo guardado del localStorage si existe
        if (localStorage.getItem('audioCurrentTime')) {
            startTime = parseFloat(localStorage.getItem('audioCurrentTime'));
        }
        audio.currentTime = startTime;

        // Crear un botón dinámicamente
        var playButton = document.createElement('button');
        playButton.textContent = '¡Presióname!';
        playButton.style.position = 'absolute';
        playButton.style.top = '20px'; // Colocado al principio de la página
        playButton.style.left = '50%';
        playButton.style.transform = 'translateX(-50%)';
        playButton.style.padding = '15px';
        playButton.style.width = '280px';
        playButton.style.height = '280px';
        playButton.style.borderRadius = '50%'; // Hacer el botón redondo
        playButton.style.backgroundColor = '#BF6CFC'; // Verde amigable
        playButton.style.color = 'white'; 
        playButton.style.marginTop = '170px'; 
        playButton.style.fontSize = '16px';
        playButton.style.border = 'none';
        playButton.style.cursor = 'pointer';
        playButton.style.boxShadow = '0px 4px 6px rgba(0, 0, 0, 0.1)';
        playButton.style.zIndex = '1000';  // Asegurarse de que esté por encima de otros elementos
        playButton.style.transition = 'all 0.3s ease'; // Animación suave al interactuar

        // Agregar la animación al botón (cambio de tamaño y color para llamar la atención)
        playButton.style.animation = 'pulse 2s infinite'; // Animación infinita cada 2 segundos

        // Estilo para el hover (cuando el usuario pasa el mouse sobre el botón)
        playButton.addEventListener('mouseover', function() {
            playButton.style.backgroundColor = '#BF6CFC'; // Cambia a un verde más oscuro al pasar el mouse
        });

        playButton.addEventListener('mouseout', function() {
            playButton.style.backgroundColor = '#4CAF50'; // Vuelve al color original
        });

        document.body.appendChild(playButton); // Agregar el botón al body

        // Reproducir música al hacer clic en el botón
        playButton.addEventListener('click', function() {
            audio.play().then(function() {
                audio.muted = false; // Quitar mute después de la reproducción
                playButton.style.display = 'none'; // Ocultar el botón después de hacer clic
            }).catch(function(error) {
                console.log("Error en la reproducción automática: " + error);
            });
        });

        // Guardar el tiempo de reproducción en localStorage cada 5 segundos
        setInterval(function() {
            localStorage.setItem('audioCurrentTime', audio.currentTime);
        }, 5000);

        // Definir la animación @keyframes en el estilo
        var style = document.createElement('style');
        style.innerHTML = `
            @keyframes pulse {
                0% {
                    transform: translateX(-50%) scale(1);
                    background-color: #BF6CFC;
                }
                50% {
                    transform: translateX(-50%) scale(1.2);
                    background-color: #76c7c0; /* Cambio de color a un verde más claro */
                }
                100% {
                    transform: translateX(-50%) scale(1);
                    background-color: #BF6CFC;
                }
            }
        `;
        document.head.appendChild(style); // Agregar el estilo de animación al documento
    });
