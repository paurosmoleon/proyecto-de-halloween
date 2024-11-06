function showPersonaContent(personaId) {
    const personaContent = document.getElementById(personaId);
    // Si el contenido ya está visible, lo ocultamos
    if (personaContent.style.display === "block") {
      personaContent.style.display = "none";
    } else {
      // Oculta todos los demás contenidos
      document.querySelectorAll(".persona-content").forEach((content) => {
        content.style.display = "none";
      });
      // Muestra el contenido correspondiente al ID proporcionado
      personaContent.style.display = "block";
    }
  }

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