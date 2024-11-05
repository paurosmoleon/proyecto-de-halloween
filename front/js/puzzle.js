const puzzleGame = document.querySelector(".img_selec_game:nth-child(2)"); // Selecciona el segundo juego en el slider
const puzzle = document.getElementById("puzzle");
const botonesPuzzle = document.getElementById("botonesPuzzle");
const menu_slider = document.getElementById("juegos_slider"); // Asegúrate de tener esta referencia al menú

puzzleGame.addEventListener("click", () => {
  puzzle.style.display = "grid"; // Muestra el contenedor del puzzle
  botonesPuzzle.style.display = "block"; // Muestra los botones
  menu_slider.style.display = "none"; // Oculta el menú de selección de juegos
});

// Objeto que mapea los números de las fichas a sus imágenes correspondientes
let imagenes = {
  1: "../assets/img/puzzle/parte1.png",
  2: "../assets/img/puzzle/parte2.png",
  3: "../assets/img/puzzle/parte3.png",
  4: "../assets/img/puzzle/parte4.png",
  5: "../assets/img/puzzle/parte5.png",
  6: "../assets/img/puzzle/parte6.png",
  7: "../assets/img/puzzle/parte7.png",
  8: "../assets/img/puzzle/parte8.png",
  "": "../assets/img/puzzle/parte9.png",
};
let matriz = mezclarMatriz(); // Inicializamos la matriz con una mezcla aleatoria
let tablero = document.querySelector(".tablero"); // Seleccionamos el contenedor del tablero
dibujarFichas(); // Dibujamos las fichas en el tablero
addEventListeners(); // Agregamos los eventos de clic a las fichas

// Evento para reiniciar el juego
document.getElementById("btn-reiniciar").addEventListener("click", () => {
  matriz = mezclarMatriz(); // Mezclamos la matriz
  dibujarFichas(); // Redibujamos las fichas
  addEventListeners(); // Agregamos nuevamente los eventos
});

// Evento para establecer una victoria automática
document.getElementById("btn-free-win").addEventListener("click", () => {
  matriz = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "", "8"],
  ]; // Matriz ganadora
  dibujarFichas(); // Redibujamos las fichas
  addEventListeners(); // Agregamos los eventos
});

// Función para dibujar las fichas en el tablero
function dibujarFichas() {
  tablero.innerHTML = ""; // Limpiamos el tablero antes de dibujar
  matriz.forEach((fila) =>
    fila.forEach((elemento) => {
      if (elemento == "") {
        // Si es una posición vacía
        tablero.innerHTML += `
                        <div class="empty">
                            <img src="${imagenes[""]}" alt="Parte vacía" >
                        </div>`; // Dibujamos la ficha vacía
      } else {
        tablero.innerHTML += `
                        <div class="ficha" data-value="${elemento}"> <!-- Almacenamos el valor de la ficha -->
                            <img src="${imagenes[elemento]}" alt="Parte ${elemento}" style="width: 100%; height: 100%; border-radius: 4px;">
                        </div>`; // Dibujamos la ficha con su imagen
      }
    })
  );
}

// Función para agregar los eventos de clic a las fichas
function addEventListeners() {
  let fichas = document.querySelectorAll(".ficha"); // Seleccionamos todas las fichas
  fichas.forEach((ficha) =>
    ficha.addEventListener("click", () => {
      let valorFicha = ficha.getAttribute("data-value"); // Obtenemos el valor de la ficha clicada
      let poscionActual = buscarPosicion(valorFicha); // Buscamos la posición actual de la ficha
      let posicionEmpty = buscarPosicion(""); // Buscamos la posición vacía
      let movimiento = sePuedeMover(poscionActual, posicionEmpty); // Verificamos si se puede mover

      if (movimiento !== false) {
        // Si se puede mover
        actualizarMatriz(valorFicha, poscionActual, posicionEmpty); // Actualizamos la matriz

        let resultado = compararMatriz(); // Comparamos la matriz actual con la final
        if (resultado === true) {
          // Si la matriz es igual a la final
          confetti({
            // Efecto de confeti
            particleCount: 200,
            spread: 180,
          });
        }
        dibujarFichas(); // Redibujamos las fichas
        addEventListeners(); // Agregamos nuevamente los eventos
      }
    })
  );
}

// Función para buscar la posición de un elemento en la matriz
function buscarPosicion(elemento) {
  let filaIndex = 0; // Inicializamos el índice de fila
  let columnaIndex = 0; // Inicializamos el índice de columna
  matriz.forEach((fila, index) => {
    let filaELemento = fila.findIndex((item) => item == elemento); // Buscamos el índice del elemento
    if (filaELemento !== -1) {
      // Si se encuentra el elemento
      filaIndex = index; // Asignamos el índice de fila
      columnaIndex = filaELemento; // Asignamos el índice de columna
    }
  });
  return [filaIndex, columnaIndex]; // Devolvemos la posición [fila, columna]
}

// Función para verificar si se puede mover una ficha
function sePuedeMover(poscionActual, posicionEmpty) {
  // Verificamos si están en la misma columna
  if (poscionActual[1] == posicionEmpty[1]) {
    if (
      poscionActual[0] - posicionEmpty[0] > 1 ||
      poscionActual[0] - posicionEmpty[0] < -1
    ) {
      return false; // No se puede mover si la distancia es mayor a 1
    }
  }
  // Verificamos si están en la misma fila
  else if (poscionActual[0] == posicionEmpty[0]) {
    if (
      poscionActual[1] - posicionEmpty[1] > 1 ||
      poscionActual[1] - posicionEmpty[1] < -1
    ) {
      return false; // No se puede mover si la distancia es mayor a 1
    }
  } else {
    return false; // No se puede mover si no están en la misma fila o columna
  }
}

// Función para actualizar la matriz después de un movimiento
function actualizarMatriz(elemento, poscionActual, posicionEmpty) {
  matriz[poscionActual[0]][poscionActual[1]] = ""; // Colocamos la posición actual como vacía
  matriz[posicionEmpty[0]][posicionEmpty[1]] = elemento; // Asignamos el elemento a la posición vacía
}

// Función para mezclar la matriz
function mezclarMatriz() {
  let matrizMezclada = [[], [], []];
  let array = ["1", "2", "3", "4", "5", "6", "7", "8", ""]; // Array con las piezas
  let mezclarArray = array.sort(() => Math.random() - 0.5); // Mezclamos aleatoriamente el array
  let columna = 0; // Inicializamos el índice de columna
  let fila = 0; // Inicializamos el índice de fila
  mezclarArray.forEach((elemento) => {
    matrizMezclada[fila].push(elemento); // Añadimos el elemento a la fila correspondiente
    if (columna < 2) {
      columna++; // Incrementamos la columna
    } else {
      columna = 0; // Reiniciamos la columna
      fila++; // Pasamos a la siguiente fila
    }
  });
  return matrizMezclada; // Devolvemos la matriz mezclada
}

// Función para comparar la matriz actual con la matriz final
function compararMatriz() {
  let contador = 0; // Contador para contar las coincidencias
  let matrizFinal = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", ""], // Matriz que representa la victoria
  ];

  // Recorremos la matriz actual y la comparamos con la matriz final
  matriz.forEach((fila, filaIndex) => {
    fila.forEach((elemento, columnaIndex) => {
      if (elemento == matrizFinal[filaIndex][columnaIndex]) {
        contador++; // Aumentamos el contador si hay coincidencia
      }
    });
  });
  return contador === 9; // Devolvemos verdadero si todas las piezas coinciden
}
