localStorage.setItem('username', 'Test');

const username = localStorage.getItem('username');


if (username) {
    document.getElementById('greeting').innerText = `¡Hola, ${username}!`;
} else {
    document.getElementById('greeting').innerText = "¡Hola, visitante!";
}