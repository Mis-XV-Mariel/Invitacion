
     window.addEventListener('load',iniciar,false);

     /*Contador inicializado en cero*/
     var contador=0;

     function iniciar(){
         setInterval('cambiarImg()',3000);
     }

        var obj=document.getElementById('slider');
     var obj2=obj.getElementsByTagName('img');

     function cambiarManual(sentido)
     {
         if (sentido=="DER") {
             obj2[contador].style.opacity=0;
             if (contador<obj2.length-1) 
             {
                 contador++;
                 obj2[contador].style.opacity=1;
                 console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
             }
             else
             {
                 contador=0;
                 obj2[contador].style.opacity=1;
                 console.log('Contador vale ' + contador + ' Longitud ' + obj2.length);
             }
         }
         else if (sentido=="IZQ") 
         {
             obj2[contador].style.opacity=0;
             if (contador!=0) 
             {
                 contador--;
                 obj2[contador].style.opacity=1;
             }
             else
             {
                 contador=obj2.length-1;
                 obj2[contador].style.opacity=1;
             }
         }
     }

     function cambiarImg(){	        

         if(contador==obj2.length){
             for(var i=0; i<obj2.length; i++){
                 obj2[i].style.opacity='0';
                 contador--;
             }
             obj2[contador].style.opacity='1';
         }
         else
         {
             obj2[contador].style.opacity='1';
             contador++;
         }
         
     }


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