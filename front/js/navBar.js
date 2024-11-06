


    var width = window.innerWidth;
    var height = window.innerHeight;
    setInterval(()=>{
        width = window.innerWidth;
        height = window.innerHeight;
        
    },3000)
  
    const botoMenuCatalogo = document.getElementById('botonDesplegable')
    const MenuDesplegable = document.getElementById('listaDesplegable')
    



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
   
    const iconoNav = document.getElementById('iconoNavBar')
    const nav = document.getElementById('navabar')
    
    
  
  
    var navbarOpen = false
    iconoNav.addEventListener('click',() => {
            if (navbarOpen === false){
                if (width <= 480){
                    nav.style.height = `${nav.clientHeight + 130}px`
                    navbarOpen = true
                }
            } else {
                nav.style.height = `${nav.clientHeight  - nav.clientHeight}px`
                navbarOpen = false
            }
        
       
    
        
    })




const text_login = document.getElementById('login_text')
const img_login = document.getElementById('img_login')

fetch('http://127.0.0.1/proyecto-JJJ/back/infoCliente.php')
        .then(response =>{
            return response.json()
        } )
        .then(data => {
            console.log(data)
            
            if (data['name']) {
                text_login.innerText = data['name'] 
                text_login.href = 'http://127.0.0.1/proyecto-JJJ//front/Components/settings.html'
            } 
            if (data['icon']){
                img_login.style.display = 'block'
                img_login.src = data['icon']
            }
           
        })
        .catch(error => {
            
            console.error('Hubo un problema con la solicitud Fetch:', error);
        });

    
 
    