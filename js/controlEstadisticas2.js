app.controller('controlEstadisticas2', function($scope, $http, $location, $state, $auth) {
    if($auth.isAuthenticated())
      {
        $scope.usuarioLogeado=$auth.getPayload();
    
      }
      var a=null;
      var b=null;
      var c=null;
      var d=null;
      var e=null;
  $scope.$on('$viewContentLoaded',function(){
    
    $http.get('http://localhost/final/Datos/comprasTotPagas/')
    .then((response)=>{


e=response.data.Cant4;
console.log(e);
}).catch(()=>{
    console.log("error al traer los datos")
  });
    $http.get('http://localhost/final/Datos/cantProductos/')
    .then((response)=>{


d=response.data.Cant3;
console.log(d);
}).catch(()=>{
    console.log("error al traer los datos")
  });
    $http.get('http://localhost/final/Datos/comprasTot/')
    .then((response)=>{


c=response.data.sum1;
console.log(c);

    $http.get('http://localhost/final/Datos/comprasXmes/')
    .then((response)=>{


b=response.data.Cant2;
console.log(b);
    
      $http.get('http://localhost/final/Datos/traerCantUsuarios/')
      .then((response)=>{


a=response.data.Cant;
console.log(a);


Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Estadisticas'
    },
    xAxis: {
        categories: ['Dinero ingresado por ventas','Cantidad Usuarios', 'Cantidad ventas', 'Cantidad de productos', 'Cantidad de ventas que fueron Pagadas']
    },
    credits: {
        enabled: false
    },
    series: [ {
        name: 'Bicicleteria',
        data: [c,a, b, d, e]
    }]
});


      }).catch(()=>{
        console.log("error al traer los datos")
      });
   
    }).catch(()=>{
        console.log("error al traer los datos")
      });
    }).catch(()=>{
        console.log("error al traer los datos")
      });
    
    });
      console.log($scope.usuarioLogeado);
     
    
    });