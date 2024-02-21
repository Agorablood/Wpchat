    @php
    $session = Session();
    $nombre = $session->get('nombre');
@endphp

<div>
    <h1>Mensajes del chat. </h1>
        <label id="login" for="texto">Sesión iniciada como: {{$nombre}}</label>
    <div id="contenedorMensajes">
        
    </div>

    <input type="text" id="textoUsuario" name="textoUsuario" />
    <button onclick="enviarMensajes()">Enviar</button>
    <button onclick="mostrarMensajes()">Show</button>

</div>
