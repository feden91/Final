app.controller('controlGrillaCompras', function($scope, $http,factoryCompra,factoryProducto,$auth) {
if($auth.isAuthenticated())
  {
    $scope.usuarioLogeado=$auth.getPayload();

  }

 
  console.log($scope.usuarioLogeado);
$(function () {

  $('#cmd').click(function () {
    var doc = new jsPDF();
    doc.addHTML($('#conten')[0], 15, 15, {
      'background': '#fff',
    }, function() {
      doc.save('Pedidos.pdf');
    });
  });
});
                // var imgData = canvas.toDataURL('image/png'); 
                // $("#imgRes").attr("src", imgData);             
                // var doc = new jsPDF('p', 'mm');
                // doc.addImage(imgData, 'PNG', 10, 10);
           
           
                  // doc.save('sample-file.pdf');
            
//         });
//     });
// });
// });
    factoryCompra.mostrarGrilla("otro").then(function(respuesta){
    $scope.ListadoCompras=respuesta;
    

    
   // factoryProducto.mostrarGrilla2("otro").then(function(respuesta){
   //  $scope.ListadoProductos=respuesta;

  });



$scope.Borrar=function(compra){

    console.log(compra);

    var data = compra.id;
    
    $http.delete('http://localhost/final/Datos/BorrarCompra/' +data)
   .then(function(respuesta) {       
           //aca se ejetuca si retorno sin errores        
           console.log(respuesta.data);
           // $http.get('http://localhost/PersonasFinal/Datos/traerUsuarios/')
           // .then(bien, mal);

             factoryCompra.mostrarGrilla("otro").then(function(respuesta){
              $scope.ListadoCompras=respuesta;
             });

      },function errorCallback(response) {
           $scope.ListadoCompras= [];
          console.log( response);
     });
}
});









app.factory('factoryCompra',function(servicioCompra){

    var compra={
      // nombre:'Leandro',
      // nombreApellido:'Leandro Cannarozzi',
      mostrarGrilla:function(dato){
          this.nombre=dato;
          return servicioCompra.retornarCompras().then(function(respuesta){
                  return respuesta;

          });
          //console.log("Este es mi nombre: "+dato);
      }
  };
    return compra;
});

app.service('servicioCompra',function($http){
var listado;

  this.retornarCompras=function(){
       
       return  $http.get('http://localhost/final/Datos/traerCompras/')
        .then(function(respuesta) {       

          //$scope.ListadoPersonas = respuesta.data.listado;
          return respuesta.data.listado;

         //console.log(respuesta.data);

      });

  };
  });