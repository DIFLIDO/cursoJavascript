// SCOPE
// existen dos tipos de SCOPE las Globales y las locales 
//las globales no pueden acceder a las locales pero las locales siii pueden accender a las globales 


// las locales se encuntran dentro de las funciones

var miNombre = "Edith";  // global

function nombre(){
    var miApellido ="Diflido Lima";     // local
    console.log(miNombre +" "+ miApellido);   // + " " + se utiliza para concatenar variables  ( + )
}