app.controller('controlGrillaUsuarios', function($scope, $http,factoryUsuarios,$auth) {
 if($auth.isAuthenticated())
   {  
        $scope.usuarioLogeado=$auth.getPayload();

   }

  
   console.log($scope.usuarioLogeado);
 	


    factoryUsuarios.mostrarGrilla("otro").then(function(respuesta){
    $scope.ListadoUsuarios=respuesta;
  });



$scope.Borrar=function(usuario){

    console.log(usuario);

    var data = usuario.id;
    
    $http.delete('http://localhost/final/Datos/BorrarUsuario/' +data)
   .then(function(respuesta) {       
           //aca se ejetuca si retorno sin errores        
           console.log(respuesta.data);
           // $http.get('http://localhost/PersonasFinal/Datos/traerUsuarios/')
           // .then(bien, mal);

             factoryUsuarios.mostrarGrilla("otro").then(function(respuesta){
              $scope.ListadoUsuarios=respuesta;
             });

      },function errorCallback(response) {
           $scope.ListadoUsuarios= [];
          console.log( response);
     });
}
});




app.factory('factoryUsuarios',function(servicioUsuario){

    var usuario={
      // nombre:'Leandro',
      // nombreApellido:'Leandro Cannarozzi',
      mostrarGrilla:function(dato){
          this.nombre=dato;
          return servicioUsuario.retornarUsuarios().then(function(respuesta){
                  return respuesta;

          });
          //console.log("Este es mi nombre: "+dato);
      }
  };
    return usuario;
});

app.service('servicioUsuario',function($http){
var listado;

  this.retornarUsuarios=function(){
      return  $http.get('http://localhost/final/Datos/traerUsuarios/')
        .then(function(respuesta) {       

          //$scope.ListadoPersonas = respuesta.data.listado;
          return respuesta.data.listado;

         //console.log(respuesta.data);

      });

  };


});