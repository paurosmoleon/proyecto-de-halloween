window.onload = function () {




    let player = 1;
    let IA = false;
    let gameActive = true
    const cells = document.querySelectorAll('.cell');
    const img_ttt = document.querySelectorAll('.cell_img');

    const Combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    const response = document.getElementById('res')



    let calaveraNotNull = () => {
        if (!localStorage.getItem('calaveras-win')) {
            localStorage.setItem('calaveras-win', 0)
            return 0
        } else {
            return parseInt(localStorage.getItem('calaveras-win'))
        }
    }
    let brujasNotNull = () => {
        if (!localStorage.getItem('brujas-win')) {
            localStorage.setItem('brujas-win', 0)
        } else {
            return parseInt(localStorage.getItem('brujas-win'))
        }
    }

    let calaveraCount = calaveraNotNull
    let brujasCount = brujasNotNull

    response.innerText = 'Calaveras: ' + calaveraCount() + ' Brujas: ' + brujasCount()

    let gameState = ['', '', '', '', '', '', '', '', ''];
    const menu_slider = document.getElementById('juegos_slider')
    const juego = document.getElementById('juego')
    const menu_players = document.getElementById('jugadores')
    const Player_button = document.getElementById('1_player')
    const Players_button = document.getElementById('2_players')
    const tictacto = document.getElementById('titactoe')

   





    tictacto.addEventListener('click', () => {
        menu_players.style.display = 'block';
        menu_slider.style.display = 'none';
    })

    Players_button.addEventListener('click', () => {
        juego.style.display = 'block'
        menu_players.style.display = 'none'
    })

    Player_button.addEventListener('click', () => {
        juego.style.display = 'block'
        menu_players.style.display = 'none'
        IA = true
    })

    for (let i = 0; i < cells.length; i++) {
        const img = img_ttt[i];
        cells[i].addEventListener('click', () => {
            if (gameState[i] === '' && gameActive) {
                if (player === 1) {
                    img.src = '../assets/img/game/2029570.svg';
                    gameState[i] = 'calavera';
                    player = 2;
                    
                    if (IA && player == 2 && Winner() !== 1) {
                        IA_marked()
                    }
                } else if (!IA && player == 2) {
                    img.src = '../assets/img/game/947530-ffffff.svg';
                    gameState[i] = 'bruja';
                    player = 1;
                    Winner();

                }




                console.log(gameState)
            }
        });
    }
    function IA_marked() {
        let perfe = true
        while (perfe) {
            let posicion_ia = Math.floor(Math.random() * 10)
            let img_ia = img_ttt[posicion_ia]
            console.log(posicion_ia)
            if (gameState[posicion_ia] === '') {
                img_ia.src = '../assets/img/game/947530-ffffff.svg'

                gameState[posicion_ia] = 'bruja';

                player = 1
                perfe = false
                Winner()

            }
            if (gameState.every(cell => cell !== '')) {
                perfe = false
            }

        }
    }

    function Winner() {
        for (let combo of Combinations) {
            const [a, b, c] = combo;
            if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {

                response.innerHTML = 'Las ' + '<span class="player">' + gameState[a] + '</span>' + ' han ganado esta partida'
                gameActive = false
                gameState[a] === 'calavera' ? localStorage.setItem('calaveras-win', calaveraCount() + 1) : localStorage.setItem('brujas-win', brujasCount() + 1)
                return 1;
            }

        }

        if (!gameState.includes('')) {
            response.innerHTML = 'Es un empate'

        }
    }
    document.getElementById('boton_restart_juego').addEventListener('click', resetGame)
    function resetGame() {
        response.innerText = 'Calaveras: ' + calaveraCount() + ' Brujas: ' + brujasCount()

        gameState = ['', '', '', '', '', '', '', '', ''];
        img_ttt.forEach(img => img.src = '');
        player = 1;
        gameActive = true
    }

    document.getElementById('boton_restart_score').addEventListener('click', resetScore)
    function resetScore() {
        localStorage.setItem('calaveras-win', 0)
        localStorage.setItem('brujas-win', 0)
        response.innerText = 'Calaveras: ' + calaveraCount() + ' Brujas: ' + brujasCount()

    }


  
}
