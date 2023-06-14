function invertido(el_texto){
    let mensaje = el_texto.split('');
    let reversamensaje = mensaje.reverse();
    let finalreversa = reversamensaje.join('');
    return finalreversa;
}

console.log(invertido("Hola Mario"));