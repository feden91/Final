app.controller('controlLogin', function($scope, $http, $auth, $state,$timeout) {
 $scope.Entraradm=function($tipousuario){
  switch ($tipousuario) {
    case "Administrador":
    $scope.correo="admin@algo.com";
    $scope.clave="lanus";
      break;
      case "Cliente":
      $scope.correo="cliente@algo.com";
      $scope.clave="lanus";
        break;
        case "Empleado":
        $scope.correo="Empleado@algo.com";
        $scope.clave="lanus";
          break;
    default:
      break;
  }


  
 }
 
  $scope.$on('$viewContentLoaded',function(){
 



      $scope.myValue = false;
      $timeout(function() {
         $scope.myValue = true;
      }, 3000);
      console.log($scope.myValue);
      
       $scope.myValue2 = true;
      $timeout(function() {
         $scope.myValue2 = false;
      }, 3000);
      console.log($scope.myValue2);
   });

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