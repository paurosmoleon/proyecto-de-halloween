<?php
session_start();



include 'varGlobales.php';

header('Content-Type: application/json');  // Esto asegura que se devuelvan datos JSON
header("Access-Control-Allow-Origin: *");  // Permitir todas las fuentes
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");  // Permitir métodos necesarios
header("Access-Control-Allow-Headers: Content-Type, Authorization");

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
 $result = AltaUsuario($id, $user_form_name, $user_form_password, $user_form_email, $user_form_privilege, $user_form_icon, $user_form_Psecure, $user_form_Rsecure);
 if ($result  == 1){
    echo http_build_query(['status' => 'error', 'message' => 'El usuario ya existe.']);
 }else {
    echo http_build_query(['statu' =>'succes', 'message' => 'El usuario y ha sido creado.']);
    
 }
 exit;

?>