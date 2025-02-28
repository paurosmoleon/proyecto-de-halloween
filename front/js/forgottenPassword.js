
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
                fetch('http://127.0.0.1/proyecto-JJJ/back/AltaUsuario.php',{
                    method: 'POST',
                    body: new URLSearchParams({ 
                        id: data['id'],
                        name: data['name'],
                        password: document.getElementById('')[0].value,
                        email: data['email'],
                        icon: data['icon'],
                        Pseguridad: data['Pregunta_seguridad'],
                        Rseguridad: data['Respuesta_seguridad'],
                        privilege: data['privilege']
                    })
                })

                Pseguridad.innerText = 'La pregunta de seguridad es correcta'
                Pseguridad.style.color = 'lightgreen'
                setTimeout(() => {
                    window.location.href = 'http://127.0.0.1/proyecto-JJJ/front/landing.html'
                }, 3000);
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



