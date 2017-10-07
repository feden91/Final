app.controller('controlProducto', function($scope, $auth,$http, $stateParams,$state, FileUploader, serviceCargadorDeFotos) {


if($auth.isAuthenticated())
  {
    $scope.usuarioLogeado=$auth.getPayload();

  }


 
  $scope.producto={};
  $scope.producto.codigo=$stateParams.codigo ;
  $scope.producto.nombre= $stateParams.nombre ;
  $scope.producto.descripcion=$stateParams.descripcion ;
  $scope.producto.foto=$stateParams.foto;
$scope.producto.stock= $stateParams.stock ;
  $scope.producto.precio=$stateParams.precio ;





 
});