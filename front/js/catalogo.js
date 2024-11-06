function toggle(obj) {
    var obj = document.getElementById(obj);
    if (obj.style.display == "block") obj.style.display = "none";
    else obj.style.display = "block";
}

function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar");
    const favoritesList = document.createElement("ul");
    favoritesList.id = "favorites-list";
    sidebar.querySelector(".sidebar-menu").appendChild(favoritesList);

    window.toggleMenu = function() {
        sidebar.classList.toggle("open");
    };

    function addToFavorites(productName, recipeId, button) {
        const existingItem = Array.from(favoritesList.children).find(
            (item) => item.textContent.includes(productName)
        );

        if (!existingItem) {
            const listItem = document.createElement("li");

            // Crear un enlace para la receta
            const link = document.createElement("a");
            link.textContent = productName;
            link.href = `#${recipeId}`;
            link.onclick = (e) => {
                e.preventDefault(); 
                const recipeElement = document.getElementById(recipeId);
                toggle(recipeId); 
                recipeElement.scrollIntoView({ behavior: 'smooth' }); 
            };

            // Botón para eliminar de favoritos
            const removeBtn = document.createElement("button");
            removeBtn.textContent = "❌";
            removeBtn.onclick = () => {
                favoritesList.removeChild(listItem);
                button.textContent = "💔";  // Cambia el texto del botón de vuelta al estado original
            };

            listItem.appendChild(link);
            listItem.appendChild(removeBtn);
            favoritesList.appendChild(listItem);

            // Cambia el texto del botón original a una estrella
            button.textContent = "🎃";
        }
    }

    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    favoriteButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const productCard = btn.closest(".card");
            const productName = productCard.querySelector("h1").textContent;
            const recipeId = productCard.querySelector("a").getAttribute("href").substring(1); // Obtener el ID de la receta
            addToFavorites(productName, recipeId, btn); // Pasar el botón actual a la función
        });
    });
});

// crea un pop up 
window.onload = function(){
    const myPopup = new Popup({
        id: "my-popup",
        hideTitle: "true",
        content: `Articulo añadido a favoritos!!👻`,
        disableScroll: false,
        backgroundColor:  "#bf3d00",
        textColor: '#ffffff',
        widthMultiplier: '0.6',
         textShadow: '0px 0px 5px #000000',
        closeColor: '#ffffff'

    });
    const añadir = document.querySelectorAll('.favorite-btn')
    
    for (let i = 0; i < añadir.length; i++) {
        añadir[i].addEventListener('click', () => {
            console.log('si')
            myPopup.show();
        });
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