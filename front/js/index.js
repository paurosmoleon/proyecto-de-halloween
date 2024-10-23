function verificarNombreJose() {
  const nombre = document.getElementById("checkJose").value;
  const imagenDiv = document.getElementById("imagenJose");

  if (nombre === "Jose") {
    imagenDiv.style.display = "block";
  }
}
function verificarNombreJavi() {
  const nombre = document.getElementById("checkJavi").value;
  const imagenDiv = document.getElementById("imagenJavi");

  if (nombre === "Javi") {
    imagenDiv.style.display = "block";
  }
}
function verificarNombreJuli() {
  const nombre = document.getElementById("checkJuli").value;
  const imagenDiv = document.getElementById("imagenJuli");

  if (nombre === "Juli") {
    imagenDiv.style.display = "block";
    var sonido = document.getElementById("sonidoBloodborne");
    sonido.currentTime = 0;
    sonido.play();
  }
}
function navidadEnHalloween() {
  document.body.style.backgroundImage =
    "url('./assets/img/fondo_navidad.webp')";
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.body.style.backgroundRepeat = "no-repeat";
  document.body.style.backgroundAttachment = "fixed";

  setTimeout(() => {
    document.body.style.backgroundImage = "url('./assets/img/fondo.webp')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
  }, 3000);
}

function sonidoCaballo() {
  var sonido = document.getElementById("sonidoCaballo");
  sonido.currentTime = 0;
  sonido.play();
}
function tumbaInicio() {
  document.body.style.backgroundImage = "url('./assets/img/fondo.webp')";
  var tumba = document.getElementsByClassName("prePagina")[0]; 
  tumba.style.display = "none";
  var contenedor = document.getElementsByClassName("contenedor")[0]; 
  contenedor.style.display = "block";
  var header = document.getElementsByTagName("header")[0]; 
  header.style.display = "block";
}
function animarManoZombie() {
  const manoZombie = document.getElementById("manoZombie");
  manoZombie.style.display = "block"; // Muestra la mano de zombie

  // Inicia la animación
  manoZombie.classList.add("animar");

  // Espera a que la animación termine
  manoZombie.addEventListener('animationend', function() {
    // Oculta la mano de zombie después de la animación
    manoZombie.style.display = "none";
    
    // Llama a la función tumbaInicio
    tumbaInicio();
  }, { once: true }); // Se asegura de que se ejecute solo una vez
}
