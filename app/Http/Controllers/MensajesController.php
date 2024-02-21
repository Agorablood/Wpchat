<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Mensaje;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\DB;


class MensajesController extends Controller
{
    // Muestra la vista del chat
    public function mostrarMensajes() {
        
        return  view('templates/header').
                view('listadoMensajes').
                view('templates/footer');

    }
    public function enviarMensajes(Request $request){
        $texto = $request->get('mensajeEnvio');
        // echo "El texto recibido es ".$texto;exit;

        $mensaje = new Mensaje();
        $mensaje->texto = $texto;
        $session = Session();
        $usuario = $session->get('nombre');

        $mensaje->usuario = $usuario;

        $mensaje->save();

        echo 'Mensaje enviado';
    }
    

    public function obtenerMensajes() {
        $texto = DB::select('SELECT * FROM mensajes');
        $mensajeJson = json_encode($texto);
        echo $mensajeJson;
}
}
