/**
 * Mayor de edad 
 * autor:JR
 * Fecha: 07 de abril del 2024
 * version:22
 */

function mayorEdad(pyearBegin){
    let yearBegin= pyearBegin;
    let yearNow= new Date().getFullYear();
    let edad;
    edad= yearNow-yearBegin;

    if (edad>17){
        return edad+ " _es mayor de edad";
    }
    else{ (edad<17)
        return edad+ " _es menor de edad";
    }

}

const mayorEdadExpresion= function(pyearBegin){
    let yearBegin= pyearBegin;
    let yearNow= new Date().getFullYear();
    let edad;
    edad= yearNow-yearBegin;

    if (edad>17){
        return edad+ " _es mayor de edad";
    }
    else{ (edad<17)
        return edad+ " _es menor de edad";
    }

}