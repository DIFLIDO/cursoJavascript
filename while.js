var estudiantes =["Jorge","Mileina","Yazmin","Edith"]; // arrays

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);    
}

while (estudiantes.length>0) {
    console.log(estudiantes); // estamos visualizando el proceso de quitar el elemento
    var estudiante = estudiantes.shift(); // .shitf va sacando un elemento
    saludarEstudiantes(estudiante);
}