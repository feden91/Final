<?php

//Cargar Slim
require '../vendor/autoload.php';

//Clases
require '../PHP/usuarios.php';
require '../PHP/AccesoDatos.php';


$app = new Slim\App();

// INICIO USUARIOS
$app->get('/traerUsuarios[/]', function ($request, $response, $args) {
	$listado['listado']= usuario::TraerTodosLosUsuarios();
    $response->write(json_encode($listado));
    return $response;
});

$app->post('/AltaUsuarios[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    var_dump('helou');
	$unaPersona= usuario::InsetarUnUsuario($respuesta->datos->usuario);

	$response->write(var_dump($unaPersona));
});

$app->put('/ModificarUsuarios[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    $unaPersona= usuario::ModificarUnUsuario($respuesta->datos->usuario);

    $response->write(var_dump($unaPersona));
});

$app->post('/Login[/]', function($request, $response, $args){
    
    include_once '../PHP/JWT.php';
    include_once '../PHP/ExpiredException.php';
    include_once '../PHP/BeforeValidException.php';
    include_once '../PHP/SignatureInvalidException.php';

    $objDatos = json_decode($request->getBody());

    $objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
    $consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM usuarios WHERE Dni='$objDatos->dni' AND Clave='$objDatos->clave'");
    $consulta->execute();
    $idUsuario=$consulta->fetchObject('usuario');


    if($objDatos->dni==$idUsuario->Dni && $objDatos->clave==$idUsuario->Clave)
    {
        $token=array(
            "dni"=>$idUsuario->Dni,
            "apellido"=>$idUsuario->Apellido,
            "nombre"=>$idUsuario->Nombres,
            "clave"=>$idUsuario->Clave,
            "exp"=>time() + 96000
        );

        $token = Firebase\JWT\JWT::encode($token, 'clave');

        $array['tokenFest2016']=$token;

        $response->write(json_encode($array));
        return $response;
    }
});

$app->delete('/BorrarUsuario/{data}', function($request, $response, $args){
    
    var_dump($args['data']); //Trae el dato
    $unaPersona= usuario::BorrarUnUsuario($args['data']);
    $response->write($args['data']);
});

// FIN USUARIOS



$app->run();

