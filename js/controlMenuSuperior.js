app.controller('controlMenuSuperior', function($scope, $http, $location, $state, $auth) {
  $scope.Entrara=function($r){
    var a="r12";
     $state.go('grillarodados',{param1:$r});
  
    
   }

  });