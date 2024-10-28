<?php
session_start();
include "varGlobales.php";

$user = $_POST['user'];
$password = $_POST['password'];


CurrentUser($user, $password);

redirect('../front/landing.html');
?>