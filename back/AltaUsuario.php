<?php
session_start();

include 'varGlobales.php';


$id = count($_SESSION['usuarios']) + 1;
$user_form_name = htmlspecialchars($_POST['user']);
$user_form_password = htmlspecialchars($_POST['password']);
$user_form_email = htmlspecialchars($_POST['email']);
$user_form_icon = htmlspecialchars($_POST['icon']);
$user_form_Psecure = htmlspecialchars($_POST['Pseguridad']);
$user_form_Rsecure = htmlspecialchars($_POST['Rseguridad']);
$user_form_privilege = 'user';

switch ($user_form_Psecure) {
    case "1":
        $user_form_Psecure = "¿Cuál es el nombre de tu primer mascota?";
        break;
    case "2":
        $user_form_Psecure = "¿En qué ciudad naciste?";
        break;
    case "3":
        $user_form_Psecure = "¿Cuál fue la marca de tu primer coche?";
        break;
}

AltaUsuario($id, $user_form_name, $user_form_password, $user_form_email, $user_form_privilege, $user_form_icon, $user_form_Psecure, $user_form_Rsecure);
redirect('../front/landing.html');


?>