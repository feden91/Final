<?php

//Cargar Slim
require '../vendor/autoload.php';

//Clases
require '../PHP/clases/Usuarios.php';
require '../PHP/clases/AccesoDatos.php';

require '../PHP/clases/Productos.php';
require '../PHP/clases/Compras.php';

$app = new Slim\App();

// INICIO USUARIOS
$app->get('/traerProductos[/]', function ($request, $response, $args) {
	$listado['listado']= Producto::TraerTodasLosProductos();
    $response->write(json_encode($listado));
    return $response;
});
$app->get('/traerCompras[/]', function ($request, $response, $args) {
    $listado['listado']= compra::TraerTodasLasCompras();
    $response->write(json_encode($listado));
    return $response;
});
$app->get('/traerUsuarios[/]', function ($request, $response, $args) {
    
    $listado['listado']= usuario::TraerTodosLosUsuarios();
    $response->write(json_encode($listado));
    return $response;
});
$app->get('/traerCantUsuarios[/]', function ($request, $response, $args) {
    
    $listado= usuario::cantidadUsuariosclientes();
    $response->write(json_encode($listado));
    return $response;
});
$app->get('/comprasXmes[/]', function ($request, $response, $args) {
    
    $listado= compra::comprasXmes();
    $response->write(json_encode($listado));
    return $response;
});
$app->get('/comprasTot[/]', function ($request, $response, $args) {
    
    $listado= compra::comprasTot();
    $response->write(json_encode($listado));
    return $response;
});

$app->get('/cantProductos[/]', function ($request, $response, $args) {
    
    $listado= producto::cantProductos();
    $response->write(json_encode($listado));
    return $response;
});
$app->get('/comprasTotPagas[/]', function ($request, $response, $args) {
    
    $listado= compra::comprasTotPagas();
    $response->write(json_encode($listado));
    return $response;
});
$app->post('/AltaUsuarios[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    var_dump('helou');
	$unaPersona= usuario::InsetarUnUsuario($respuesta->datos->usuario);

	$response->write(var_dump($unaPersona));
});
$app->post('/AltaCompras[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    var_dump('helou');
    $unaCompra= compra::InsertarUnaCompra($respuesta->datos->compra);

    $response->write(var_dump($unaCompra));
});
$app->post('/ModificarStock[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    var_dump('helou');
    $unStock= producto::ModificarStock($respuesta->datos->compra);

    $response->write(var_dump($unaStock));
});
$app->post('/ModificarEstadoCompra[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    var_dump('helou');
    $unaCompra= compra::ModificarEstadoCompra($respuesta->datos->compra);

    $response->write(var_dump($unaCompra));
});

$app->post('/AltaProductos[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    var_dump('helou');
    $unProducto= Producto::InsertarProducto($respuesta->datos->producto);

    $response->write(var_dump($unProducto));
});
$app->post('/BorrarUsuario/{data}', function($request, $response, $args){
    
    var_dump($args['data']); //Trae el dato
    $unUsuario= usuario::BorrarUnUsuario($args['data']);
    $response->write($args['data']);
});
$app->post('/AltaCompra[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    var_dump('helou');
    $unaCompra= compra::InsertarUnaCompra($respuesta->datos->compra);

    $response->write(var_dump($unaCompra));
});
$app->post('/ModificarProductos[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    $unProducto= Producto::ModificarProducto($respuesta->datos->producto);

    $response->write(var_dump($unProducto));
});
$app->post('/ModificarUsuarios[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    $unUsuario= usuario::ModificarUnUsuario($respuesta->datos->usuario);

    $response->write(var_dump($unUsuario));
});
$app->post('/ModificarStockcom[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    $unStock= Producto::ModificarStockcom($respuesta->datos->compra);

    $response->write(var_dump($unStock));
});

$app->put('/Producto[/]', function($request, $response, $args){
    $respuesta=json_decode($request->getBody());
    $unProducto= Producto::TraerUnaPersona($respuesta->datos->producto);

    $response->write(var_dump($unProducto));
});


$app->post('/Login[/]', function($request, $response, $args){
    
    include_once '../PHP/Sesiones/JWT.php';
    include_once '../PHP/Sesiones/ExpiredException.php';
    include_once '../PHP/Sesiones/BeforeValidException.php';
    include_once '../PHP/Sesiones/SignatureInvalidException.php';

    $objDatos = json_decode($request->getBody());

    $objetoAccesoDato= AccesoDatos::dameUnObjetoAcceso();
    $consulta=$objetoAccesoDato->RetornarConsulta("SELECT * FROM usuario WHERE correo='$objDatos->correo' AND clave='$objDatos->clave'");
    $consulta->execute();
    $idUsuario=$consulta->fetchObject('usuario');


    if($objDatos->correo==$idUsuario->correo && $objDatos->clave==$idUsuario->clave)
    {
        $token=array(
            "dni"=>$idUsuario->dni,
            "correo"=>$idUsuario->correo,
           "tipo"=>$idUsuario->tipo,
            "clave"=>$idUsuario->clave,
            "exp"=>time() + 96000
        );

        $token = Firebase\JWT\JWT::encode($token, 'clave');

        $array['tokenFest2016']=$token; 

        $response->write(json_encode($array));
        return $response;
    }
});


$app->post('/BorrarProducto/{data}', function($request, $response, $args){
    
    var_dump($args['data']); //Trae el dato
    $unaPersona= Producto::BorrarProducto($args['data']);
    $response->write($args['data']);
});
$app->post('/BorrarCompra/{data}', function($request, $response, $args){
    
    var_dump($args['data']); //Trae el dato
    $unaCompra= Compra::BorrarUnaCompra($args['data']);
    $response->write($args['data']);
});
// FIN USUARIOS



$app->run();

