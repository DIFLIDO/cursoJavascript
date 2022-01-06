function auto(marca, modelo,annio) {  // funcion construtora
    this.marcar = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autos=[];
var cantidad = prompt ("Digite la cantidad de autos a registrar")

for (let i = 1; i <= cantidad; i++) {
    var marca = prompt ("Ingresa la marca del auto: ");
    var modelo = prompt ("Ingresa el modelo del auto: ");
    var annio = prompt ("Ingrese el año del auto");

    autos.push(new auto (marca,modelo,annio));    
}

for (let i = 0; i <=cantidad; i++) {
    console.log(autos[i]);
    
}