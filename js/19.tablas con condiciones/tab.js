/**
 *Tabla con condiciones
 * autor:JR
 * Fecha: 13 de abril del 2024
 * version:40
 */
function tabla(ptabla,pnumHasta){
    let tabla=ptabla;
    let numHasta= pnumHasta;
    let contador=0;
    let resultado;
    let contPares=0;
    let contImpar=0;
 
    while(contador<numHasta){
        contador++;
        resultado=tabla*contador;
        
    
    if (resultado%2==0){
        console.log(+tabla+"x"+contador+"="+resultado+" buzz");
       contPares++;
    }
    else {
        console.log(+tabla+"x"+contador+"="+resultado+" bass");
       contImpar++
    }
    
  }
}

const tablaExpresion=function(ptabla,pnumHasta){
    let tabla=ptabla;
    let numHasta= pnumHasta;
    let contador=0;
    let resultado;
    let contPares=0;
    let contImpar=0;
 
    while(contador<numHasta){
        contador++;
        resultado=tabla*contador;
        
    
    if (resultado%2==0){
        console.log(+tabla+"x"+contador+"="+resultado+" buzz");
       contPares++;
    }
    else {
        console.log(+tabla+"x"+contador+"="+resultado+" bass");
       contImpar++
    }
    
  }
}
