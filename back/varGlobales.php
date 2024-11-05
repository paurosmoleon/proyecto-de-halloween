<?php
session_start();


if (!isset($_SESSION['usuarios'])) {
    $_SESSION['usuarios'] = [];
}
$usuarios = &$_SESSION['usuarios'];

function AltaUsuario($id, $name, $password, $email, $privilege, $icon, $Psecure, $Rsecure)
{

    global $usuarios;

    foreach ($usuarios as $usuario) {
        if ($usuario['name'] === $name) {
            return;
        }

    }

    $nuevoUser = [
        "id" => $id,
        "name" => $name,
        "password" => $password,
        "email" => $email,
        "privilege" => $privilege,
        "icon" => $icon,
        "Pregunta_seguridad" => $Psecure,
        "Respuesta_seguridad" => $Rsecure
    ];


    $usuarios[] = $nuevoUser;






    $_SESSION['current_user'] = $nuevoUser;



}
function CambiarContraseña($email)
{
    global $usuarios;
    $redirect = "http://127.0.0.1/proyecto-JJJ/front/Components/newPass.html";
    mail($email, "Cambiar Contraseña", "Haz clic en este enlace para cambiar tu contraseña: $redirect","FROM: julianms@yahoo.com");
    echo "Email enviado " . $email . " ";
    // foreach ($usuarios as $usuario) {
    //     if ($usuario['email'] === $email) {
    //         // Verificar si la función mail() devuelve true o false
    //     }

    // }
}

function CurrentUser($name, $password)
{
    global $usuarios;

    foreach ($usuarios as $usuario) {
        foreach ($usuario as $key) {

            if ($usuario['name'] === $name && $usuario['password'] === $password) {
                $_SESSION['current_user'] = $usuario;

            }
        }
    }
}

function redirect($url)
{
    header('Location:' . $url);
    die();

}

?>