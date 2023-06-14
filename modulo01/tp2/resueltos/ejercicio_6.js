let letra = " ";
let posicion = " ";
function laprimeravocal(text){
    const las_vocales = ["a", "e", "i", "o", "u"];
    text = text.toLowerCase();
    for (let i=0; i < text.length; i++){
        if (las_vocales.includes(text[i])){
            letra = text[i];
        }
    }
}
var text = prompt("Ingresa una palabra");
laprimeravocal(text);

document.write(`"${letra}" es la letra Nº: ${text.indexOf(letra)} `)