<?php
    session_start();
    include "varGlobales.php";
    $id = $_POST['id'];
    $password = $_POST['password'];

    CambiarContraseña($id,$password);


?> 