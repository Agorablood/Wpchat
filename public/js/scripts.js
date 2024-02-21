//funcion para mostrar los mensajes
function enviarMensaje() {
    var texto = $('#textoUsuario').val();
    
    $.ajax({
        url: baseUrl + '/enviarMensaje',
        method: 'get',
        data: { mensajeEnvio: texto },
        success: function(respuesta) {
            alert(respuesta);
            mostrarMensajes();
        }
    });
}

function mostrarMensajes() {
    $.ajax({
        url: baseUrl + '/obtenerMensajes',
        method: 'get',
        success: function(respuesta) {
            alert('prueba');
            // console.log(respuesta);
            var mensajes = JSON.parse(respuesta);
            // console.log(mensajes);
            console.log("El mensaje 0 es " + mensajes[0]['texto']);

        }
    });
}