app.controller('controlModificar', function($scope, $http, $stateParams, FileUploader) {
  $scope.DatoTest="**Modificar**";

  $scope.uploader = new FileUploader({url: 'PHP/nexo.php'});
  $scope.uploader.queueLimit = 1;

        $scope.persona={};
        $scope.persona.id=$stateParams.id ;
        $scope.persona.nombre= $stateParams.nombre ;
        $scope.persona.dni=$stateParams.dni ;
        $scope.persona.clave= $stateParams.clave ;
        $scope.persona.sexo= $stateParams.sexo ;
        $scope.persona.apellido= $stateParams.apellido ;
        $scope.persona.foto=$stateParams.foto;

  $scope.cargarFoto=function(nombreDeFoto){

    var direccion="fotos/"+nombreDeFoto;

    $http.get(direccion, {responseType: "blob"})
    .then(

      function(respuesta){
        var mimetype=respuesta.data.type;
        var archivo=new File([respuesta.data], direccion, {type: mimetype});
        var fotoObtenida= new FileUploader.FileItem($scope.uploader, {});
        fotoObtenida._file= archivo;
        fotoObtenida.file={};
        fotoObtenida.file=new File([respuesta.data], nombreDeFoto, {type:mimetype});
        $scope.uploader.queue.push(fotoObtenida);
      }


      );

  }

  $scope.cargarFoto($scope.persona.foto);

  $scope.uploader.onSuccessItem= function(item, response, status, headers) {

  console.info("Voy a modificar", item, response,status, headers);

    console.log($scope.persona);
    $http.post('PHP/nexo.php', { datos: {accion :"modificar",persona:$scope.persona}})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });


  }

  $scope.Guardar=function(){

    if($scope.uploader.queue[0].file.name!='pordefecto.png')
    {
      var nombrefoto=$scope.uploader.queue[0].file.name;
      $scope.persona.foto=nombrefoto;
    }

    $scope.uploader.uploadAll();
  }
  
});
