var num = parseFloat(prompt("Ingrese un numero entero"));
var resultado = num;
for ( var i = 1; i<num; i++){
    resultado = resultado * i;
}
alert("El factorial del numero " + num + " es: " + resultado + "");
