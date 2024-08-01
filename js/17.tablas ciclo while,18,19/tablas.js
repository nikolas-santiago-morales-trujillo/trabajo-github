/**
 *Tablas
 * autor:JR
 * Fecha: 12 de abril del 2024
 * version:36
 */
function tabla(ptabla, pnumHasta) {
    let tabla = ptabla;
    let numHasta = pnumHasta;
    let contador = 0;
    let multiplicacion = 0;

    while (contador < numHasta) {
        contador++;
        multiplicacion = tabla * contador
        console.log(tabla + "x" + contador + "=" + multiplicacion);
    }
}

const tablaExpresion = function (pparim, ptabla, pnumHasta, pbb, pcont) {
    let parim = pparim;
    let bb = pbb;
    let cont = pcont;
    let tabla = ptabla;
    let numHasta = pnumHasta;
    let contador = 0;
    let multiplicacion = 0;

    while (contador < numHasta) {
        contador++;
        multiplicacion = tabla * contador;

        if (parim == "par e impar") {
            parImpar(multiplicacion);
        } else {
            console.log(tabla + "x" + contador + "=" + multiplicacion);
        }
        if (bb == "clasificar bb") {
            bussbazz(multiplicacion)
        } else {
            console.log(":)");
        }
    }
    if (cont == "contar") {
        contadorpp2(ptabla, multiplicacion);
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
