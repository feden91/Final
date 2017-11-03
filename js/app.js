
var app = angular.module('ABMangularPHP', ['ui.router', 'angularFileUpload', 'satellizer','zingchart-angularjs']);

app.config(function($stateProvider, $urlRouterProvider, $authProvider){

  //  $authProvider.loginUrl = 'http://localhost/final/Datos/Login/';
  // $authProvider.signupUrl = 'http://localhost/final/Datos/Login/';
   $authProvider.loginUrl = 'http://localhost/final/Datos/Login/'; //"http://api.com/auth/login";
  $authProvider.signupUrl = 'http://localhost/final/Datos/Login/'; //"http://api.com/auth/signup";
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
    .state('grillarodados', {
      url: '/grillarodados',
      params: {
          param1: null
      },
      views: {
        'principal': {
          templateUrl: 'templates/templategrillarodados.html',
      
          controller: 'controlGrillaRodados'
        },
        
       
        'menuSuperior': {
          templateUrl: 'templates/menuSuperior.html',
            controller: 'controlMenuSuperior'
        }
      }
  
    })
  .state('estadistica', {
    url: '/estadistica',
    views: {
      'principal': {
        templateUrl: 'templates/templateEstadisticas.html',
        controller: 'controlEstadisticas'
      },
      'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }
    }

  })

  .state('estadistica2', {
    url: '/estadistica2',
    views: {
      'principal': {
        templateUrl: 'templates/templateEstadisticas2.html',
        controller: 'controlEstadisticas2'
      },
      'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }
    }

  })
  
  .state('Ticket', {
    url: '/Ticket',
    params:{
      obj:null
    },
    views: {
      'principal': {
        templateUrl: 'templates/templateTicket.html',
        controller: 'controlTicket'
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
.state('logout', {
    url: '/logout',
    views: {
      'principal': {
        
        controller: 'controlLogout'
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
        controllerUrl:'js/controlaltaproductos.js',
        controller: 'controlAltaProducto'
      },
      'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }
    }

  })
.state('rodados', {
    url: '/rodados',
    views: {
      'principal': {
        templateUrl: 'templates/templateRodados.html',
        controllerUrl:'js/controlRodados.js',
        controller: 'controlRodados'
      },
      'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }
    }

  })
// .state('compra', {
//     url: '/compra//{:codigo}?:dni:fecha',
//     views: {
//       'principal': {
//         templateUrl: 'templates/compra.html',
//         controllerUrl:'js/controlCompra.js',
//         controller: 'controlCompra'
//       },
//       'menuSuperior': {
//         templateUrl: 'templates/menuSuperior.html',
//           controller: 'controlMenuSuperior'
//       }
//     }

//   })

.state('verProducto', {
    url: '/verProducto//{:codigo}?:nombre:stock:descripcion:precio:foto',
    views: {
      'principal': {
        templateUrl: 'templates/templateProducto.html',
        controllerUrl:'js/controlProducto.js',
        controller: 'controlProducto'
      },
      'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }
    }

  })

.state('confirmarCompra', {
    url: '/confirmarCompra//{:codigo}?:nombre:stock:descripcion:precio:foto',
    views: {
      'principal': {
        templateUrl: 'templates/confirmarCompra.html',
        controllerUrl:'js/controlProducto2.js',
        controller: 'controlProducto2'
      },
      'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }
    }

  })


.state('contacto', {
    url: '/contacto',
    views: {
      'principal': {
        templateUrl: 'templates/templategeolocalizacion.html',
        controllerUrl:'js/controlContacto.js',
        controller: 'controlContacto'
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
.state('grillaRodados2', 
  {  url: '/grillaRodados2:dat?tip',
    views: {
      'principal': {
    templateUrl:"templates/templategrillarodados2.html",
    controllerUrl:'js/controlGrillaRodados2.js',
    controller:'controlGrillaRodados2'},

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })
  .state('grillaUsuarios', 
  {  url: '/grillaUsuarios',
    views: {
      'principal': {
    templateUrl:"templates/templateGrillaUsuarios.html",
    
    controller:'controlGrillaUsuarios'},

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })
  
 .state('grillaCompra', 
  {  url: '/grillaCompra',
    views: {
      'principal': {
    templateUrl:"templates/templategrillacompra.html",
    controller:'controlGrillaCompras',
    },

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })
  .state('comprasUsuarios', 
  {  url: '/comprasUsuarios',
    views: {
      'principal': {
    templateUrl:"templates/templatecomprasusuarios.html",
    controller:'controlComprasUsuarios',
    },

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })
  
 .state('modificarProducto', 
  {  url: '/modificarProducto/{:codigo}?:nombre:stock:descripcion:precio:foto:tipo',
    views: {
      'principal': {
    templateUrl:"templates/templateModificacionProducto.html",
    
    controller:'controlModificar'},

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })
  .state('EstadoVenta', 
  {  url: '/EstadoVenta/{:id}?:fecha:dni:cantidad:precio:total:estado',
    views: {
      'principal': {
    templateUrl:"templates/templateEstadoVenta.html",
    
    controller:'controlEstadoVenta'},

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })
  .state('Pago', 
  {  url: '/Pago/{:id}?:fecha:dni:cantidad:precio:total:estado',
    views: {
      'principal': {
    templateUrl:"templates/templatePago.html",
    
    controller:'controlPago'},

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })

  .state('modificarUsuario', 
  {  url: '/modificarUsuario/{:id}?:nombre:apellido:dni:foto:correo:clave:direccion:localidad:tipo',
    views: {
      'principal': {
        templateUrl: 'templates/templateModificacionUsuario.html',
       
    controller:'controlModificarUsuarios'},

    'menuSuperior': {
        templateUrl: 'templates/menuSuperior.html',
          controller: 'controlMenuSuperior'
      }}
  })
  /* .state('alta', 
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



