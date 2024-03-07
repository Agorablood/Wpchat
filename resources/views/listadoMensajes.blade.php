    @php
        $session = Session();
        $nombre = $session->get('nombre');
    @endphp

    <a class="btn btn-primary" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
        Lista de usuarios
      </a>
      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel">Lista de usuarios</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body">
          <div>
            Aqui se presentan los usuarios más activos en la red social.
          </div>
          <div class="dropdown mt-3">
            <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
              Usuarios
            </button>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="logout">Javi</a></li>
                <li><a class="dropdown-item" href="logout">Alvaro</a></li>
              <li><a class="dropdown-item" href="logout">Lorenzo</a></li>
            </ul>
          </div>
          <a href="{{url('/logout')}}" onclick="logout()">Cerrar Sesión</a>
        </div>
      </div>
      <div>
        <h1>Mensajes del chat. </h1>
        <label id="login" for="texto">Sesión iniciada como: {{ $nombre }}</label>
        <div id="contenedorMensajes">

        </div>
        <div class="mensaje">
            <input type="text" id="textoUsuario" name="textoUsuario" />
            <button onclick="enviarMensaje()">Enviar</button>
            <button onclick="mostrarMensajes()">Actualizar mensajes</button>
        </div>
        
    </div>