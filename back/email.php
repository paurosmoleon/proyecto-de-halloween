<?php
    session_start();
    include "varGlobales.php";

    $text = $_POST['text'];
    $message = $_POST['message'];
 
    mail('julian.ms@yahoo.com', $text, $message,"FROM:julian.ms@yahoo.com ");
?>