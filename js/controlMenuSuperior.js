app.controller('controlMenuSuperior', function($scope, $http, $location, $state, $auth) {
 if($auth.isAuthenticated())   
  {
    $scope.UsuarioLogueado= $auth.getPayload();
    console.info($scope.UsuarioLogueado);     
  }
  else
  {
    $state.go('login'); 
  } 

  $scope.Salir=function(){
	$auth.logout();
	if($auth.isAuthenticated())   
	{

	}
	else
	{
	  $state.go('login'); 
	} 
  }

  });