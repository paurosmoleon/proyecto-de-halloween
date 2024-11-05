window.onload = function(){

const cerrarSesion = document.getElementById('cerrarSesion')

cerrarSesion.addEventListener('click',() => {
    fetch('../../back/cerrarSesion.php')
        .then(response => {
            return response
        })
        .then(rr => {
            if(rr.ok){
                window.location.href = '../landing.html'
            }
        })
        .catch(err => {
            console.log(err)
        })
})



const img = document.getElementById('imgProfile')
const name = document.getElementById('nameProfile')
const create_acount = document.getElementById('date')
const email = document.getElementById('correo')
fetch('http://127.0.0.1/proyecto-JJJ/back/infoCliente.php')
    .then(response => {
        return response.json();
    })
    .then(data => {
       
        img.src = data['icon']
        name.innerText = "Nombre: "+data['name']
        email.innerText = "Correo: "+data['email']
        create_acount.innerText = "Fecha de creacion: "+data['date']
    })
    .catch(err => {
        console.log(err)
    })
}
