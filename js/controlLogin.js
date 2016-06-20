app.controller('controlLogin', function($scope, $http, $auth, $state) {
   $scope.DatoTest="**Login**";
 if($auth.isAuthenticated())
  {
    $state.go('grilla');
  }
  else
  {
    $scope.Entrar=function(){
      console.log($scope.correo);

      $auth.login({correo:$scope.correo,clave:$scope.clave})
      .then(function(respuestaAuth){
         
        console.info(respuestaAuth);
        console.info("datos auth en menu" ,$auth.isAuthenticated(),$auth.getPayload());
        //$auth.isAuthenticated()

        if($auth.isAuthenticated())   
        {   
          $state.go('grilla');   
        }
        else
        {
          alert("Error de  datos, favor de verificar");
        } 
      })
      .catch(function(parametro){
        console.info("error", parametro);
      });
    }    
  }
  


});