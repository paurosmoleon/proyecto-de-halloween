<?php
    session_start();
    include "varGlobales.php";

    $email = $_POST['email'];
    
   
    CambiarContraseña($email);

?>