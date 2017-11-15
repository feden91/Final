app.controller('controlContacto', function($scope, $http, FileUploader, $state, $log, $timeout,$auth, $window) {
 $scope.$on('$viewContentLoaded',function(){
 
 
 
 if($auth.isAuthenticated())
  {
    $scope.usuarioLogeado=$auth.getPayload();

$scope.dir="";
$scope.dir= $scope.usuarioLogeado.direccion +','+ $scope.usuarioLogeado.localidad +','+'Buenos Aires';
console.log($scope.dir);
$window.dire=$scope.dir;
  }
     else{$window.dire="";}
 });

});