/**
 * Edad
 * autor:JRr
 * Fecha: 06 de abril del 2024
 * version:12
 */
function calcular(pyearBegin){
    let yearBegin=pyearBegin;
    let yearNow= new Date().getFullYear();
    let edad;
    edad= yearNow-yearBegin;
    return edad;
}

const calcularExpresion= function(pyearBegin){
    let yearBegin=pyearBegin;
    let yearNow= new Date().getFullYear();
    let edad;
    edad= yearNow-yearBegin;
    return edad;
}

const mayorEdad=function(pyearBegin){
    let edaddes=calcular(pyearBegin)
    if (edaddes>17){
        return edaddes+ " _es mayor de edad";
    }
    else{ (edaddes<17)
        return edaddes+ " _es menor de edad";
    }

}

