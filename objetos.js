var objeto ={} // sintaxis 

var miAuto={            // creando objeto
    marca:"Toyota", 
    modelo:"Corolla",
    annio: 2020
};

miAuto.marca // para visualizar 

/*************** */
var miAuto={           
    marca:"Toyota", 
    modelo:"Corolla",
    annio: 2020,
    detalleDelAuto: function() {
        console.log(`Auto ${this.modelo} ${this.annio}`); // this hace referencia  al objeto
    }
};

miAuto.detalleDelAuto() // para visualizarlo