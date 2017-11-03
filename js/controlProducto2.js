app.controller('controlProducto2', function($scope, $http,$auth, $stateParams,$state, FileUploader, serviceCargadorDeFotos) {

if($auth.isAuthenticated())
  {
    $scope.usuarioLogeado=$auth.getPayload();

  }
else
{
alert("debe loguearse para porder comprar");
$state.go('login');
}

 
  $scope.producto={};
  $scope.producto.codigo=$stateParams.codigo ;
  $scope.producto.nombre= $stateParams.nombre ;
  $scope.producto.descripcion=$stateParams.descripcion ;
  $scope.producto.foto=$stateParams.foto;
$scope.producto.stock= $stateParams.stock ;
  $scope.producto.precio=$stateParams.precio ;

// var o=new Date();
// var m =o.getUTCMonth()+1;

// var d =o.getUTCDate();
// var y =o.getUTCFullYear();
// newdate= y+"/"+m+"/"+d
  $scope.compra={};
  $scope.compra.codigo=$scope.producto.codigo;
  $scope.compra.precio=$scope.producto.precio;
  var o=new Date();
  var m =o.getUTCMonth()+1;
  
  var d =o.getUTCDate();
  var y =o.getUTCFullYear();
  newdate= y+"/"+m+"/"+d
   

  $scope.compra.fecha= newdate ;
 $scope.compra.cantidad=$stateParams.cantidad;
var t1=$scope.compra.precio;
console.log(t1);
var t2=$scope.compra.cantidad;
console.log(t2);
var tota=parseInt(t1)*parseInt(t2);
console.log(tota);
$scope.compra.total=tota;
$scope.compra.estado="Pendiente de pago";
  $scope.compra.dni= $scope.usuarioLogeado.dni;
  

  // $scope.cargarFoto=function(nombreDeFoto){

  //   var direccion="fotos/"+nombreDeFoto;

  //   $http.get(direccion, {responseType: "blob"})
  //   .then(
  //     function(respuesta){
  //       var mimetype=respuesta.data.type;
  //       var archivo=new File([respuesta.data], direccion, {type: mimetype});
  //       var fotoObtenida= new FileUploader.FileItem($scope.uploader, {});
  //       fotoObtenida._file= archivo;
  //       fotoObtenida.file={};
  //       fotoObtenida.file=new File([respuesta.data], nombreDeFoto, {type:mimetype});
  //       $scope.uploader.queue.push(fotoObtenida);
  //     }
  //   );
  // }

  

  //$scope.cargarFoto($scope.producto.Foto);

 $scope.Guardar= function(item, response, status, headers) {
  var t1=$scope.compra.precio;
  console.log(t1);
  var t2=$scope.compra.cantidad;
  console.log(t2);
  var tota=parseInt(t1)*parseInt(t2);
  console.log(tota);
  $scope.compra.total=tota;
  var a=$scope.producto.stock;
  if (a>=t2 && t2!=0){
  console.log( a);
  console.info("Voy a guardar", item, response,status, headers);

  console.log("compra a guardar:");
  console.log($scope.compra);
  $http.post('http://localhost/final/Datos/AltaCompras/', { datos: {accion:"confirmarCompra",compra:$scope.compra}})
  .then(function(respuesta) {       
    //aca se ejetuca si retorno sin errores        
    console.log(respuesta);
    $http.post('http://localhost/final/Datos/ModificarStock/', { datos: {accion:"confirmarCompra",compra:$scope.compra}})
    $state.go('grillaCompra');

    },function errorCallback(response) {        
        //aca se ejecuta cuando hay errores
        console.log( response);           
    });
  }else {if(a<t2){alert("No puede llevarse a cabo la compra ya que el stock es"+a);
  }else{alert("Ingrese la cantidad de productos que desea");}}
  }

  //  $scope.Guardar=function(){

  // // if($scope.uploader.queue[0].file.name!='pordefecto.png')
  // // {
  // //   var nombrefoto=$scope.uploader.queue[0].file.name;
  // //   $scope.producto.foto=nombrefoto;
  // // }
  // // $scope.uploader.uploadAll();
  // }



 
});