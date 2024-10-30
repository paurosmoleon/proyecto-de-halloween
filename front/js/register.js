
window.onload = function() {
    const icons = document.querySelectorAll('#icons')
    const input = document.getElementById('inputIcons')
   icons.forEach(icon => {
    
    icon.addEventListener('click',() => {
        
        icons.forEach(i => i.classList.remove('selected'))

       icon.classList.add('selected')

       input.value =  icon.src

       console.log(input.value)
    })
   });
}