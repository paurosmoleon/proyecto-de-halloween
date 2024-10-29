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

    function addToFavorites(productName, recipeId) {
        const existingItem = Array.from(favoritesList.children).find(
            (item) => item.textContent.includes(productName)
        );

        if (!existingItem) {
            const listItem = document.createElement("li");

            // Crear un enlace para la receta
            const link = document.createElement("a");
            link.textContent = productName;
            link.href = `#${recipeId}`; // Asume que el ID de la receta es el mismo que el href
            link.onclick = (e) => {
                e.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
                const recipeElement = document.getElementById(recipeId);
                toggle(recipeId); // Mostrar la receta
                recipeElement.scrollIntoView({ behavior: 'smooth' }); // Desplazarse a la receta
            };

            const removeBtn = document.createElement("button");
            removeBtn.textContent = "💖";
            removeBtn.onclick = () => {
                favoritesList.removeChild(listItem);
            };

            listItem.appendChild(link);
            listItem.appendChild(removeBtn);
            favoritesList.appendChild(listItem);
        }
    }

    const favoriteButtons = document.querySelectorAll(".favorite-btn");
    favoriteButtons.forEach((btn) => {
        btn.addEventListener("click", () => {
            const productCard = btn.closest(".card");
            const productName = productCard.querySelector("h1").textContent;
            const recipeId = productCard.querySelector("a").getAttribute("href").substring(1); // Obtener el ID de la receta
            addToFavorites(productName, recipeId);
        });
    });
});
