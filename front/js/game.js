window.onload = function() {

    

        const tablero = [
            [0,1,2],
            [3,4,5],
            [6,7,8]
        ]
        let index = 0
        let player = 1
        const cells = document.querySelectorAll('.cell')
        const img_ttt = document.querySelectorAll('.cell_img')
        tablero.forEach( row =>{
            row.forEach(column => {
                const cell = cells[index]
                const img = img_ttt[index]
               cell.addEventListener('click',() => {
                    if(img_ttt){
                         console.log(img.src)
                        if (img.src === '')
                        {

                            if (player === 1) {
                               img.src = '../assets/img/game/2029570.svg'
                               player = 2
                            } else { 
                              img.src = '../assets/img/game/947530-ffffff.svg'
                              player = 1
                            }
                        }
                    }
               })
               index++
            })
        } )


    
}