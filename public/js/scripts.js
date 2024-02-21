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
        url: baseUrl + "/obtenerMensajes",
        method: "get",
        success: function (respuesta) {
            alert("prueba");
            // console.log(respuesta);
            var mensajes = JSON.parse(respuesta);

            $("#contenedorMensajes").html("");

            for (var i = 0; i < mensajes.length(); i++) {
                var txt = mensajes[i]["usuario"] + ":" + mensajes[1];
                $("contenedorMensajes").append(txt);
                // console.log(mensajes);
                // $('#textoUsuario').empty();

                // // Recorremos los mensajes y los agregamos al HTML
                // mensajes.forEach(function(mensaje) {
                //     var elementoMensaje = $('<div>').text(mensaje);
                //     $('#textoUsuario').append(elementoMensaje);
                // });
            }
        },
    });
}

    // setInterval(() => {
    //     mostrarMensajes();
    // }, 5000);

