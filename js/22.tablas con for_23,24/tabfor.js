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

const tablaExpresion=function(pparim, ptabla, pnumHasta, pbb, pcont){
    let parim = pparim;
    let bb = pbb;
    let cont = pcont;
    let tabla = ptabla;
    let numHasta = pnumHasta;
    let resultado = 0;
   
    for(contador=1; contador<=numHasta;contador++){
     resultado=tabla*contador;

        if (parim == "par e impar") {
            parImpar(resultado);
        } else {
            console.log(tabla + "x" + contador + "=" + resultado);
        }
        if (bb == "clasificar bb") {
            bussbazz(resultado)
        } else {
            console.log(":)");
        }
    }
    if (cont == "contar") {
        contadorpp2(ptabla, resultado);
    } else {
        console.log("no se contaran :)");
    }

}
const parImpar = function (pnum) {
    let num=pnum;
    if (num % 2 == 0) {
        console.log(+num + " = es par");
    } else {
        console.log(+num + " = es impar");
    }
}

const bussbazz = function (pnume) {
    let nume=pnume;
    if (nume % 2 == 0) {
        console.log(" es buzz");
    } else {
        console.log(" es bass");
    }
}

const contadorpp2 = function (pnumeroTabla, presultado) {
    let contpar = 0;
    let contImpar = 0;
    let numeroTabla=pnumeroTabla;
    let resultado=presultado;
    while (resultado > 0) {

        if (resultado % 2 == 0) {
            contpar++
        } else {
            contImpar++
        }
        resultado = resultado - numeroTabla;
    }

    console.log("Hay " + contpar + " pares");
    console.log("Hay " + contImpar + " impares");
}

