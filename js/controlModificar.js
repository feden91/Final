app.controller('controlModificar', function($scope, $http, $stateParams,$state, FileUploader, serviceCargadorDeFotos) {
  $scope.DatoTest="*modificar**";


  $scope.uploader = new FileUploader({url: 'nexoUsuario.php'});
  $scope.uploader.queueLimit = 1;

  $scope.producto={};
  $scope.producto.codigo=$stateParams.codigo ;
  $scope.producto.nombre= $stateParams.nombre ;
  $scope.producto.descripcion=$stateParams.descripcion ;
  $scope.producto.foto=$stateParams.foto;
$scope.producto.stock= $stateParams.stock ;
  $scope.producto.precio=$stateParams.precio ;
  $scope.producto.tipo=$stateParams.tipo ;
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


  //     );

  // }

  serviceCargadorDeFotos.cargarFoto($scope.producto.foto, $scope.uploader);

  //$scope.cargarFoto($scope.producto.Foto);

  $scope.uploader.onSuccessItem= function(item, response, status, headers) {

  console.info("Voy a modificar", item, response,status, headers);  

  console.log("persona a guardar:");
  console.log($scope.producto);
  $http.post('http://bicicleteriaalsina.000webhostapp.com/Datos/ModificarProductos/',{ datos: {accion :"modificarProducto",producto:$scope.producto}})
  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta.data);
    alert("Se ha ingresado correctamente");
    $state.go('grilla');

  },function errorCallback(response) {        
    //aca se ejecuta cuando hay errores
    console.log( response);           
  });
 }

  $scope.Guardar=function(){

    
    if($scope.uploader.queue[0].file.name!='pordefecto.png')
    {
      var nombrefoto=$scope.uploader.queue[0].file.name;
      $scope.producto.foto=nombrefoto;
    }

    $scope.uploader.uploadAll();
  }
});