app.controller('controlGrillaUsuarios', function($scope, $http,factoryUsuarios,$auth,$timeout) {
 if($auth.isAuthenticated())
   {  
        $scope.usuarioLogeado=$auth.getPayload();

   }
    $scope.$on('$viewContentLoaded',function(){
 



      $scope.myValue = false;
      $timeout(function() {
         $scope.myValue = true;
      }, 2000);
      console.log($scope.myValue);
      
       $scope.myValue2 = true;
      $timeout(function() {
         $scope.myValue2 = false;
      }, 2000);
      console.log($scope.myValue2);
   });
   
$(document).ready(function () {

            console.log("HELLO")
            function exportTableToCSV($table, filename) {
                var $headers = $table.find('tr:has(th)')
                    ,$rows = $table.find('tr:has(td)')

                    // Temporary delimiter characters unlikely to be typed by keyboard
                    // This is to avoid accidentally splitting the actual contents
                    ,tmpColDelim = String.fromCharCode(11) // vertical tab character
                    ,tmpRowDelim = String.fromCharCode(0) // null character

                    // actual delimiter characters for CSV format
                    ,colDelim = '","'
                    ,rowDelim = '"\r\n"';

                    // Grab text from table into CSV formatted string
                    var csv = '"';
                    csv += formatRows($headers.map(grabRow));
                    csv += rowDelim;
                    csv += formatRows($rows.map(grabRow)) + '"';

                    // Data URI
                    var csvData = 'data:application/csv;charset=utf-8,' + encodeURIComponent(csv);

                // For IE (tested 10+)
                if (window.navigator.msSaveOrOpenBlob) {
                    var blob = new Blob([decodeURIComponent(encodeURI(csv))], {
                        type: "text/csv;charset=utf-8;"
                    });
                    navigator.msSaveBlob(blob, filename);
                } else {
                    $(this)
                        .attr({
                            'download': filename
                            ,'href': csvData
                            //,'target' : '_blank' //if you want it to open in a new window
                    });
                }

                //------------------------------------------------------------
                // Helper Functions 
                //------------------------------------------------------------
                // Format the output so it has the appropriate delimiters
                function formatRows(rows){
                    return rows.get().join(tmpRowDelim)
                        .split(tmpRowDelim).join(rowDelim)
                        .split(tmpColDelim).join(colDelim);
                }
                // Grab and format a row from the table
                function grabRow(i,row){
                     
                    var $row = $(row);
                    //for some reason $cols = $row.find('td') || $row.find('th') won't work...
                    var $cols = $row.find('td'); 
                    if(!$cols.length) $cols = $row.find('th');  

                    return $cols.map(grabCol)
                                .get().join(tmpColDelim);
                }
                // Grab and format a column from the table 
                function grabCol(j,col){
                    var $col = $(col),
                        $text = $col.text();

                    return $text.replace('"', '""'); // escape double quotes

                }
            }


            // This must be a hyperlink
            $("#export").click(function (event) {
                 var outputFile = "Descargas"
               //var outputFile = window.prompt("Nombre del archivo:"
                //) 
                || 'export';
                outputFile = outputFile.replace('.csv','') + '.csv'
                 
                // CSV
                exportTableToCSV.apply(this, [$('#lalala > table'), outputFile]);
                
                // IF CSV, don't do event.preventDefault() or return false
                // We actually need this to be a typical hyperlink
            });
        });

  
   console.log($scope.usuarioLogeado);
 	 

    factoryUsuarios.mostrarGrilla("otro").then(function(respuesta){
    $scope.ListadoUsuarios=respuesta;
  });



$scope.Borrar=function(usuario){

    console.log(usuario);

    var data = usuario.dni;
    
    $http.post(' http://bicicleteriaalsina.000webhostapp.com/Datos/BorrarUsuario/'+data)
   .then(function(respuesta) {       
           //aca se ejetuca si retorno sin errores        
           console.log(respuesta.data);
           // $http.get('http://localhost/PersonasFinal/Datos/traerUsuarios/')
           // .then(bien, mal);

             factoryUsuarios.mostrarGrilla("otro").then(function(respuesta){
              $scope.ListadoUsuarios=respuesta;
             });

      },function errorCallback(response) {
           $scope.ListadoUsuarios= [];
          console.log( response);
     });
}
});




app.factory('factoryUsuarios',function(servicioUsuario){

    var usuario={
      // nombre:'Leandro',
      // nombreApellido:'Leandro Cannarozzi',
      mostrarGrilla:function(dato){
          this.nombre=dato;
          return servicioUsuario.retornarUsuarios().then(function(respuesta){
                  return respuesta;

          });
          //console.log("Este es mi nombre: "+dato);
      }
  };
    return usuario;
});

app.service('servicioUsuario',function($http){
var listado;

  this.retornarUsuarios=function(){
      return  $http.get(' http://bicicleteriaalsina.000webhostapp.com/Datos/traerUsuarios/')
        .then(function(respuesta) {       

          //$scope.ListadoPersonas = respuesta.data.listado;
          return respuesta.data.listado;

         //console.log(respuesta.data);

      });

  };


});