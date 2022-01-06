var frutas =["Manzana","Plátano","Cereza"];  // arrays

console.log(frutas.length); // .length para saber la cantidad de elementos 

console.log(frutas[0]); // para acceder a los elementos

var masFrutas =  frutas.push("Fresa"); // .push para agregar elementos al final

var ultimo = frutas.pop ("Fresa"); // .pop elimina el ultimo elemento del arrays

var nuevaLongitud = frutas.unshift ("Fresa"); // .unshift agrega elementos al inicio

var borrarFruta = frutas.shift("Fresa"); // .shift elimina el primer elemento del arrays

var posicion = frutas.indexOf("Cereza"); // .indexOf para saber la ubicacion del elemento
