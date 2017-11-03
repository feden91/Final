app.controller('controlLogin', function($scope, $http, $auth, $state) {
 $scope.Entraradm=function($tipousuario){
  switch ($tipousuario) {
    case "Administrador":
    $scope.correo="algo@algo.com";
    $scope.clave="lanus";
      break;
      case "Cliente":
      $scope.correo="cliente@cliente.com";
      $scope.clave="lanus";
        break;
        case "Empleado":
        $scope.correo="Empleado@Empleado.com";
        $scope.clave="lanus";
          break;
    default:
      break;
  }


  
 }
 
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
         alert("Error de  datos, favor de verificar correo y contraseña");
       } 
     })
     .catch(function(parametro){
       console.info("error", parametro);
     });
   }    
 }


});