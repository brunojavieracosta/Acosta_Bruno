function meses_del(mes){
switch(mes){
    case 1:
        document.write(`El mes Nº: ${mes}: Enero tiene 31 dias `);
        break;
    case 2:
        document.write(`El mes Nº: ${mes}: Febrero tiene menos de 30 dias `);
        break;
    case 3:
        document.write(`El mes Nº: ${mes}: Marzo tiene 31 dias `);
        break;
    case 4:
        document.write(`El mes Nº: ${mes}: Abril tiene 30 dias `);
        break;
    case 5:
        document.write(`El mes Nº: ${mes}: Mayo tiene 31 dias `);
        break;
    case 6:
        document.write(`El mes Nº: ${mes}: Junio tiene 30 dias `);
        break;
    case 7:
        document.write(`El mes Nº: ${mes}: Julio tiene 31 dias `);
        break;
    case 8:
        document.write(`El mes Nº: ${mes}: Agosto tiene 31 dias `);
        break;
    case 9:
        document.write(`El mes Nº: ${mes}: Septiembre tiene 30 dias `);
        break;
    case 10:
        document.write(`El mes Nº: ${mes}: Octubre tiene 31 dias `);
        break;
    case 11:
        document.write(`El mes Nº: ${mes}: Noviembre tiene 30 dias `);
        break;
    case 12:
        document.write(`El mes Nº: ${mes}: Diciembre tiene 31 dias `);
        break;
};
}

var mes = parseFloat(prompt("Ingrese un mes del año"));

meses_del(mes);
