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
const text = document.getElementById('nameProfile')
fetch('http://127.0.0.1/proyecto-JJJ/back/infoCliente.php')
    .then(response => {
        return response.json();
    })
    .then(data => {
       
        img.src = data['icon']
        text.innerText = data['name']
    })
    .catch(err => {
        console.log(err)
    })
