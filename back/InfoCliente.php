<?php
session_start();
header('Content-Type: application/json');

$users = $_SESSION['current_user'];

echo json_encode($users ?? NULL)


    ?>