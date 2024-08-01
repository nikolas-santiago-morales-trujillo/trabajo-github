/**
 *Tabla
 * autor:JR
 * Fecha: 12 de abril del 2024
 * version:38
 */
 function tabla(ptabla,pnumHasta){
    let tabla= ptabla;
    let numHasta=pnumHasta;
    let contador=0;
    let multiplicacion=0;

    while(contador<numHasta){
        contador++;
        multiplicacion=tabla*contador;
    
        if (multiplicacion%2==0){
            console.log (+multiplicacion+" = es par");
        }
        else{
            console.log (+multiplicacion+ " = es impar");
        }
    }

}

const tablaExpresion=function(ptabla,pnumHasta){
    let tabla= ptabla;
    let numHasta=pnumHasta;
    let contador=0;
    let multiplicacion=0;

    while(contador<numHasta){
        contador++;
        multiplicacion=tabla*contador;

        if (multiplicacion%2==0){
            console.log (+multiplicacion+" = es par");
        }
        else{
            console.log (+multiplicacion+ " = es impar");
        }
    }

}