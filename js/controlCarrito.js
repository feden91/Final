app.controller('controlAltaProducto', function($scope, $http, FileUploader, $state, serviceCargadorDeFotos) {

  $scope.uploader = new FileUploader({url: 'nexoUsuario.php'});
  $scope.uploader.queueLimit = 1;
      $scope.producto={};
    $scope.producto.foto="pordefecto.png";

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

  serviceCargadorDeFotos.cargarFoto($scope.producto.foto, $scope.uploader);

  //$scope.cargarFoto($scope.producto.Foto);

  $scope.uploader.onSuccessItem= function(item, response, status, headers) {

  console.info("Voy a guardar", item, response,status, headers);

  console.log("persona a guardar:");
  console.log($scope.producto);
  $http.post('http://bicicleteriaalsina.000webhostapp.com/Datos/AltaProductos/', { datos: {accion:"altaProducto",producto:$scope.producto}})
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
