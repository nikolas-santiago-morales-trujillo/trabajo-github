/**
 * tablas con ciclo for 
 * autor:JR
 * Fecha: 16 de abril del 2024
 * version:46
 */

function tabla(pnumHasta,ptabla){
    let numHasta=pnumHasta;
    let tabla=ptabla;
    let resultado;
    for(contador=1; contador<=numHasta;contador++){
     resultado=tabla*contador;
     console.log( +tabla+"x"+contador+"="+resultado);
    }
}

const tablaExpresion=function(pnumHasta,ptabla){
    let numHasta=pnumHasta;
    let tabla=ptabla;
    let resultado;
    for(contador=1; contador<=numHasta;contador++){
     resultado=tabla*contador;
     console.log( +tabla+"x"+contador+"="+resultado);
    }
}