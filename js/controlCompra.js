app.controller('controlCompra', function($scope,$stateParams, $http,$auth, serviceCargadorDeFotos, FileUploader, $state) {


      
 if($auth.isAuthenticated())
  {
    $scope.usuarioLogeado=$auth.getPayload();

  }
$scope.producto={};
  $scope.producto.codigo=$stateParams.codigo ;
  $scope.producto.nombre= $stateParams.nombre ;
  $scope.producto.descripcion=$stateParams.descripcion ;
  $scope.producto.foto=$stateParams.foto;
$scope.producto.stock= $stateParams.stock ;
  $scope.producto.precio=$stateParams.precio ;

  $scope.compra={};
  $scope.compra.codigo=$scope.producto.codigo ;
  
$scope.compra.fecha= $stateParams.fecha ;
  $scope.compra.dni= $scope.usuarioLogeado.dni;
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
  $http.post('http://bicicleteriaalsina.000webhostapp.com/Datos/AltaCompras/', { datos: {accion:"altaCompra",compra:$scope.compra}})
  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta);
    alert("Se ha ingresado correctamente");
    $state.go('grilla');

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
