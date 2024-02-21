//funcion para mostrar los mensajes
function enviarMensaje() {
    var texto = $("#textoUsuario").val();
    $.ajax({
        url: baseUrl + "/enviarMensajes",
        method: "get",
        // header:{
        //     'X-CSRF-TOKEN': $('meta[name="crsf-token"]').attr('content')
        // },
        data: { mensajeEnvio: texto },
        success: function (respuesta) {
            alert(respuesta);
            mostrarMensajes();
        },
    });

    function mostrarMensajes() {
        $.ajax({
            url: baseUrl + "/obtenerMensajes",
            method: "get",

            success: function (respuesta) {
                console.info(respuesta);
                var mensajes = JSON.parse(respuesta);
                console.log(mensajes);

                
            },
        });
    }
}
