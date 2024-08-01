/**
 *Tabla con condiciones
 * autor:JR
 * Fecha: 16 de abril del 2024
 * version:50
 */

 function tabla(ptabla,pnumHasta){
    let tabla=ptabla;
    let numHasta= pnumHasta;
    let resultado;
    let contPares=0;
    let contImpar=0;

    for(contador=0;contador<numHasta;contador++){
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
  return contImpar+ contPares;
  
}
const tablaExpresion=function (ptabla,pnumHasta){
  let tabla=ptabla;
  let numHasta= pnumHasta;
  let resultado;
  let contPares=0;
  let contImpar=0;

  for(contador=0;contador<numHasta;contador++){
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
return contImpar+ contPares;

}
