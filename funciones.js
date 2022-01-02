// FUNCIONES DECLARATIVAS
function miFuncion(){
    return 3;
}

miFuncion();

// FUNCION DE EXPRESION
 var miFuncion = function(a,b){
     return a + b;
 }

 miFuncion ();


 // Ejemplo de Funcion Declarativa

 // ***************************************
 function saludarEstudiante (estudiante){
    console.log (estudiante);      // console.log es para imprimir en pantalla
 }

 saludarEstudiante("Edith");        // para utilizar la función


 // **************************************
 function saludarEstudiante (estudiante){
    console.log (`Hola ${estudiante}`);       
 }

 saludarEstudiante("Edith");

 // *******************************

 function sumar(a,b) {
    var resultado =  a + b;
    return resultado;
}
sumar(5,6);

// ******************************
function sumar(a,b) {      
    return a + b;
}
sumar(5,6);



