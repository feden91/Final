app.controller('controlMenu', function($scope, $http, $auth,$state) {
  $scope.DatoTest="**Menu**";
 /* $auth.login({nombre:"natalia", clave:"algo"});

  console.info("datos auth en menu" , $auth.isAuthenticated(), $auth.getPayload());

  if($auth.isAuthenticated())
  {
    $state.go("alta");
  }
  else
  {
    $state.go("menu");
  }
  */
});