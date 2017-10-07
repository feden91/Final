app.controller('controlSignUp', function($scope, $http, FileUploader, $state, serviceCargadorDeFotos) {
 $scope.DatoTest="**singUp**";
 $scope.uploader = new FileUploader({url: 'PHP/nexo.php'});
      $scope.uploader.queueLimit = 1; // indico cuantos archivos permito cargar
            

//inicio las variables
  $scope.persona={};
  $scope.persona.nombre= "" ;
  $scope.persona.apellido= "" ;
  $scope.persona.dni= "" ;
  $scope.persona.localidad= "" ;
  $scope.persona.correo="";
  $scope.persona.clave="";
  $scope.persona.direccion="";
  
  $scope.persona.foto="pordefecto.png";
  
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

  console.info("Voy a guardar", item, response,status, headers);

  $http.post('PHP/nexo.php', { datos: {accion :"insertaru",persona:$scope.persona}})
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
