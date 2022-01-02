/** UTILIZANDO LOS CONDICIONALES */
/** MODO 1  */
var yo="papel";
var pc="piedra";

    if (yo===pc) {
        var resultado= "Empatados";
    }else if (yo=="tijera" && pc =="papel" ||yo=="piedra" && pc =="tijera"||yo=="papel" && pc =="piedra") {
        var resultado = "El ganador es usted"
    }else if (pc=="tijera" && yo =="papel" ||pc=="piedra" && yo =="tijera"||pc=="papel" && yo =="piedra") {
        var resultado = "El ganador es la PC"
    }
console.log(resultado);

/** MODO 2 CON FUNCIONES */

function jugar(yo,pc) {
    if (yo===pc) {
        var resultado= "Empatados";
    }else if (yo=="tijera" && pc =="papel" ||yo=="piedra" && pc =="tijera"||yo=="papel" && pc =="piedra") {
        var resultado = "El ganador es usted"
    }else if (pc=="tijera" && yo =="papel" ||pc=="piedra" && yo =="tijera"||pc=="papel" && yo =="piedra") {
        var resultado = "El ganador es la PC"
    }
    return resultado;
} 

/** UTILIZANDO EL METODO SWITCH */
/** MODO 1 */

var yo="papel";
var pc="papel";

switch (true) {
    case yo===pc:
        console.log("Empatados")
        break;
    case yo=="tijera" && pc =="papel" ||yo=="piedra" && pc =="tijera"||yo=="papel" && pc =="piedra":
        console.log("El ganador es usted")
        break;  
    case pc=="tijera" && yo =="papel" ||pc=="piedra" && yo =="tijera"||pc=="papel" && yo =="piedra":
        console.log("El ganador es la PC")
        break;        
}

/** MODO 2 CON FUNCIONES */

function jugar(yo,pc) {
    switch (true) {
        case yo===pc:
            var resultado= "Quedaron Empatados";
            break;
        case yo=="tijera" && pc =="papel" ||yo=="piedra" && pc =="tijera"||yo=="papel" && pc =="piedra":
            var resultado = "El ganador de esta partida es usted"
            break;  
        case pc=="tijera" && yo =="papel" ||pc=="piedra" && yo =="tijera"||pc=="papel" && yo =="piedra":
            var resultado = "El ganador de esta partida es la PC"
            break;        
    }   
    return resultado;
} 

