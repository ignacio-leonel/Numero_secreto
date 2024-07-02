let numerosSorteados = [];
let numeroSecreto = 0;
let intentos = 1;
let numeroMaximo =10;



console.log(numeroSecreto)
function asignarTextoAElemento(elemento,texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML= texto;
}


function generarNumeroSecreto(){
    

    console.log(numerosSorteados);
    numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
        
    if(numerosSorteados.includes(numeroGenerado)){
        
    return generarNumeroSecreto();

}
    else{
        numerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }


}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario==numeroSecreto){
        asignarTextoAElemento('p', `Acertaste el número en ${intentos} ${(intentos===1)?'intento':'intentos' }`)
        asignarTextoAElemento('h1','GANADOR')
        document.getElementById('reiniciar').removeAttribute('disabled');
    
    }

    else{
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoAElemento('p','El número es menor');
        }
        else{
            asignarTextoAElemento('p', 'El número es mayor');
        }
        intentos ++;
        limpiarCaja();
    }
    
    
}
function limpiarCaja(){
        document.getElementById('valorUsuario').value='';
}

function condicionesIniciales(){
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
    asignarTextoAElemento('h1', 'El número secreto');
    asignarTextoAElemento('p', `Indica un numero del 1 al ${numeroMaximo}` );
    numeroSecreto= generarNumeroSecreto();
    intentos = 1;

    
}

function perdedor(){
    if (intentos =4 ){
            asignarTextoAElemento('p','Llegaste al número máximo de intentos. Juega otra vez!');
    condicionesIniciales()
}
}
    
function reiniciarJuego(){
    limpiarCaja();   
    condicionesIniciales();
    

    
}
/*
function ingresarNombre(){
    mostrar nombre por pantalla
    variable nombre para usar en varios lados

}

function nivelDificultad(){
    let nivelSeleccionado= 1;
    
    if (nivelSeleccionado=1){
    numeroMaximo=10 ;
    cantidadDeIntentos=5;
    }
    if(nivelSeleccionado=2){
    numeroMaximo=10;
    cantidadDeIntentos=3;
    }
    else{
    numeroMaximo=15;
    cantidadDeIntentos=3;
    }


    MOSTRAR EL PUNTAJE Y LA CANTIDAD DE INTENTOS RESTANTES.
    SUMAR PUNTOS SEGUN VAN JUGANDO HACER UNA TABLA DONDE SUMEN PUNTOS CADA INTENTO VAN SUMANDO
    MENOS PUNTOS GANAR EN NIVEL MAS ALTO SUMA MAS PUNTOS
    DESACTIVAR EL BOTON INTENTAR CUANDO TERMINAN LOS INTENTOS
    MOSTRAR MENSAJE GANADOR O PERDEDOR CON EL NOMBRE DEL JUGADOR
    HACER OTRA PAGINA PRINCIPAL PARA EL JUEGO O VER LA LISTA DE PUNTAJES.
    GUARDAR UNA LISTA DE JUGADORES ORDENADOS POR PUNTAJES CON NOMBRE Y PUNTOS
    HACER PAGINA DE VISITANTES PARA QUE DEJEN UNA RESEÑA SOBRE EL JUEGO,
}

*/
condicionesIniciales();
