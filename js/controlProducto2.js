app.controller('controlProducto2', function($scope, $http,$auth, $stateParams,$state, FileUploader, serviceCargadorDeFotos) {

if($auth.isAuthenticated())
  {
    $scope.usuarioLogeado=$auth.getPayload();

  }
else
{
alert("debe loguearse para porder comprar");
$state.go('login');
}

 
  $scope.producto={};
  $scope.producto.codigo=$stateParams.codigo ;
  $scope.producto.nombre= $stateParams.nombre ;
  $scope.producto.descripcion=$stateParams.descripcion ;
  $scope.producto.foto=$stateParams.foto;
$scope.producto.stock= $stateParams.stock ;
  $scope.producto.precio=$stateParams.precio ;


  $scope.compra={};
  $scope.compra.codigo=$scope.producto.codigo;
  $scope.compra.precio=$scope.producto.precio;
$scope.compra.fecha= new Date() ;
 $scope.compra.cantidad=$stateParams.cantidad;
var t1=$scope.compra.precio;
var t2=$scope.compra.cantidad;
var tota=t1*t2;
$scope.compra.total=tota;
   if($auth.isAuthenticated())
  {
  $scope.compra.dni= $scope.usuarioLogeado.dni;
  }

  $scope.compra.cantidad= new Date();
  // $scope.cargarFoto=function(nombreDeFoto){

  //   var direccion="fotos/"+nombreDeFoto;

  //   $http.get(direccion, {responseType: "blob"})
  //   .then(
  //     function(respuesta){
  //       var mimetype=respuesta.data.type;
  //       var archivo=new File([respuesta.data], direccion, {type: mimetype});
  //       var fotoObtenida= new FileUploader.FileItem($scope.uploader, {});
  //       fotoObtenida._file= archivo;
  //       fotoObtenida.file={};
  //       fotoObtenida.file=new File([respuesta.data], nombreDeFoto, {type:mimetype});
  //       $scope.uploader.queue.push(fotoObtenida);
  //     }
  //   );
  // }

  

  //$scope.cargarFoto($scope.producto.Foto);

 $scope.Guardar= function(item, response, status, headers) {

  console.info("Voy a guardar", item, response,status, headers);

  console.log("compra a guardar:");
  console.log($scope.compra);
  $http.post('http://localhost/final/Datos/AltaCompras/', { datos: {accion:"confirmarCompra",compra:$scope.compra}})
  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta);
    
    $state.go('grillaCompra');

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });
  }

  //  $scope.Guardar=function(){

  // // if($scope.uploader.queue[0].file.name!='pordefecto.png')
  // // {
  // //   var nombrefoto=$scope.uploader.queue[0].file.name;
  // //   $scope.producto.foto=nombrefoto;
  // // }
  // // $scope.uploader.uploadAll();
  // }



 
});