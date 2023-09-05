alert("Para poder observar los resultados presione F12 y visualizar la consola");
var Entrada = parseInt(prompt("Costo de la entrada"));
var Principal = parseInt(prompt("Costo del plato principal"));
var Postre = parseInt(prompt("Costo del postre"));
//operaciones
var suma = Entrada + Principal + Postre;
var igv = (suma*0.18)+total;
//resultados
console.log("El costo de la entrada es:" +Entrada);
console.log("El costo del plato principal es:" +Principal);
console.log("El costo de la entrada es:" +Postre);
