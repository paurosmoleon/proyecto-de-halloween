

const text_login = document.getElementById('login_text')
const img_login = document.getElementById('img_login')

fetch('http://127.0.0.1/proyecto-JJJ/back/infoCliente.php')
        .then(response =>{
            return response.json()
        } )
        .then(data => {
            console.log(data)
            if (data['icon']){
                img_login.src = data['icon']
            }else {
                img_login.style.display = 'none'
            }
            if (data['name']) {
                text_login.innerText = data['name'] 
                text_login.href = './Components/settings.html'
            } 
        })
        .catch(error => {
            
            console.error('Hubo un problema con la solicitud Fetch:', error);
        });

    
 