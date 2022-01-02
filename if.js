/** Estructura de una condicional */
if(true){
    console.log("Hola")
} else{
    console.log("Soy Falso")
}

/** Condicional anidada */
if (condition) {
    
} else if (condition) {
    
} else{
    
}

/** Ejemplo de condicion anidada */
var edad = 18;

if (edad===18) {
    console.log ("Ya puedes votar, será tu 1ra votacion")
} else if (edad > 18) {
    console.log("Puedes votar de nuevo")
} else{
    console.log("Aun eres menor de edad para votar")
}

/** OTRO MODO DE CONDICIONAL */
condicion ? true:false;

/**Ejemplo */
var numero =1;

var resultado = numero === 1 ? "Sí soy un uno" : "No, no soy un uno";