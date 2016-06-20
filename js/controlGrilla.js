app.controller('controlGrilla', function($scope, $http) {
  	$scope.DatoTest="**grilla**";
 	
    function bien(respuesta)
    {
        $scope.ListadoProductos = respuesta.data.listado;
        console.log(respuesta.data);
    }

    function mal(respuesta)
    {
        $scope.ListadoProductos= [];
        console.log( response);
    }

  $http.get('PHP/nexo.php', { params: {accion :"traer"}})
  .then(bien, mal);

 	$scope.Borrar=function(producto){
		console.log("borrar"+producto);



$http.post("PHP/nexo.php",{datos:{accion :"borrar",producto:producto}},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}})
 .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);


        $http.get('PHP/nexo.php', { params: {accion :"traer"}})
  .then(function(respuesta) {       

         $scope.ListadoProductos = respuesta.data.listado;
         console.log(respuesta.data);

    },function errorCallback(response) {
         $scope.ListadoProductos= [];
        console.log( response);
   });


    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

/*
     $http.post('PHP/nexo.php', 
      headers: 'Content-Type': 'application/x-www-form-urlencoded',
      params: {accion :"borrar",persona:persona})
    .then(function(respuesta) {       
         //aca se ejetuca si retorno sin errores        
         console.log(respuesta.data);

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });

*/
 	}




 	$scope.Modificar=function(id){
 		
 		console.log("Modificar"+id);
 	}





});
