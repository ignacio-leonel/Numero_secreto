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


function reiniciarJuego(){
    limpiarCaja();   
    condicionesIniciales();
    
         
}
