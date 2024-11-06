
window.onload = function() {
    const icons = document.querySelectorAll('#icons')
    const input = document.getElementById('inputIcons')
   icons.forEach(icon => {
    
    icon.addEventListener('click',() => {
        
        icons.forEach(i => i.classList.remove('selected'))

       icon.classList.add('selected')

       input.value =  icon.src

       console.log(input.value)
    })
   });

   const error_not_found = new Popup({
    id: "my-popup",
    hideTitle: "true",
    content: `Ya hay un usuario creadoo!!!!!`,
    disableScroll: false,
    backgroundColor:  "#bf3d00",
    textColor: '#ffffff',
    widthMultiplier: '0.6',
     textShadow: '0px 0px 5px #000000',
    closeColor: '#ffffff'

});


const accept = new Popup({
    id: "my-popup",
    hideTitle: "true",
    content: `Tu usuario ha sido creado`,
    disableScroll: false,
    backgroundColor:  "#bf3d00",
    textColor: '#ffffff',
    widthMultiplier: '0.6',
     textShadow: '0px 0px 5px #000000',
    closeColor: '#ffffff'

});
    document.getElementById('submitButton').addEventListener('click',(e)=> {
        e.preventDefault()
        fetch('http://127.0.0.1/proyecto-JJJ/back/AltaUsuario.php',{
            method: 'POST',
            body: new URLSearchParams({
                user: document.getElementsByName('user')[0].value,
                password: document.getElementsByName('password')[0].value,
                email: document.getElementsByName('email')[0].value,
                icon: document.getElementsByName('icon')[0].value,
                Pseguridad: document.getElementsByName('Pseguridad')[0].value,
                Rseguridad: document.getElementsByName('Rseguridad')[0].value
            })
        })
            .then(response => {
                return  response
            })
            .then(data => {
              if (data.status === 400){
                error_not_found.show();
              }else {
                accept.show()
                setTimeout(() => {
                    window.location.href = 'http://127.0.0.1/proyecto-JJJ/front/landing.html'
                },3000)
              }
            })
            .catch(err => {
                console.log('ASs: ',err)
                if (err.response){
                    console.log('res: ',err.response)
                }
            })
    })
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
}