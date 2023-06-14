var num = 0;
function aleatorio(numero){
    num = Math.random()*numero;
}
let numero = 100;

aleatorio(numero);

document.write(`El numero al azar es: ${num}`);