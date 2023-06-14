//primero declaro las variables dato y resultado con la palabra reservada ler
let dato,  resultado;
// para que funcione el programa delcaro las variables vl1 y val1 2 tambien
let val1, val2;
/* con las palabras reservadas window.prompt pido en la pagina web al usuario  
que ingrese su numbre y apellido, guardandolos en val1 y val2 respectivamente*/
val1 = window.prompt("Introduce tu nombre", "...");
val2 = window.prompt("Introduce tu apellido", "...");
// guardo la frase y los valores guardados ingresados por el usuario en resultado//
resultado = "concatenado tu nombre: "+ val1 + " " + val2 + "";
/*utilizo la palabra reservada document.write para mostrar lo que contiene 
la variable resultado por pantalla*/
document.write(resultado);