/**
 * tablas con ciclo for 
 * autor:JR
 * Fecha: 16 de abril del 2024
 * version:48
 */
function tabla(pnumHasta,ptabla){
    let numHasta=pnumHasta;
    let tabla=ptabla;
    let resultado;
    for(contador=1; contador<=numHasta;contador++){
     resultado=tabla*contador;

     if (resultado%2==0){
        console.log (+resultado+" = es par");
    }
    else{
        console.log (+resultado+ " = es impar");
    }

    }
}

const tablaExpresion=function(pnumHasta,ptabla){
    let numHasta=pnumHasta;
    let tabla=ptabla;
    let resultado;
    for(contador=1; contador<=numHasta;contador++){
     resultado=tabla*contador;

     if (resultado%2==0){
        console.log (+resultado+" = es par");
    }
    else{
        console.log (+resultado+ " = es impar");
    }

    }
}