function verificarNombreJose() {
  const nombre = document.getElementById("checkJose").value;
  const imagenDiv = document.getElementById("imagenJose");

  if (nombre.toLowerCase() === "jose") {
    imagenDiv.style.display = "block";
  }
}
function verificarNombreJavi() {
  const nombre = document.getElementById("checkJavi").value;
  const imagenDiv = document.getElementById("imagenJavi");

  if (nombre.toLowerCase() === "javi") {
    imagenDiv.style.display = "block";
  }
}
function verificarNombreJuli() {
  const nombre = document.getElementById("checkJuli").value;
  const imagenDiv = document.getElementById("imagenJuli");

  if (nombre.toLowerCase() === "juli") {
    imagenDiv.style.display = "block";
    var sonido = document.getElementById("sonidoBloodborne");
    sonido.currentTime = 0;
    sonido.play();
  }
}
function navidadEnHalloween() {
  var nieve = document.getElementById("snow_wrap");
  nieve.style.display = "block";
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
    nieve.style.display = "none";
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
  var sonido = document.getElementById("sonidoGrito");
  sonido.currentTime = 0;
  sonido.volume = 0.2;
  sonido.play();

  var manoZombie = document.getElementById("manoZombie");
  manoZombie.style.display = "block";

  manoZombie.classList.add("animar");

  manoZombie.onanimationend = function () {
    manoZombie.style.display = "none";
    tumbaInicio();
  };
}

function sonidoAmbiente() {
  var sonido = document.getElementById("sonidoTrueno");
  sonido.volume = 0.2;
  sonido.currentTime = 0;
  sonido.play();

  var sonido2 = document.getElementById("sonidoLobo");
  sonido2.currentTime = 0;
  sonido2.play();
}
