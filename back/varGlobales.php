    <?php
    session_start();


    if (!isset($_SESSION['usuarios'])) {
        $_SESSION['usuarios'] = [];
    }
    $usuarios = &$_SESSION['usuarios'];

    function AltaUsuario($id, $name, $password, $email, $privilege, $icon, $Psecure, $Rsecure){
        global $usuarios;

        foreach ($usuarios as $usuario) {
            if ($usuario['name'] === $name) {
                http_response_code(400);
                return 1;
            }

        }

        $nuevoUser = [
            "id" => $id,
            "date" => date("Y-m-d"),
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
        
        return 0;
    }
    function CambiarContraseña($id,$pass){
        global $usuarios;
        foreach ($usuarios as $usuario) {
            if ($usuario['id'] == $id){
                $usuario['password'] = $pass;
                $usuarios[$id] = $usuario;
                $_SESSION['current_user']['password'] = $pass;
            }
        }

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