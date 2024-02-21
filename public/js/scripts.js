//funcion para mostrar los mensajes
function enviarMensaje() {
    var texto = $("#textoUsuario").val();

    $.ajax({
        url: baseUrl + "/enviarMensaje",
        method: "get",
        data: { mensajeEnvio: texto },
        success: function (respuesta) {
            alert(respuesta);
            mostrarMensajes();
        },
    });
}

function mostrarMensajes() {
    $.ajax({
        url: baseUrl + '/obtenerMensajes',
        method: 'get',
        success: function(respuesta) {
            var mensajes = JSON.parse(respuesta);
            $('#contenedorMensajes').html('');

            for(var i=0; i<mensajes.length; i++) {
                var txt = mensajes[i]['usuario'] + ": " + mensajes[i]['texto'] + '<br>';
                $('#contenedorMensajes').append(txt);
            }

        }
    });
}


