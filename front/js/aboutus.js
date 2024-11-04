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