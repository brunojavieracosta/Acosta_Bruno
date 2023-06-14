var valores = [true, false, 2, "hola", "mundo", 3, "char"];

let resultado = 0;
let contador = 0;
let el_mayor = 0;
let tamaño = 0;

for ( let resultado of valores){
    contador = typeof (resultado);
    if (contador == "string"){
        if (resultado.length > tamaño){
            el_mayor = resultado;
            tamaño = resultado.length
        }
    }

}

document.write(`El elemento del array con mayor caracteres es: ${el_mayor} </bye>`);

let el_menor = 0;
let cantt = 898665;
let cont = 0;
let orden = 0;
let bandera = 0;
document.write("</bye>");
/*while (cont <= 1){
    cont ++;

    for ( let devolucion of valores){
        bandera = typeof(devolucion);
            if (devolucion.length < cantt){
                el_menor = devolucion;
                cantt = devolucion.length;
                document.write(el_menor);
            }
    }
    
}*/
let suma = valores[2] + valores [5];
document.write("</bye> La suma de los elementos del array da: " + suma );

let resta = valores[2] + valores[5];

document.write(" </bye> La resta de los valores del array da: " + resta );

let multiplcacion = valores[2] * valores [5];
document.write(" </bye> La multiplicacion de los elementos del array da: " + multiplcacion );

let division = valores[2] / valores [5];
document.write(" </bye> La division de los elementos del array da: " + division );