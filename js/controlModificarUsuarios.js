app.controller('controlModificarUsuarios', function($scope, $http, $stateParams,$state, FileUploader, serviceCargadorDeFotos,$auth) {
  $scope.DatoTest="*modificar**";

  if($auth.isAuthenticated())
  {  
       $scope.usuarioLogeado=$auth.getPayload();

  }

  $scope.uploader = new FileUploader({url: 'nexoUsuario.php'});
  $scope.uploader.queueLimit = 1;

  $scope.usuario={};
  $scope.usuario.nombre=$stateParams.nombre ;
  $scope.usuario.apellido= $stateParams.apellido ;
  $scope.usuario.localidad=$stateParams.localidad ;
  $scope.usuario.direccion=$stateParams.direccion;
$scope.usuario.dni= $stateParams.dni ;
  $scope.usuario.correo=$stateParams.correo ;
  $scope.usuario.tipo=$stateParams.tipo ;
  $scope.usuario.clave=$stateParams.clave ;
  $scope.usuario.foto=$stateParams.foto ;
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

  serviceCargadorDeFotos.cargarFoto($scope.usuario.foto, $scope.uploader);

  //$scope.cargarFoto($scope.producto.Foto);

  $scope.uploader.onSuccessItem= function(item, response, status, headers) {

  console.info("Voy a modificar", item, response,status, headers);  

  console.log("persona a guardar:");
  console.log($scope.producto);
  $http.put('http://localhost/final/Datos/ModificarUsuarios/', { datos: {accion :"modificarUsuario",usuario:$scope.usuario}})
  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta.data);
    alert("Se ha modificado correctamente");
    $state.go('signup');

  },function errorCallback(response) {        
    //aca se ejecuta cuando hay errores
    console.log( response);           
  });
 }

  $scope.Guardar=function(){

    
    if($scope.uploader.queue[0].file.name!='pordefecto.png')
    {
      var nombrefoto=$scope.uploader.queue[0].file.name;
      $scope.usuario.foto=nombrefoto;
    }

    $scope.uploader.uploadAll();
  }
});