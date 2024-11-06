
// Verifica si el nombre ingresado es "jose" y muestra la imagen correspondiente
function verificarNombreJose() {
  const nombre = document.getElementById("checkJose").value; // Obtiene el valor del input con id "checkJose"
  const imagenDiv = document.getElementById("imagenJose"); // Obtiene el div de imagen correspondiente

  // Si el nombre es "jose" (ignorando mayúsculas/minúsculas), muestra la imagen
  if (nombre.toLowerCase() === "jose") {
    imagenDiv.style.display = "block"; // Muestra la imagen
  }
}

// Verifica si el nombre ingresado es "javi" y muestra la imagen correspondiente
function verificarNombreJavi() {
  const nombre = document.getElementById("checkJavi").value; // Obtiene el valor del input con id "checkJavi"
  const imagenDiv = document.getElementById("imagenJavi"); // Obtiene el div de imagen correspondiente

  // Si el nombre es "javi", muestra la imagen
  if (nombre.toLowerCase() === "javi") {
    imagenDiv.style.display = "block"; // Muestra la imagen
  }
}

// Verifica si el nombre ingresado es "juli", "julian" o "julián", y muestra la imagen con un sonido
function verificarNombreJuli() {
  const nombre = document.getElementById("checkJuli").value; // Obtiene el valor del input con id "checkJuli"
  const imagenDiv = document.getElementById("imagenJuli"); // Obtiene el div de imagen correspondiente

  // Si el nombre es uno de los mencionados, muestra la imagen y reproduce un sonido
  if (
    nombre.toLowerCase() === "juli" ||
    nombre.toLowerCase() === "julian" ||
    nombre.toLowerCase() === "julián"
  ) {
    imagenDiv.style.display = "block"; // Muestra la imagen
    var sonido = document.getElementById("sonidoBloodborne"); // Obtiene el sonido de Bloodborne
    sonido.currentTime = 0; // Reinicia el tiempo del sonido
    sonido.play(); // Reproduce el sonido
  }
}

// Muestra nieve y cambia el fondo a Navidad, luego regresa a Halloween
function navidadEnHalloween() {
  var nieve = document.getElementById("wrapNieve"); // Obtiene el contenedor de nieve
  nieve.style.display = "block"; // Muestra la nieve
  // Cambia el fondo a la imagen de Navidad
  document.body.style.backgroundImage =
    "url('./assets/img/fondo_navidad.webp')";
  document.body.style.backgroundSize = "cover"; // Ajusta el tamaño del fondo
  document.body.style.backgroundPosition = "center"; // Centra el fondo
  document.body.style.backgroundRepeat = "no-repeat"; // Evita repetir el fondo
  document.body.style.backgroundAttachment = "fixed"; // Fija el fondo

  // Regresa el fondo a Halloween después de 3 segundos
  setTimeout(() => {
    document.body.style.backgroundImage = "url('./assets/img/fondo.webp')"; // Cambia el fondo a Halloween
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    nieve.style.display = "none"; // Oculta la nieve
  }, 3000);
}

// Reproduce el sonido de un caballo
function sonidoCaballo() {
  var sonido = document.getElementById("sonidoCaballo"); // Obtiene el sonido del caballo
  sonido.currentTime = 0; // Reinicia el tiempo del sonido
  sonido.play(); // Reproduce el sonido
}

// Cambia el fondo y muestra el contenido de la página inicial de la tumba
function tumbaInicio() {
  document.body.style.backgroundImage = "url('./assets/img/fondo.webp')"; // Cambia el fondo
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";
  var tumba = document.getElementsByClassName("prePagina")[0]; // Obtiene el primer elemento con la clase "prePagina"
  tumba.style.display = "none"; // Oculta la tumba
  var contenedor = document.getElementsByClassName("contenedor")[0]; // Obtiene el primer contenedor
  contenedor.style.display = "block"; // Muestra el contenedor
  var header = document.getElementsByTagName("header")[0]; // Obtiene el primer header
  header.style.display = "block"; // Muestra el header
}

// Anima la mano de un zombie y reproduce un sonido al hacerlo
function animarManoZombie() {
  var sonido = document.getElementById("sonidoGrito"); // Obtiene el sonido del grito
  sonido.currentTime = 0; // Reinicia el tiempo del sonido
  sonido.volume = 0.2; // Ajusta el volumen
  sonido.play(); // Reproduce el sonido

  var manoZombie = document.getElementById("manoZombie"); // Obtiene la mano zombie
  manoZombie.style.display = "block"; // Muestra la mano zombie

  manoZombie.classList.add("animar"); // Agrega la clase de animación a la mano zombie

  // Al finalizar la animación, oculta la mano y llama a tumbaInicio
  manoZombie.onanimationend = function () {
    manoZombie.style.display = "none"; // Oculta la mano zombie
    tumbaInicio(); // Llama a la función para cambiar a la página de inicio de la tumba
  };
}

// Reproduce sonidos ambientales como trueno y lobo
function sonidoAmbiente() {
  var sonido = document.getElementById("sonidoTrueno"); // Obtiene el sonido del trueno
  sonido.volume = 0.2; // Ajusta el volumen
  sonido.currentTime = 0; // Reinicia el tiempo del sonido
  sonido.play(); // Reproduce el sonido

  var sonido2 = document.getElementById("sonidoLobo"); // Obtiene el sonido del lobo
  sonido2.currentTime = 0; // Reinicia el tiempo del sonido
  sonido2.play(); // Reproduce el sonido
}

// Reproduce un sonido específico y muestra un fondo
function centro() {
  var sonido = document.getElementById("sonidoPatito"); // Obtiene el sonido del patito
  sonido.volume = 0.2; // Ajusta el volumen
  sonido.currentTime = 0; // Reinicia el tiempo del sonido
  sonido.play(); // Reproduce el sonido
}

// Muestra una imagen y reproduce un sonido al hacer clic en la parte inferior izquierda
function abajoIzq() {
  document.getElementById("fondoBackground").style.display = "block"; // Muestra el fondo
  document.getElementById("fondoBackground").style.backgroundSize = "cover";
  document.getElementById("fondoBackground").style.backgroundPosition = "center";
  document.getElementById("fondoBackground").style.backgroundRepeat = "no-repeat";
  document.getElementById("fondoBackground").style.backgroundAttachment = "fixed";

  const random = Math.random(); // Genera un número aleatorio

  let screamerImg; // Variable para la imagen del screamer
  let screamerAudio; // Variable para el audio del screamer

  // Selecciona aleatoriamente una imagen y un sonido de screamer
  if (random < 0.5) {
    screamerImg = document.getElementById("screamer-win"); // Imagen de screamer ganador
    screamerAudio = document.getElementById("sonidoBloodborne"); // Sonido de Bloodborne
  } else if (random < 0.7) {
    screamerImg = document.getElementById("screamer-img"); // Primera imagen de screamer
    screamerAudio = document.getElementById("sonidoGrito"); // Sonido de grito
  } else if (random < 0.9) {
    screamerImg = document.getElementById("screamer-img-3"); // Tercera imagen de screamer
    screamerAudio = document.getElementById("sonidoGrito"); // Sonido de grito
  } else {
    screamerImg = document.getElementById("screamer-img-2"); // Segunda imagen de screamer
    screamerAudio = document.getElementById("sonidoGrito"); // Sonido de grito
  }

  screamerImg.style.display = "block"; // Muestra la imagen del screamer

  screamerAudio.play(); // Reproduce el sonido del screamer
  screamerAudio.currentTime = 0; // Reinicia el tiempo del sonido

  // Oculta la imagen y el fondo después de 2 segundos
  setTimeout(() => {
    screamerImg.style.display = "none"; // Oculta la imagen del screamer
    document.getElementById("fondoBackground").style.display = "none"; // Oculta el fondo
  }, 2000);
}

// Muestra una imagen y reproduce un sonido al hacer clic en la parte inferior derecha
function abajoDer() {
  document.getElementById("fondoBackground").style.display = "block"; // Muestra el fondo

  const random = Math.random(); // Genera un número aleatorio

  let screamerImg; // Variable para la imagen del screamer
  let screamerAudio; // Variable para el audio del screamer

  // Selecciona aleatoriamente una imagen y un sonido de screamer
  if (random < 0.5) {
    screamerImg = document.getElementById("screamer-win"); // Imagen de screamer ganador
    screamerAudio = document.getElementById("sonidoBloodborne"); // Sonido de Bloodborne
  } else if (random < 0.7) {
    screamerImg = document.getElementById("screamer-img"); // Primera imagen de screamer
    screamerAudio = document.getElementById("sonidoGrito"); // Sonido de grito
  } else if (random < 0.9) {
    screamerImg = document.getElementById("screamer-img-3"); // Tercera imagen de screamer
    screamerAudio = document.getElementById("sonidoGrito"); // Sonido de grito
  } else {
    screamerImg = document.getElementById("screamer-img-2"); // Segunda imagen de screamer
    screamerAudio = document.getElementById("sonidoGrito"); // Sonido de grito
  }

  screamerImg.style.display = "block"; // Muestra la imagen del screamer

  screamerAudio.play(); // Reproduce el sonido del screamer
  screamerAudio.currentTime = 0; // Reinicia el tiempo del sonido

  // Oculta la imagen y el fondo después de 2 segundos
  setTimeout(() => {
    screamerImg.style.display = "none"; // Oculta la imagen del screamer
    document.getElementById("fondoBackground").style.display = "none"; // Oculta el fondo
  }, 2000);
}
window.addEventListener('DOMContentLoaded', (event) => {
  // Verifica si se llegó desde otra página
  if (localStorage.getItem('fromOtherPage') === 'true') {
    // Oculta el div prePagina
    const prePaginaDiv = document.querySelector('.prePagina');
    if (prePaginaDiv) {
      document.body.style.backgroundImage = "url('./assets/img/fondo.webp')"; // Cambia el fondo
      document.body.style.backgroundSize = "cover";
      document.body.style.backgroundPosition = "center";
      document.body.style.backgroundRepeat = "no-repeat";
      document.body.style.backgroundAttachment = "fixed";
      var tumba = document.getElementsByClassName("prePagina")[0]; // Obtiene el primer elemento con la clase "prePagina"
      tumba.style.display = "none"; // Oculta la tumba
      var contenedor = document.getElementsByClassName("contenedor")[0]; // Obtiene el primer contenedor
      contenedor.style.display = "block"; // Muestra el contenedor
      var header = document.getElementsByTagName("header")[0]; // Obtiene el primer header
      header.style.display = "block"; // Muestra el header
    }
    // Limpia el indicador para que no afecte futuras visitas directas
    localStorage.removeItem('fromOtherPage');
  }
});




var width = window.innerWidth;
var height = window.innerHeight;
setInterval(()=>{
    width = window.innerWidth;
    height = window.innerHeight;
    
},3000)

const botoMenuCatalogo = document.getElementById('botonDesplegable')
const MenuDesplegable = document.getElementById('listaDesplegable')

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



