
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
                return  response.json()
            })
            .then(data => {
                console.log(data.message)
            })
            .catch(err => {
                console.log('ASs: ',err)
                if (err.response){
                    console.log('res: ',err.response)
                }
            })
    })
}