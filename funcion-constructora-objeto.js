function auto(marca, modelo,annio) {  // funcion construtora
    this.marcar = marca;
    this.modelo = modelo;
    this.annio = annio;
}

var autoNuevo = new auto ("Tesla","Model 3", 2020); // se va anexando elementos al objetno 

var autoNuevo2 = new auto ("Toyota","Aveo",2018);


autoNuevo2 // para visualizarlo  