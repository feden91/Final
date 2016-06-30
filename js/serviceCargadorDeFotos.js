app.service('serviceCargadorDeFotos', function($http, FileUploader){

  this.cargarFoto= function(nombreDeFoto, uploader){
    var direccion = "fotos/" + nombreDeFoto;

    $http.get(direccion,{responseType:"blob"})
    .then(
      function(respuesta){
        var mimeType = respuesta.data.type;
        var archivo = new File([respuesta.data],direccion,{type:mimeType});
        var fotoObtenida = new FileUploader.FileItem(uploader,{});
        fotoObtenida._file = archivo;
        fotoObtenida.file = {};
        fotoObtenida.file = new File([respuesta.data],nombreDeFoto,{Type:mimeType}); //converti la foto en un streaming

        uploader.queue.push(fotoObtenida);
    });    
  }

});
