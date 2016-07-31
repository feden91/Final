app.controller('controlGrillaCompras', function($scope, $http,factoryCompra,factoryProducto,$auth) {
if($auth.isAuthenticated())
  {
    $scope.usuarioLogeado=$auth.getPayload();

  }

  
  console.log($scope.usuarioLogeado);
 	
    factoryCompra.mostrarGrilla("otro").then(function(respuesta){
    $scope.ListadoCompras=respuesta;

    // factoryProducto.mostrarGrilla2("otro").then(function(respuesta){
    // $scope.ListadoProductos=respuesta;

  });



$scope.Borrar=function(usuario){

    console.log(usuario);

    var data = compra.codigo;
    
    $http.delete('http://localhost/final/Datos/BorrarCompra/' +data)
   .then(function(respuesta) {       
           //aca se ejetuca si retorno sin errores        
           console.log(respuesta.data);
           // $http.get('http://localhost/PersonasFinal/Datos/traerUsuarios/')
           // .then(bien, mal);

             factoryCompra.mostrarGrilla("otro").then(function(respuesta){
              $scope.ListadoCompras=respuesta;
             });

      },function errorCallback(response) {
           $scope.ListadoCompras= [];
          console.log( response);
     });
}
});









app.factory('factoryCompra',function(servicioCompra){

    var compra={
      // nombre:'Leandro',
      // nombreApellido:'Leandro Cannarozzi',
      mostrarGrilla:function(dato){
          this.nombre=dato;
          return servicioCompra.retornarCompras().then(function(respuesta){
                  return respuesta;

          });
          //console.log("Este es mi nombre: "+dato);
      }
  };
    return compra;
});

app.service('servicioCompra',function($http){
var listado;

  this.retornarCompras=function(){
       
       return  $http.get('http://localhost/final/Datos/traerCompras/')
        .then(function(respuesta) {       

          //$scope.ListadoPersonas = respuesta.data.listado;
          return respuesta.data.listado;

         //console.log(respuesta.data);

      });

  };




});



app.factory('factoryProducto',function(servicioProducto){

    var producto={
      // nombre:'Leandro',
      // nombreApellido:'Leandro Cannarozzi',
      mostrarGrilla2:function(dato){
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