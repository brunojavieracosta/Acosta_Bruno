let caden = prompt("Ingrese su texo (STRING)");

function cadenas(c){
    if ( c === c.toUpperCase()){
        document.write("El texto ingresado " + c + " tiene caracteres en MAYUSCULAS");
    }
    else if ( c=== c.toLowerCase()){
        document.write("El texto ingresado " + c + " tiene caracteres en minusculas");
    }
    else {
        document.write("El texto ingresado " + c + " esta conformado por mayusculas y minusculas");
    }
}
cadenas(caden);