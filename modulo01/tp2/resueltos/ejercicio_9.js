let cantidad_de_notas = prompt("Ingrese la cantidad de notas a cargar");
if (cantidad_de_notas <= 0){ 
    cantidad_de_notas = prompt("Ingrese una cantidad valida por favor");
    };
let cont = 1;
let suma = 0;
let inter = 0;
let not = 0;
let promedio = 0;
while (cont <= cantidad_de_notas){
    cont ++;
    let nota = parseFloat(prompt(`Cargue la Nota Nº: ${cont}`));
    inter = Math.trunc(nota);
    not = Math.abs(inter);
    suma = suma + not;
};
promedio = (suma / cantidad_de_notas);

document.write(`El promedio del Alumno es: ${promedio}`);