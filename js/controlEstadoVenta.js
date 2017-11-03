app.controller('controlEstadoVenta', function($scope, $http, $stateParams,$state, FileUploader, serviceCargadorDeFotos) {
 
  

 $scope.compra={}
 $scope.compra.id=$stateParams.id;
  $scope.compra.fecha=$stateParams.fecha;
  $scope.compra.estado="";
  $scope.compra.dni=$stateParams.dni;
  $scope.compra.codigo=$stateParams.codigo;
  $scope.compra.cantidad=$stateParams.cantidad;
  $scope.compra.precio=$stateParams.precio;
  $scope.compra.total=$stateParams.total;
  $scope.CambiarEstado= function(item, response, status, headers) {

    console.log($scope.compra)
  console.info("Voy a modificar");  

  console.log("estado a guardar:");
  console.log($scope.compra);
  $http.post('http://localhost/final/Datos/ModificarEstadoCompra/', { datos: {compra:$scope.compra}})
  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta.data);
    
    $state.go('comprasUsuarios');

  },function errorCallback(response) {        
    //aca se ejecuta cuando hay errores
    console.log( response);           
  });
 }

  
});