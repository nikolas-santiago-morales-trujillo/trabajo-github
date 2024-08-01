/**
 *Tablas
 * autor:JR
 * Fecha: 12 de abril del 2024
 * version:36
 */
function tabla(ptabla,pnumHasta){
    let tabla= ptabla;
    let numHasta=pnumHasta;
    let contador=0;
    let multiplicacion=0;

    while(contador<numHasta){
        contador++;
        multiplicacion=tabla*contador
        console.log(+tabla+"x"+contador+"="+multiplicacion);
    }

}

const tablaExpresion=function(ptabla,pnumHasta){
    let tabla= ptabla;
    let numHasta=pnumHasta;
    let contador=0;
    let multiplicacion=0;

    while(contador<numHasta){
        contador++;
        multiplicacion=tabla*contador
        console.log(+tabla+"x"+contador+"="+multiplicacion);
    }

}