
var estudiantes =["Jorge","Mileina","Yazmin","Edith"]; // arrays

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);    
}

// MODO 1 DE UTILIZAR EL FOR 
for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]) ;    
}

// MODO 2 DE UTILIZAR EL FOR 
for (var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}