app.controller('controlGrillaRodados', function($scope, $http, $stateParams,factoryProducto,$auth,$filter) {
 if($auth.isAuthenticated())
   {  
        $scope.usuarioLogeado=$auth.getPayload();

   }

  
   console.log($scope.usuarioLogeado);
  var a=$stateParams.param1; 
   console.log(a);
   $scope.tipe=$stateParams.param1;

    factoryProducto.mostrarGrilla("otro").then(function(respuesta){
    $scope.ListadoProductos=respuesta;
  });

  $scope.refreshData = function() {
    $scope.ListadoProductos.data = $filter('filter')($scope.data, $scope.searchText);
  };

$scope.Borrar=function(usuario){

    console.log(usuario);

    var data = producto.codigo;
    
    $http.delete('http://localhost/final/Datos/BorrarProducto/' +data)
   .then(function(respuesta) {       
           //aca se ejetuca si retorno sin errores        
           console.log(respuesta.data);
           // $http.get('http://localhost/PersonasFinal/Datos/traerUsuarios/')
           // .then(bien, mal);

             factoryProducto.mostrarGrilla("otro").then(function(respuesta){
              $scope.ListadoProductos=respuesta;
             });

      },function errorCallback(response) {
           $scope.ListadoProductos= [];
          console.log( response);
     });
}
});




app.factory('factoryProducto',function(servicioProducto){

    var producto={
      // nombre:'Leandro',
      // nombreApellido:'Leandro Cannarozzi',
      mostrarGrilla:function(dato){
          this.nombre=dato;
          return servicioProducto.retornarProductos().then(function(respuesta){
                  return respuesta;

          });
          //console.log("Este es mi nombre: "+dato);
      }
  };
    return producto;
});

app.service('servicioProducto',function($http){
var listado;

  this.retornarProductos=function(){
      return  $http.get('http://localhost/final/Datos/traerProductos/')
        .then(function(respuesta) {       

          //$scope.ListadoPersonas = respuesta.data.listado;
          return respuesta.data.listado;

         //console.log(respuesta.data);

      });

  };


});