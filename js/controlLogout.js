app.controller('controlLogout', function($scope, $http, $auth, $state) {
  if($auth.isAuthenticated())
  {
    $auth.logout();
    $state.go('login'); 
  }
  else
  {
   $state.go('grilla');     
  }


});