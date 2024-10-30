<?php
    session_start();
    include "varGlobales.php";

    $email = $_POST['email'];
    
   
    $redirect = "http://127.0.0.1/proyecto-JJJ/front/Components/newPass.html";
    mail($email, "Cambiar Contraseña", "Haz clic en este enlace para cambiar tu contraseña: $redirect","FROM: julian.ms@yahoo.com");
?>