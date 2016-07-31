app.controller('controlMenuSuperior', function($scope, $http, $location, $state, $auth) {
if($auth.isAuthenticated())
  {
    $scope.usuarioLogeado=$auth.getPayload();

  }

  
  console.log($scope.usuarioLogeado);

  });