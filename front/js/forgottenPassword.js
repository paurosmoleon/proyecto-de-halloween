
window.onload = function() {
    const Pseguridad = document.getElementById('Pregunta_seguridad')
    fetch('http://127.0.0.1/proyecto-JJJ/back/infoCliente.php')
    .then(response =>{
        return response.json()
    } )
    .then(data => {
        console.log(data)

        Pseguridad.innerText = data['Pregunta_seguridad']
        document.querySelector('form').addEventListener('submit',(ev) => {
            ev.preventDefault()
            if (data['Respuesta_seguridad'] == document.getElementsByName('Rpregunta')[0].value){
                fetch('http://127.0.0.1/proyecto-JJJ/back/cambiarContrasenia.php',{
                    method: 'POST',
                    body: new URLSearchParams({ 
                        id: data['id'],
                        password: document.getElementsByName('password')[0].value
                    })
                })
                .then(response => response)
                .then(data => {
                   
                        Pseguridad.innerText = 'La pregunta de seguridad es correcta'
                        Pseguridad.style.color = 'lightgreen'
                        setTimeout(() => {
                            window.location.href = 'http://127.0.0.1/proyecto-JJJ/front/landing.html'
                        },3000)
                    
                })
                .catch(error => {
                    console.error('Error al enviar la solicitud:', error);
                });
                
            
            } else {
                Pseguridad.innerText = 'Esa Respuesta es incorrecta'
                Pseguridad.style.color = 'red'
                setTimeout(() => {
                    Pseguridad.innerText = data['Pregunta_seguridad']
                    Pseguridad.style.color = 'white'
                },3000)
            }

        })
    })
    .catch(error => {
        
        console.error('Hubo un problema con la solicitud Fetch:', error);
    });

}



// Verifica si el localStorage tiene el valor de la visita
window.addEventListener("DOMContentLoaded", (event) => {
    if (localStorage.getItem("visitedLanding") !== "true") {
      // Oculta el div prePagina si no se accedió desde landing.html
      const prePaginaDiv = document.querySelector(".prePagina");
      if (prePaginaDiv) {
        prePaginaDiv.style.display = "none";
      }
    }
  });