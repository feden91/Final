app.controller('controlPago', function($scope, $http, $stateParams,$state, FileUploader, serviceCargadorDeFotos) {
 
  

 $scope.compra={}
 $scope.compra.id=$stateParams.id;
  $scope.compra.fecha=$stateParams.fecha;
 var estad="Preparandose para envio";
  $scope.compra.estado=estad;
  $scope.compra.dni=$stateParams.dni;
  $scope.compra.codigo=$stateParams.codigo;
  $scope.compra.cantidad=$stateParams.cantidad;
  $scope.compra.precio=$stateParams.precio;
  $scope.compra.total=$stateParams.total;
  console.log($scope.compra);
  $scope.CambiarEstado= function(item, response, status, headers) {

  
  console.info("Voy a modificar");  

  console.log("estado a guardar:");
  console.log($scope.compra);
  $http.post('http://localhost/final/Datos/ModificarEstadoCompra/', { datos: {compra:$scope.compra}})
  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta.data);
    var a={};
    a=$scope.compra;
    console.log( a);
    $state.go('Ticket',{obj:a});

  },function errorCallback(response) {        
    //aca se ejecuta cuando hay errores
    console.log( response);           
  });
 }

  
});