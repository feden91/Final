app.controller('controlGrillaCompras', function($scope, $http,factoryCompra,$auth,$timeout) {
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
                exportTableToCSV.apply(this, [$('#conten > table'), outputFile]);
                
                // IF CSV, don't do event.preventDefault() or return false
                // We actually need this to be a typical hyperlink
            });
        });
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
    
    $http.post('http://bicicleteriaalsina.000webhostapp.com/Datos/ModificarStockcom/', { datos: {accion:"grillaCompra",compra:compra}})
    $http.post('http://bicicleteriaalsina.000webhostapp.com/Datos/BorrarCompra/' +data)
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
       
       return  $http.get(' http://bicicleteriaalsina.000webhostapp.com/Datos/traerCompras/')
        .then(function(respuesta) {       

          //$scope.ListadoPersonas = respuesta.data.listado;
          return respuesta.data.listado;

         //console.log(respuesta.data);

      });

  };
  app.factory('Excel',function($window){
    var uri='data:application/vnd.ms-excel;base64,',
        template='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
        base64=function(s){return $window.btoa(unescape(encodeURIComponent(s)));},
        format=function(s,c){return s.replace(/{(\w+)}/g,function(m,p){return c[p];})};
    return {
        tableToExcel:function(tableId,worksheetName){
            var table=$(tableId),
                ctx={worksheet:worksheetName,table:table.html()},
                href=uri+base64(format(template,ctx));
            return href;
        }
    };
})
.controller('MyCtrl',function(Excel,$timeout,$scope){
  $scope.exportToExcel=function(tableId){ // ex: '#my-table'
        var exportHref=Excel.tableToExcel(tableId,'WireWorkbenchDataExport');
        $timeout(function(){location.href=exportHref;},100); // trigger download
    }
});

});
