app.controller('controlRodados', function($scope, $http, $auth,$state) {
$scope.Entrara=function($r){
  var a="r12";
   $state.go('grillarodados',{param1:$r});

  
 }
});