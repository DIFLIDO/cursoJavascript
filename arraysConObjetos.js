// arrary y dentro del arrays objetos

var articulos =[
    {nombre: "Bicicleta", costo: 2000},
    {nombre: "Tv", costo:2500},
    {nombre:"Libro", costo:150},
    {nombre:"Teléfono", costo:1000},
    {nombre:"Lapto",costo:20000},
    {nombre:"Teclado",costo:500},
];

/** METODOS PARA RECORRER LOS OBJETOS */


/** FILTER. TE FILTRA LOS ELEMENTOS QUE UNO ESPECIQUE  */
var articulosFiltrados = articulos.filter(function(){
    return articulos.costo<=500
});

/** MAP 
 */
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

/** .find */
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre==="Lapto"
});

/** .forEach */
articulos.forEach(function(articulo){
    console.log(articulos.nombre)
});

/**  .some (solo valida si es verdadero o falso)*/
articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
})