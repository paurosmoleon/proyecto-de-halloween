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
   document.body.style.backgroundImage ="url('./assets/img/fondo_navidad.webp')";
   document.body.style.backgroundSize ="cover";
   document.body.style.backgroundPosition ="center";
   document.body.style.backgroundRepeat ="no-repeat";
   document.body.style.backgroundAttachment ="fixed";

    setTimeout(() => {
        document.body.style.backgroundImage = "url('./assets/img/fondo.webp')"; 
        document.body.style.backgroundSize ="cover";
        document.body.style.backgroundPosition ="center";
        document.body.style.backgroundRepeat ="no-repeat";
        document.body.style.backgroundAttachment ="fixed";
    }, 3000); 

 }
  function sonidoCaballo() {
        var sonido = document.getElementById("sonidoCaballo");
        sonido.currentTime = 0; 
        sonido.play(); 
    }
  
  function sonidoBloodborne() {

    }