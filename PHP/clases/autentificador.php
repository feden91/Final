<?php

 include_once '../PHP/JWT.php';
    include_once '../PHP/ExpiredException.php';
    include_once '../PHP/BeforeValidException.php';
    include_once '../PHP/SignatureInvalidException.php';

    $objDatos = json_decode($request->getBody());

    $objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
    $consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM usuario WHERE correo='$objDatos->correo' AND clave='$objDatos->clave'");
    $consulta->execute();
    $idUsuario=$consulta->fetchObject('usuario');


    if($objDatos->correo==$idUsuario->correo && $objDatos->clave==$idUsuario->clave)
    {
        $token=array(
            "correo"=>$idUsuario->correo,
            "apellido"=>$idUsuario->apellido,
            "nombre"=>$idUsuario->nombre,
            "dni"=>$idUsuario->dni,
            "clave"=>$idUsuario->clave,
            "exp"=>time() + 96000
        );

        $token = Firebase\JWT\JWT::encode($token, 'clave');

        $array['tokenFest2016']=$token;

        $response->write(json_encode($array));
        return $response;
    

?>