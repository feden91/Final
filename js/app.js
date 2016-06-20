
var app = angular.module('ABMangularPHP', ['ui.router', 'angularFileUpload', 'satellizer']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider){

  //  $authProvider.loginUrl = 'http://localhost/final/Datos/Login/';
  // $authProvider.signupUrl = 'http://localhost/final/Datos/Login/';
  $authProvider.loginUrl = 'final/PHP/Sesiones/autentificador.php'; //"http://api.com/auth/login";
  $authProvider.signupUrl = 'final/PHP/Sesiones/CrearCuenta.php'; //"http://api.com/auth/signup";
 $authProvider.tokenName = 'tokenFest2016';
  $authProvider.tokenPrefix = 'login';
  $authProvider.authHeader = 'Data';



  $stateProvider
  .state('menu',
  {
views: {
        'principal': {
          templateUrl: 'templates/inicio.html',
          controller: 'controlMenu'
        },
        'menuSuperior': {
          templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
        }
      },
      url: '/menu'
    })
.state('login', {
    url: '/login',
    views: {
      'principal': {
        templateUrl: 'templates/templateLogin.html',
        controller: 'controlLogin'
      },
      'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }
    }

  })
.state('signup', {
    url: '/signup',
    views: {
      'principal': {
        templateUrl: 'templates/templateSignUp.html',
        controller: 'controlSignUp'
      },
      'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }
    }

  })
.state('altaProducto', {
    url: '/altaProducto',
    views: {
      'principal': {
        templateUrl: 'templates/templateAltaProducto.html',
        controllerUrl:'js/controlaltaproducto.js',
        controller: 'controlAltaProducto'
      },
      'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }
    }

  })


 .state('grilla', 
  {  url: '/grilla',
    views: {
      'principal': {
    templateUrl:"templates/templategrilla.html",
    
    controller:'controlGrilla'},

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })
  .state('alt', 
  {  url: '/alt',
    views: {
      'principal': {
    templateUrl:"templates/templateatl.html",
    
    controller:'controlalt'},

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })/*
  .state('alta', 
  {
    templateUrl:"templateusuario.html",
    url:'/alta',
    controller:'controlAlta'
  })
  .state('modificar', 
  {
    templateUrl:"templateusuario.html",
    url:'/modificar/{:id}?:nombre:apellido:dni:foto',
    controller:'controlModificar'
  })*/

  $urlRouterProvider.otherwise('/menu');

});


/*console.info("datos auth en login" , $auth.isAuthenticated(), $auth.getPayload());
if($auth.isAuthenticated())
{

$state.go("login");


}
var persona=$auth.getPayload();
console.info("datos del login",persona);
$scope.nombrepersona=persona.nombre;

$scope.SalirDelSistema function(){



  $auth.logout()
  .then(function{})
  $state.go('login');
}*/
/* function login()
        {
           
         
           $scope.persona={};
          $scope.persona.nombre= $("#nombre").val();
            $scope.persona.clave=$("#clave").val();
           

            var funcionAjax =$.ajax({
                url:"ValidarUsuario.php",
                 type:"post",
                data: DatosLogin               
                });


            funcionAjax.done(function(respuesta){
                alert(respuesta);
                if(respuesta=="correcto")
                {
                    $("#MensajeError").val("");
                    window.location.href="menu.php";            // vamos al menu
                }
                else
                {
                   alert("NO esta registrado... ");

                    // mostrar mensaje "no esta en la base"
                    //vamos al registro
                    //window.location.href="registroJquery.php";
                }
        });



        }

 

  if($auth.isAuthenticated())
     {
     $state.go("alta");
   }
   else
   {
     $state.go("menu");
   }*/

 


// app.controller('controlMenuSuperior', function($scope, $http, $location, $state, $auth) {
 

//   });
app.controller('controlalt', function($scope, $http, $location, $state, $auth) {
 

  });

// app.controller('controlAltaProducto', function($scope, $http, FileUploader) {
//   $scope.DatoTest="**alta**";

//   $scope.uploader = new FileUploader({url: 'PHP/nexo.php'});
//       $scope.uploader.queueLimit = 1; // indico cuantos archivos permito cargar
            

// //inicio las variables
//   $scope.producto={};
//   $scope.producto.nombre= "" ;
//   $scope.producto.codigo= "" ;
//   $scope.producto.stock= "" ;
//   $scope.producto.precio= "" ;
//   $scope.producto.foto="pordefecto.png";
  
//   $scope.cargarFoto=function(nombreDeFoto){

//     var direccion="fotos/"+nombreDeFoto;

//     $http.get(direccion, {responseType: "blob"})
//     .then(

//       function(respuesta){
//         var mimetype=respuesta.data.type;
//         var archivo=new File([respuesta.data], direccion, {type: mimetype});
//         var fotoObtenida= new FileUploader.FileItem($scope.uploader, {});
//         fotoObtenida._file= archivo;
//         fotoObtenida.file={};
//         fotoObtenida.file=new File([respuesta.data], nombreDeFoto, {type:mimetype});
//         $scope.uploader.queue.push(fotoObtenida);
//       }


//       );

//   }

//   $scope.cargarFoto($scope.producto.foto);

//   $scope.uploader.onSuccessItem= function(item, response, status, headers) {

//   console.info("Voy a guardar", item, response,status, headers);

//   $http.post('PHP/nexo.php', { datos: {accion :"insertar",producto:$scope.producto}})
//   .then(function(respuesta) {       
//     //aca se ejetuca si retorno sin errores        
//     console.log(respuesta.data);

//   },function errorCallback(response) {        
//         //aca se ejecuta cuando hay errores
//         console.log( response);           
//     });
//   }

//   $scope.Guardar=function(){

//     if($scope.uploader.queue[0].file.name!='pordefecto.png')
//     {
//       var nombrefoto=$scope.uploader.queue[0].file.name;
//       $scope.producto.foto=nombrefoto;
//     }

//     $scope.uploader.uploadAll();
//   }
// });



